package org.fpt.blooddonate.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.fpt.blooddonate.dtos.requests.*;
import org.fpt.blooddonate.models.BloodDonationRequest;
import org.fpt.blooddonate.services.BloodDonationRequestService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin/blood-donation-requests")
@RequiredArgsConstructor
public class AdminBloodDonationRequestController {
    private final BloodDonationRequestService bloodDonationRequestService;

    @GetMapping
    public ResponseEntity<Page<BloodDonationRequest>> getAll(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String keyword
    ) {
        return ResponseEntity.ok(bloodDonationRequestService.getAll(page, status, keyword));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<Page<BloodDonationRequest>> getAllByUserId(
            @PathVariable Integer userId,
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String keyword
    ) {
        return ResponseEntity.ok(bloodDonationRequestService.getAllByUserId(userId, page, status, keyword));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Integer id) {
        Optional<BloodDonationRequest> result = bloodDonationRequestService.getById(id);
        if (result.isPresent()) {
            return ResponseEntity.ok(result.get());
        } else {
            return ResponseEntity.status(404).body("Not found request");
        }
    }

    @PostMapping("/{id}/approve")
    public ResponseEntity<?> approve(@PathVariable Integer id) throws IOException {
        return bloodDonationRequestService.approve(id)
            .<ResponseEntity<?>>map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.status(404).body("Not found activity"));
    }

    @PostMapping("/{id}/reject")
    public ResponseEntity<?> reject(@PathVariable Integer id, @Valid @RequestBody ChangeStatusDonationRequestDTO payload) throws IOException {
        return bloodDonationRequestService.reject(id, payload)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found activity"));
    }

    @PostMapping("/{id}/complete")
    public ResponseEntity<?> complete(@PathVariable Integer id, @Valid @RequestBody CompleteDonationRequestDTO payload) throws IOException {
        return bloodDonationRequestService.complete(id, payload)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found activity"));
    }
}
