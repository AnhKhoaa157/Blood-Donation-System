package org.fpt.blooddonate.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.fpt.blooddonate.dtos.requests.CreateReceiveDonationRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateReceiveDonationRequestDTO;
import org.fpt.blooddonate.models.BloodReceiveRequest;
import org.fpt.blooddonate.models.BloodUnitWareHouse;
import org.fpt.blooddonate.services.BloodReceiveRequestService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/blood-receive-requests")
@RequiredArgsConstructor
public class BloodReceiveRequestController {
    private final BloodReceiveRequestService bloodReceiveRequestService;

    @GetMapping
    public ResponseEntity<Page<BloodReceiveRequest>> getAll(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String keyword
    ) {
        Integer userId = (Integer) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok(bloodReceiveRequestService.getAllByUserId(userId, page, status, keyword));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Integer id) {
        Optional<BloodReceiveRequest> result = bloodReceiveRequestService.getById(id);
        if (result.isPresent()) {
            return ResponseEntity.ok(result.get());
        } else {
            return ResponseEntity.status(404).body("Not found request");
        }
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody CreateReceiveDonationRequestDTO payload) throws IOException {
        return ResponseEntity.ok(bloodReceiveRequestService.create(payload));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Integer id, @Valid @RequestBody UpdateReceiveDonationRequestDTO payload) throws IOException {
        return bloodReceiveRequestService.update(id, payload)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found request"));
    }

    @PostMapping("/{id}/cancel")
    public ResponseEntity<?> updateStatus(@PathVariable Integer id) throws IOException {
        return bloodReceiveRequestService.cancel(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found request"));
    }

    @GetMapping("/{id}/list-available-blood-unit-warehouse")
    public ResponseEntity<?> getListAvailableBloodUnitWareHouse(@PathVariable Integer id) throws IOException {
        List<BloodUnitWareHouse> list = bloodReceiveRequestService.getListAvailableBloodUnitWareHouse(id);
        return ResponseEntity.ok(list);
    }
}
