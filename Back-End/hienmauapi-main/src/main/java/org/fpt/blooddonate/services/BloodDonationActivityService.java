package org.fpt.blooddonate.services;

import org.fpt.blooddonate.dtos.requests.CreateBloodDonationActivityRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateBloodDonationActivityRequestDTO;
import org.fpt.blooddonate.models.BloodDonationActivity;
import org.fpt.blooddonate.models.BloodDonationRequest;
import org.fpt.blooddonate.models.User;
import org.fpt.blooddonate.models.enums.BloodDonationActivityStatus;
import org.fpt.blooddonate.repositories.BloodDonationActivityRespository;
import org.fpt.blooddonate.repositories.UserRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class BloodDonationActivityService {
    private final BloodDonationActivityRespository repository;
    private final UserRepository userRepository;

    public BloodDonationActivityService(
            BloodDonationActivityRespository repository,
            UserRepository userRepository
    ) {
        this.repository = repository;
        this.userRepository = userRepository;
    }

    public Page<BloodDonationActivity> getAll(int page, String status, String keyword) {
        if (page < 1) {
            throw badRequest("Page must be greater than zero");
        }
        return repository.paginated(parseStatus(status),
                keyword == null || keyword.isBlank() ? null : keyword.trim(),
                PageRequest.of(page - 1, 10));
    }

    public BloodDonationActivity getById(Integer id) {
        BloodDonationActivity activity = repository.findById(id)
                .orElseThrow(() -> badRequest("Not existed activity"));
        List<BloodDonationRequest> requests = Collections.emptyList();
        activity.setDanhSachYeuCauHieuMau(requests);
        return activity;
    }

    public Optional<BloodDonationActivity> getDetailById(Integer id) {
        return repository.findById(id);
    }

    @Transactional
    public BloodDonationActivity create(CreateBloodDonationActivityRequestDTO payload) throws IOException {
        LocalDate start = parseDate(payload.getNgayBatDau(), "ngayBatDau");
        LocalDate end = parseDate(payload.getNgayKetThuc(), "ngayKetThuc");
        validateDates(start, end);
        validateCapacity(payload.getSoLuongNguoiToiDa());

        BloodDonationActivity activity = new BloodDonationActivity();
        activity.setNguoiTao(userRepository.getReferenceById(currentUserId()));
        activity.setTen(payload.getTen());
        activity.setDiaDiem(payload.getDiaDiem());
        activity.setMoTa(payload.getMoTa());
        activity.setSoLuongNguoiToiDa(payload.getSoLuongNguoiToiDa());
        activity.setNgayBatDau(start);
        activity.setNgayKetThuc(end);
        activity.setTrangThaiHoatDong(BloodDonationActivityStatus.COMING_SOON);
        return repository.save(activity);
    }

    public long getTotal() {
        return repository.count();
    }

    @Transactional
    public Optional<BloodDonationActivity> update(Integer id, UpdateBloodDonationActivityRequestDTO payload) throws IOException {
        return repository.findByIdForUpdate(id).map(activity -> {
            if (activity.getNguoiTao() == null || !activity.getNguoiTao().getId().equals(currentUserId())) {
                throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You are not the owner of this activity");
            }
            LocalDate start = parseDate(payload.getNgayBatDau(), "ngayBatDau");
            LocalDate end = parseDate(payload.getNgayKetThuc(), "ngayKetThuc");
            validateDates(start, end);
            validateCapacity(payload.getSoLuongNguoiToiDa());
            if (payload.getSoLuongNguoiToiDa() < activity.getSoLuongNguoiDangKyHienTai()) {
                throw badRequest("Capacity cannot be lower than current registrations");
            }

            activity.setTen(payload.getTen());
            activity.setDiaDiem(payload.getDiaDiem());
            activity.setMoTa(payload.getMoTa());
            activity.setNgayBatDau(start);
            activity.setNgayKetThuc(end);
            activity.setSoLuongNguoiToiDa(payload.getSoLuongNguoiToiDa());
            activity.setTrangThaiHoatDong(parseStatus(payload.getTrangthai()));
            return activity;
        });
    }

    private BloodDonationActivityStatus parseStatus(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        try {
            return BloodDonationActivityStatus.fromCode(value);
        } catch (IllegalArgumentException ex) {
            throw badRequest("Unsupported blood donation activity status");
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

    private LocalDate parseDate(String value, String field) {
        try {
            return LocalDate.parse(value);
        } catch (Exception ex) {
            throw badRequest(field + " must use yyyy-MM-dd format");
        }
    }

    private void validateDates(LocalDate start, LocalDate end) {
        if (start.isBefore(LocalDate.now()) || !end.isAfter(start)) {
            throw badRequest("Activity dates must be future dates with an end after the start");
        }
    }

    private void validateCapacity(Integer capacity) {
        if (capacity == null || capacity <= 0 || capacity > 100000) {
            throw badRequest("Activity capacity must be between 1 and 100000");
        }
    }

    private ResponseStatusException badRequest(String message) {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
    }
}
