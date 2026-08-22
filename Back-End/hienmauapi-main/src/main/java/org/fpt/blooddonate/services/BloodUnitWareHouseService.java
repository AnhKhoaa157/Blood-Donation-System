package org.fpt.blooddonate.services;

import org.fpt.blooddonate.dtos.requests.CancelBloodUnitWareHouseRequestDTO;
import org.fpt.blooddonate.dtos.requests.TestedBloodUnitWareHouseRequestDTO;
import org.fpt.blooddonate.models.BloodUnitWareHouse;
import org.fpt.blooddonate.models.enums.BloodUnitStatus;
import org.fpt.blooddonate.repositories.BloodUnitWareHouseRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class BloodUnitWareHouseService {
    private final BloodUnitWareHouseRepository bloodUnitWareHouseRepository;

    public BloodUnitWareHouseService(BloodUnitWareHouseRepository bloodUnitWareHouseRepository) {
        this.bloodUnitWareHouseRepository = bloodUnitWareHouseRepository;
    }

    public Page<BloodUnitWareHouse> getAll(int page, String status, String keyword) {
        if (page < 1) {
            throw badRequest("Page must be greater than zero");
        }
        return bloodUnitWareHouseRepository.paginated(
                parseStatus(status),
                keyword == null || keyword.isBlank() ? null : keyword.trim(),
                PageRequest.of(page - 1, 10)
        );
    }

    @Transactional
    public Optional<BloodUnitWareHouse> cancel(int id, CancelBloodUnitWareHouseRequestDTO payload) {
        return bloodUnitWareHouseRepository.findByIdForUpdate(id).map(unit -> {
            if (unit.getTrangThai() != BloodUnitStatus.WAITING_FOR_TESTING) {
                throw badRequest("Only blood units waiting for testing can be cancelled");
            }
            unit.setGhiChu(payload.getGhiChu());
            unit.setTrangThai(BloodUnitStatus.CANCELLED);
            return unit;
        });
    }

    public long getTotal() {
        return bloodUnitWareHouseRepository.count();
    }

    @Transactional
    public Optional<BloodUnitWareHouse> tested(int id, TestedBloodUnitWareHouseRequestDTO payload) {
        return bloodUnitWareHouseRepository.findByIdForUpdate(id).map(unit -> {
            if (unit.getTrangThai() != BloodUnitStatus.WAITING_FOR_TESTING) {
                throw badRequest("Only blood units waiting for testing can be tested");
            }
            LocalDateTime expiry = parseDateTime(payload.getNgayHetHan());
            if (unit.getNgayLayMau() != null && !expiry.isAfter(unit.getNgayLayMau())) {
                throw badRequest("Expiry date must be after collection date");
            }
            if (!expiry.isAfter(LocalDateTime.now())) {
                throw badRequest("Expiry date must be in the future");
            }
            unit.setKetQuaXetNghiem(payload.getKetQuaXetNghiem());
            unit.setTrangThai(BloodUnitStatus.READY);
            unit.setNgayHetHan(expiry);
            return unit;
        });
    }

    private BloodUnitStatus parseStatus(String value) {
        if (value == null || value.isBlank()) {
            return null;
        }
        try {
            return BloodUnitStatus.fromCode(value);
        } catch (IllegalArgumentException ex) {
            throw badRequest("Unsupported blood unit status");
        }
    }

    private LocalDateTime parseDateTime(String value) {
        try {
            return LocalDateTime.parse(value);
        } catch (Exception ex) {
            throw badRequest("ngayHetHan must use yyyy-MM-ddTHH:mm:ss format");
        }
    }

    private ResponseStatusException badRequest(String message) {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
    }
}
