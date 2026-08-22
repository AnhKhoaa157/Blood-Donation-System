package org.fpt.blooddonate.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.fpt.blooddonate.dtos.requests.CreateBloodDonationActivityRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateBloodDonationActivityRequestDTO;
import org.fpt.blooddonate.models.BloodDonationActivity;
import org.fpt.blooddonate.services.BloodDonationActivityService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/blood-donation-activities")
@RequiredArgsConstructor
public class BloodDonationActivityController {
    private final BloodDonationActivityService bloodDonationActivityService;

    @GetMapping
    public ResponseEntity<Page<BloodDonationActivity>> getAll(
        @RequestParam(defaultValue = "1") int page,
        @RequestParam(required = false) String status,
        @RequestParam(required = false) String keyword
    ) {
        return ResponseEntity.ok(bloodDonationActivityService.getAll(page, status, keyword));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Integer id) {
        BloodDonationActivity result = bloodDonationActivityService.getById(id);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/detail/{id}")
    public ResponseEntity<?> getDetailById(@PathVariable Integer id) {
        Optional<BloodDonationActivity> result = bloodDonationActivityService.getDetailById(id);
        if (result.isPresent()) {
            return ResponseEntity.ok(result.get());
        } else {
            return ResponseEntity.status(404).body("Not found activity");
        }
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody CreateBloodDonationActivityRequestDTO payload) throws IOException {
        return ResponseEntity.ok(bloodDonationActivityService.create(payload));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Integer id, @Valid @RequestBody UpdateBloodDonationActivityRequestDTO payload) throws IOException {
        return bloodDonationActivityService.update(id, payload)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found activity"));
    }
}
