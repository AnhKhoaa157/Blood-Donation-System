package org.fpt.blooddonate.services;

import org.fpt.blooddonate.dtos.requests.ChangeStatusBloodReceiveRequestToAvailable;
import org.fpt.blooddonate.dtos.requests.ChangeStatusDonationRequestDTO;
import org.fpt.blooddonate.dtos.requests.CompleteReceiveRequestDTO;
import org.fpt.blooddonate.dtos.requests.CreateReceiveDonationRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateReceiveDonationRequestDTO;
import org.fpt.blooddonate.models.Blood;
import org.fpt.blooddonate.models.BloodReceiveRequest;
import org.fpt.blooddonate.models.BloodUnitWareHouse;
import org.fpt.blooddonate.models.CompatibleBlood;
import org.fpt.blooddonate.models.User;
import org.fpt.blooddonate.models.enums.BloodReceiveRequestStatus;
import org.fpt.blooddonate.models.enums.BloodUnitStatus;
import org.fpt.blooddonate.repositories.BloodReceiveRequestRepository;
import org.fpt.blooddonate.repositories.BloodRepository;
import org.fpt.blooddonate.repositories.BloodUnitWareHouseRepository;
import org.fpt.blooddonate.repositories.CompatibleBloodRepository;
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
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class BloodReceiveRequestService {
    private final BloodReceiveRequestRepository repository;
    private final BloodUnitWareHouseRepository bloodUnitWareHouseRepository;
    private final CompatibleBloodRepository compatibleBloodRepository;
    private final BloodRepository bloodRepository;
    private final UserRepository userRepository;

    public BloodReceiveRequestService(
            BloodReceiveRequestRepository repository,
            BloodUnitWareHouseRepository bloodUnitWareHouseRepository,
            CompatibleBloodRepository compatibleBloodRepository,
            BloodRepository bloodRepository,
            UserRepository userRepository
    ) {
        this.repository = repository;
        this.bloodUnitWareHouseRepository = bloodUnitWareHouseRepository;
        this.compatibleBloodRepository = compatibleBloodRepository;
        this.bloodRepository = bloodRepository;
        this.userRepository = userRepository;
    }

    public Page<BloodReceiveRequest> getAll(int page, String status, String keyword) {
        return repository.paginated(parseStatus(status), normalizeKeyword(keyword), pageRequest(page));
    }

    public Page<BloodReceiveRequest> getAllByUserId(int userId, int page, String status, String keyword) {
        return repository.paginatedByUserId(userId, parseStatus(status), normalizeKeyword(keyword), pageRequest(page));
    }

    public Optional<BloodReceiveRequest> getById(Integer id) {
        return repository.findById(id);
    }

    public long getTotal() {
        return repository.count();
    }

    @Transactional
    public BloodReceiveRequest create(CreateReceiveDonationRequestDTO payload) throws IOException {
        LocalDate expectedDate = parseDate(payload.getNgayNhanMauDuKien(), "ngayNhanMauDuKien");
        validateDate(expectedDate);
        validateAmount(payload.getSoLuongDonVi());
        validateBooleanFlag(payload.getKhanCap(), "khanCap");
        validateBooleanFlag(payload.getDangMangThai(), "dangMangThai");
        validateBooleanFlag(payload.getMacBenhTruyenNhiem(), "macBenhTruyenNhiem");

        Blood blood = bloodRepository.findById(payload.getNhomMau())
                .orElseThrow(() -> badRequest("Not existed blood"));
        BloodReceiveRequest request = new BloodReceiveRequest();
        request.setNhomMau(blood);
        request.setNguoiNhan(currentUser());
        request.setKhanCap(payload.getKhanCap() == 1);
        request.setLyDo(payload.getLyDo());
        request.setDiaChiNhanMau(payload.getDiaChiNhanMau());
        request.setThanhPhanMauCan(payload.getThanhPhanMauCan());
        request.setNgayNhanMauDuKien(expectedDate);
        request.setSoLuongDonVi(payload.getSoLuongDonVi());
        request.setSucKhoeHienTai(payload.getSucKhoeHienTai());
        request.setDangMangThai(payload.getDangMangThai());
        request.setMacBenhTruyenNhiem(payload.getMacBenhTruyenNhiem());
        return repository.save(request);
    }

    @Transactional
    public Optional<BloodReceiveRequest> update(Integer id, UpdateReceiveDonationRequestDTO payload) throws IOException {
        return repository.findByIdForUpdate(id).map(request -> {
            requireOwner(request.getNguoiNhan());
            if (request.getTrangThai() != BloodReceiveRequestStatus.PENDING) {
                throw badRequest("Only pending requests can be updated");
            }
            LocalDate expectedDate = parseDate(payload.getNgayNhanMauDuKien(), "ngayNhanMauDuKien");
            validateDate(expectedDate);
            validateAmount(payload.getSoLuongDonVi());
            validateBooleanFlag(payload.getKhanCap(), "khanCap");
            validateBooleanFlag(payload.getDangMangThai(), "dangMangThai");
            validateBooleanFlag(payload.getMacBenhTruyenNhiem(), "macBenhTruyenNhiem");

            Blood blood = bloodRepository.findById(payload.getNhomMau())
                    .orElseThrow(() -> badRequest("Not existed blood"));
            request.setNhomMau(blood);
            request.setKhanCap(payload.getKhanCap() == 1);
            request.setLyDo(payload.getLyDo());
            request.setDiaChiNhanMau(payload.getDiaChiNhanMau());
            request.setThanhPhanMauCan(payload.getThanhPhanMauCan());
            request.setNgayNhanMauDuKien(expectedDate);
            request.setSoLuongDonVi(payload.getSoLuongDonVi());
            request.setSucKhoeHienTai(payload.getSucKhoeHienTai());
            request.setDangMangThai(payload.getDangMangThai());
            request.setMacBenhTruyenNhiem(payload.getMacBenhTruyenNhiem());
            return repository.save(request);
        });
    }

    @Transactional
    public Optional<BloodReceiveRequest> cancel(Integer id) throws IOException {
        return repository.findByIdForUpdate(id).map(request -> {
            requireOwner(request.getNguoiNhan());
            if (request.getTrangThai() != BloodReceiveRequestStatus.PENDING) {
                throw badRequest("Only pending requests can be cancelled");
            }

            request.setTrangThai(BloodReceiveRequestStatus.CANCELLED);
            request.setGhiChu("User cancelled blood receive request");
            SendEmail.changeBloodReceiveRequestStatus(request.getNguoiNhan(), request, "huy");
            return repository.save(request);
        });
    }

    @Transactional
    public Optional<BloodReceiveRequest> available(Integer id, ChangeStatusBloodReceiveRequestToAvailable payload) throws IOException {
        BloodReceiveRequest request = repository.findByIdForUpdate(id).orElse(null);
        if (request == null) {
            return Optional.empty();
        }
        requireAdminOrEmployee();
        if (request.getTrangThai() != BloodReceiveRequestStatus.PENDING) {
            throw badRequest("Only pending requests can be made available");
        }

        List<Integer> requestedIds = payload.getDanhSachKhoDonViMau();
        if (requestedIds == null || requestedIds.isEmpty()) {
            throw badRequest("At least one blood unit is required");
        }
        Set<Integer> uniqueIds = new HashSet<>(requestedIds);
        if (uniqueIds.size() != requestedIds.size()) {
            throw badRequest("Blood unit IDs must be unique");
        }

        Set<Integer> compatibleBloodIds = compatibleDonorBloodIds(request.getNhomMau().getId());
        List<BloodUnitWareHouse> units = new ArrayList<>();
        int totalQuantity = 0;
        for (Integer unitId : requestedIds) {
            BloodUnitWareHouse unit = bloodUnitWareHouseRepository.findByIdForUpdate(unitId)
                    .orElseThrow(() -> badRequest("Blood unit warehouse not found"));
            if (unit.getTrangThai() != BloodUnitStatus.READY || unit.getYeuCauCanMau() != null) {
                throw badRequest("Every selected blood unit must be ready and unallocated");
            }
            if (unit.getNgayHetHan() == null || !unit.getNgayHetHan().isAfter(LocalDateTime.now())) {
                throw badRequest("Expired blood units cannot be allocated");
            }
            if (unit.getNhomMau() == null || !compatibleBloodIds.contains(unit.getNhomMau().getId())) {
                throw badRequest("Selected blood unit is not compatible with the requested blood type");
            }
            totalQuantity = Math.addExact(totalQuantity, unit.getSoLuong());
            units.add(unit);
        }
        if (totalQuantity < request.getSoLuongDonVi()) {
            throw badRequest("Selected blood units do not contain enough blood");
        }

        for (BloodUnitWareHouse unit : units) {
            unit.setYeuCauCanMau(request);
        }
        request.setNguoiDuyet(currentUserReference());
        request.setNgayDuyet(LocalDateTime.now());
        request.setTrangThai(BloodReceiveRequestStatus.HAVE_BLOOD);
        request.setGhiChu("Admin made blood receive request available");
        SendEmail.changeBloodReceiveRequestStatus(request.getNguoiNhan(), request, "dacomau");
        return Optional.of(repository.save(request));
    }

    @Transactional
    public Optional<BloodReceiveRequest> reject(Integer id, ChangeStatusDonationRequestDTO payload) throws IOException {
        return repository.findByIdForUpdate(id).map(request -> {
            requireAdminOrEmployee();
            if (request.getTrangThai() != BloodReceiveRequestStatus.PENDING) {
                throw badRequest("Only pending requests can be rejected");
            }
            request.setTrangThai(BloodReceiveRequestStatus.CANCELLED);
            request.setNguoiDuyet(currentUserReference());
            request.setFormKham(payload.getFormKham());
            request.setNgayDuyet(LocalDateTime.now());
            request.setGhiChu(hasText(payload.getGhiChu()) ? payload.getGhiChu() : "Admin rejected blood receive request");
            SendEmail.changeBloodReceiveRequestStatus(request.getNguoiNhan(), request, "huy");
            return repository.save(request);
        });
    }

    @Transactional
    public Optional<BloodReceiveRequest> complete(Integer id, CompleteReceiveRequestDTO payload) throws IOException {
        return repository.findByIdForUpdate(id).map(request -> {
            requireAdminOrEmployee();
            if (request.getTrangThai() != BloodReceiveRequestStatus.HAVE_BLOOD) {
                throw badRequest("Only requests with allocated blood can be completed");
            }

            request.setTrangThai(BloodReceiveRequestStatus.COMPLETED);
            request.setNguoiDuyet(currentUserReference());
            request.setFormKham(payload.getFormKham());
            request.setNgayDuyet(LocalDateTime.now());
            request.setGhiChu("Admin completed blood receive request");
            List<BloodUnitWareHouse> units = bloodUnitWareHouseRepository.findAllByYeuCauCanMau(request);
            for (BloodUnitWareHouse unit : units) {
                BloodUnitWareHouse lockedUnit = bloodUnitWareHouseRepository.findByIdForUpdate(unit.getId()).orElseThrow();
                lockedUnit.setTrangThai(BloodUnitStatus.USED);
            }
            SendEmail.changeBloodReceiveRequestStatus(request.getNguoiNhan(), request, "dahoanthanh");
            return repository.save(request);
        });
    }

    @Transactional(readOnly = true)
    public List<BloodUnitWareHouse> getListAvailableBloodUnitWareHouse(Integer id) {
        BloodReceiveRequest request = repository.findById(id)
                .orElseThrow(() -> badRequest("Not existed request"));
        return bloodUnitWareHouseRepository.findListAvailableForReceive(
                new ArrayList<>(compatibleDonorBloodIds(request.getNhomMau().getId())),
                LocalDateTime.now(),
                BloodUnitStatus.READY
        );
    }

    @Transactional(readOnly = true)
    public List<BloodUnitWareHouse> getListBloodUnitUsed(Integer id) {
        BloodReceiveRequest request = repository.findById(id)
                .orElseThrow(() -> badRequest("Not existed request"));
        return bloodUnitWareHouseRepository.findAllByYeuCauCanMau(request);
    }

    private Set<Integer> compatibleDonorBloodIds(Integer receiverBloodId) {
        Set<Integer> ids = new HashSet<>();
        ids.add(receiverBloodId);
        for (CompatibleBlood compatibility : compatibleBloodRepository.findAllByNhomMauHien(receiverBloodId)) {
            if (compatibility.getTrangThai() == 1 && compatibility.getNhomMauHien() != null) {
                ids.add(compatibility.getNhomMauHien().getId());
            }
        }
        return ids;
    }

    private User currentUser() {
        return userRepository.findById(currentUserId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Authenticated user not found"));
    }

    private User currentUserReference() {
        User user = new User();
        user.setId(currentUserId());
        return user;
    }

    private Integer currentUserId() {
        Object principal = SecurityContextHolder.getContext().getAuthentication() == null
                ? null : SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof Number number) {
            return number.intValue();
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Authentication required");
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

    private BloodReceiveRequestStatus parseStatus(String raw) {
        if (!hasText(raw)) {
            return null;
        }
        try {
            return BloodReceiveRequestStatus.fromCode(raw);
        } catch (IllegalArgumentException ex) {
            throw badRequest("Unsupported blood receive request status");
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

    private void validateDate(LocalDate date) {
        if (date.isBefore(LocalDate.now())) {
            throw badRequest("Expected receive date cannot be in the past");
        }
    }

    private void validateAmount(int amount) {
        if (amount <= 0 || amount > 100) {
            throw badRequest("Requested blood unit count must be between 1 and 100");
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
