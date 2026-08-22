package org.fpt.blooddonate.services;

import org.fpt.blooddonate.dtos.requests.ChangeStatusDonationRequestDTO;
import org.fpt.blooddonate.dtos.requests.CompleteDonationRequestDTO;
import org.fpt.blooddonate.dtos.requests.CreateBloodDonationRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateBloodDonationRequestDTO;
import org.fpt.blooddonate.models.Blood;
import org.fpt.blooddonate.models.BloodDonationActivity;
import org.fpt.blooddonate.models.BloodDonationRequest;
import org.fpt.blooddonate.models.BloodUnitWareHouse;
import org.fpt.blooddonate.models.User;
import org.fpt.blooddonate.models.enums.BloodDonationRequestStatus;
import org.fpt.blooddonate.models.enums.BloodUnitStatus;
import org.fpt.blooddonate.repositories.BloodDonationActivityRespository;
import org.fpt.blooddonate.repositories.BloodDonationRequestRepository;
import org.fpt.blooddonate.repositories.BloodRepository;
import org.fpt.blooddonate.repositories.BloodUnitWareHouseRepository;
import org.fpt.blooddonate.repositories.UserRepository;
import org.fpt.blooddonate.utils.SendEmail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class BloodDonationRequestService {
    private final BloodDonationRequestRepository repository;
    private final BloodDonationActivityRespository bloodDonationActivityRepository;
    private final BloodUnitWareHouseRepository bloodUnitWareHouseRepository;
    private final UserRepository userRepository;
    private final BloodRepository bloodRepository;

    public BloodDonationRequestService(
            BloodDonationRequestRepository repository,
            BloodDonationActivityRespository bloodDonationActivityRepository,
            BloodUnitWareHouseRepository bloodUnitWareHouseRepository,
            UserRepository userRepository,
            BloodRepository bloodRepository
    ) {
        this.repository = repository;
        this.bloodDonationActivityRepository = bloodDonationActivityRepository;
        this.bloodUnitWareHouseRepository = bloodUnitWareHouseRepository;
        this.userRepository = userRepository;
        this.bloodRepository = bloodRepository;
    }

    public Page<BloodDonationRequest> getAll(int page, String status, String keyword) {
        return repository.paginated(parseStatus(status), normalizeKeyword(keyword), pageRequest(page));
    }

    public Page<BloodDonationRequest> getAllByUserId(int userId, int page, String status, String keyword) {
        return repository.paginatedByUserId(userId, parseStatus(status), normalizeKeyword(keyword), pageRequest(page));
    }

    public Optional<BloodDonationRequest> getById(Integer id) {
        return repository.findById(id);
    }

    public long getTotal() {
        return repository.count();
    }

    @Transactional
    public BloodDonationRequest create(CreateBloodDonationRequestDTO payload) throws IOException {
        LocalDate donationDate = parseDate(payload.getNgayHienMauDuKien(), "ngayHienMauDuKien");
        LocalDate recoveryDate = parseDate(payload.getNgayPhucHoiGanNhat(), "ngayPhucHoiGanNhat");
        validateDonationDates(donationDate, recoveryDate);
        validateAmount(payload.getSoLuong());
        validateBooleanFlag(payload.getDangMangThai(), "dangMangThai");
        validateBooleanFlag(payload.getMacBenhTruyenNhiem(), "macBenhTruyenNhiem");

        User donor = currentUser();
        BloodDonationRequest request = new BloodDonationRequest();
        request.setNguoiHien(donor);
        request.setGhiChu(payload.getGhiChu());
        request.setLoaiHien(payload.getLoaiHien());
        request.setSoLuong(payload.getSoLuong());
        request.setSucKhoeHienTai(payload.getSucKhoeHienTai());
        request.setDangMangThai(payload.getDangMangThai());
        request.setMacBenhTruyenNhiem(payload.getMacBenhTruyenNhiem());
        request.setNgayHienMauDuKien(donationDate);
        request.setNgayPhucHoiGanNhat(recoveryDate);

        if (payload.getHoatDongHienMau() != null) {
            BloodDonationActivity activity = bloodDonationActivityRepository
                    .findByIdForUpdate(payload.getHoatDongHienMau())
                    .orElseThrow(() -> badRequest("Not existed blood donation activity"));

            if (activity.getSoLuongNguoiDangKyHienTai() >= activity.getSoLuongNguoiToiDa()) {
                throw badRequest("All slots for this blood donation event have been filled");
            }
            if (donationDate.isBefore(activity.getNgayBatDau()) || donationDate.isAfter(activity.getNgayKetThuc())) {
                throw badRequest("Donation date must be within the activity dates");
            }

            activity.setSoLuongNguoiDangKyHienTai(activity.getSoLuongNguoiDangKyHienTai() + 1);
            request.setHoatDongHienMau(activity);
        }

        return repository.save(request);
    }

    @Transactional
    public Optional<BloodDonationRequest> update(Integer id, UpdateBloodDonationRequestDTO payload) throws IOException {
        return repository.findByIdForUpdate(id).map(request -> {
            requireOwner(request.getNguoiHien());
            if (request.getTrangThai() != BloodDonationRequestStatus.PENDING) {
                throw badRequest("Only pending requests can be updated");
            }

            LocalDate donationDate = parseDate(payload.getNgayHienMauDuKien(), "ngayHienMauDuKien");
            LocalDate recoveryDate = parseDate(payload.getNgayPhucHoiGanNhat(), "ngayPhucHoiGanNhat");
            validateDonationDates(donationDate, recoveryDate);
            validateAmount(payload.getSoLuong());
            validateBooleanFlag(payload.getDangMangThai(), "dangMangThai");
            validateBooleanFlag(payload.getMacBenhTruyenNhiem(), "macBenhTruyenNhiem");

            request.setGhiChu(payload.getGhiChu());
            request.setLoaiHien(payload.getLoaiHien());
            request.setSoLuong(payload.getSoLuong());
            request.setSucKhoeHienTai(payload.getSucKhoeHienTai());
            request.setDangMangThai(payload.getDangMangThai());
            request.setMacBenhTruyenNhiem(payload.getMacBenhTruyenNhiem());
            request.setNgayHienMauDuKien(donationDate);
            request.setNgayPhucHoiGanNhat(recoveryDate);
            return repository.save(request);
        });
    }

    @Transactional
    public Optional<BloodDonationRequest> cancel(Integer id) throws IOException {
        return repository.findByIdForUpdate(id).map(request -> {
            requireOwner(request.getNguoiHien());
            if (request.getTrangThai() != BloodDonationRequestStatus.PENDING) {
                throw badRequest("Only pending requests can be cancelled");
            }

            request.setTrangThai(BloodDonationRequestStatus.CANCELLED);
            request.setGhiChu("User cancelled blood donation request");
            if (request.getHoatDongHienMau() != null) {
                BloodDonationActivity activity = bloodDonationActivityRepository
                        .findByIdForUpdate(request.getHoatDongHienMau().getId()).orElseThrow();
                activity.setSoLuongNguoiDangKyHienTai(Math.max(0, activity.getSoLuongNguoiDangKyHienTai() - 1));
            }
            SendEmail.changeBloodDonationRequestStatus(request.getNguoiHien(), request, "huy");
            return repository.save(request);
        });
    }

    @Transactional
    public Optional<BloodDonationRequest> approve(Integer id) throws IOException {
        return repository.findByIdForUpdate(id).map(request -> {
            requireAdminOrEmployee();
            if (request.getTrangThai() != BloodDonationRequestStatus.PENDING) {
                throw badRequest("Only pending requests can be approved");
            }

            request.setTrangThai(BloodDonationRequestStatus.APPROVED);
            request.setNguoiDuyet(currentUserReference());
            request.setNgayDuyet(LocalDateTime.now());
            request.setGhiChu("Admin approved blood donation request");
            SendEmail.changeBloodDonationRequestStatus(request.getNguoiHien(), request, "xacnhan");
            return repository.save(request);
        });
    }

    @Transactional
    public Optional<BloodDonationRequest> reject(Integer id, ChangeStatusDonationRequestDTO payload) throws IOException {
        return repository.findByIdForUpdate(id).map(request -> {
            requireAdminOrEmployee();
            if (request.getTrangThai() != BloodDonationRequestStatus.PENDING) {
                throw badRequest("Only pending requests can be rejected");
            }

            request.setTrangThai(BloodDonationRequestStatus.REJECTED);
            request.setNguoiDuyet(currentUserReference());
            request.setFormKham(payload.getFormKham());
            request.setNgayDuyet(LocalDateTime.now());
            request.setGhiChu(hasText(payload.getGhiChu()) ? payload.getGhiChu() : "Admin rejected blood donation request");
            SendEmail.changeBloodDonationRequestStatus(request.getNguoiHien(), request, "tuchoi");
            return repository.save(request);
        });
    }

    @Transactional
    public Optional<BloodDonationRequest> complete(Integer id, CompleteDonationRequestDTO payload) throws IOException {
        return repository.findByIdForUpdate(id).map(request -> {
            requireAdminOrEmployee();
            if (request.getTrangThai() != BloodDonationRequestStatus.APPROVED) {
                throw badRequest("Only approved requests can be completed");
            }

            User donor = userRepository.findById(request.getNguoiHien().getId())
                    .orElseThrow(() -> badRequest("Donor not found"));
            if (donor.getNhomMau() == null) {
                throw badRequest("Donor blood type is required before completion");
            }

            request.setTrangThai(BloodDonationRequestStatus.COMPLETED);
            request.setNguoiDuyet(currentUserReference());
            request.setFormKham(payload.getFormKham());
            request.setNgayDuyet(LocalDateTime.now());
            request.setGhiChu("Admin completed blood donation request");

            Blood blood = bloodRepository.findById(donor.getNhomMau().getId())
                    .orElseThrow(() -> badRequest("Blood type not found"));
            BloodUnitWareHouse warehouse = new BloodUnitWareHouse();
            warehouse.setViTriLuuTru(payload.getViTriLuuTru());
            warehouse.setSoLuong(request.getSoLuong());
            warehouse.setThanhPhan(request.getLoaiHien());
            warehouse.setNguoiHien(donor);
            warehouse.setNhomMau(blood);
            warehouse.setNgayLayMau(LocalDateTime.now());
            warehouse.setTrangThai(BloodUnitStatus.WAITING_FOR_TESTING);
            bloodUnitWareHouseRepository.save(warehouse);

            SendEmail.changeBloodDonationRequestStatus(donor, request, "dahien");
            return repository.save(request);
        });
    }

    private User currentUser() {
        Integer id = currentUserId();
        return userRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Authenticated user not found"));
    }

    private User currentUserReference() {
        User user = new User();
        user.setId(currentUserId());
        return user;
    }

    private void requireOwner(User owner) {
        if (owner == null || !owner.getId().equals(currentUserId())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You can only change your own request");
        }
    }

    private void requireAdminOrEmployee() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || authentication.getAuthorities().stream()
                .noneMatch(authority -> authority.getAuthority().equals("ROLE_ADMIN")
                        || authority.getAuthority().equals("ROLE_EMPLOYEE"))) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Administrator or employee role required");
        }
    }

    private Integer currentUserId() {
        Object principal = SecurityContextHolder.getContext().getAuthentication() == null
                ? null : SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof Number number) {
            return number.intValue();
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Authentication required");
    }

    private BloodDonationRequestStatus parseStatus(String raw) {
        if (!hasText(raw)) {
            return null;
        }
        try {
            return BloodDonationRequestStatus.fromCode(raw);
        } catch (IllegalArgumentException ex) {
            throw badRequest("Unsupported blood donation request status");
        }
    }

    private Pageable pageRequest(int page) {
        if (page < 1) {
            throw badRequest("Page must be greater than zero");
        }
        return PageRequest.of(page - 1, 10);
    }

    private String normalizeKeyword(String keyword) {
        return hasText(keyword) ? keyword.trim() : null;
    }

    private LocalDate parseDate(String value, String field) {
        try {
            return LocalDate.parse(value);
        } catch (Exception ex) {
            throw badRequest(field + " must use yyyy-MM-dd format");
        }
    }

    private void validateDonationDates(LocalDate donationDate, LocalDate recoveryDate) {
        if (donationDate.isBefore(LocalDate.now())) {
            throw badRequest("Donation date cannot be in the past");
        }
        if (!recoveryDate.isBefore(donationDate)) {
            throw badRequest("Last recovery date must be before donation date");
        }
    }

    private void validateAmount(int amount) {
        if (amount <= 0 || amount > 2000) {
            throw badRequest("Blood amount must be between 1 and 2000 ml");
        }
    }

    private void validateBooleanFlag(int value, String field) {
        if (value != 0 && value != 1) {
            throw badRequest(field + " must be 0 or 1");
        }
    }

    private boolean hasText(String value) {
        return value != null && !value.isBlank();
    }

    private ResponseStatusException badRequest(String message) {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
    }
}
