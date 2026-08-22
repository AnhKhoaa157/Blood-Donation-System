package org.fpt.blooddonate.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.fpt.blooddonate.dtos.requests.CancelBloodUnitWareHouseRequestDTO;
import org.fpt.blooddonate.dtos.requests.TestedBloodUnitWareHouseRequestDTO;
import org.fpt.blooddonate.models.BloodUnitWareHouse;
import org.fpt.blooddonate.services.BloodUnitWareHouseService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/admin/blood-unit-warehouses")
@RequiredArgsConstructor
public class AdminBloodUnitWareHouseController {
    private final BloodUnitWareHouseService bloodUnitWareHouseService;

    @GetMapping
    public ResponseEntity<Page<BloodUnitWareHouse>> getAll(
        @RequestParam(defaultValue = "1") int page,
        @RequestParam(required = false) String status,
        @RequestParam(required = false) String keyword
    ) {
        return ResponseEntity.ok(bloodUnitWareHouseService.getAll(page, status, keyword));
    }

    @PostMapping("/{id}/cancel")
    public ResponseEntity<?> cancel(@PathVariable Integer id, @Valid @RequestBody CancelBloodUnitWareHouseRequestDTO payload) throws IOException {
        return bloodUnitWareHouseService.cancel(id, payload)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found blood unit warehouse"));
    }

    @PostMapping("/{id}/tested")
    public ResponseEntity<?> tested(@PathVariable Integer id, @Valid @RequestBody TestedBloodUnitWareHouseRequestDTO payload) throws IOException {
        return bloodUnitWareHouseService.tested(id, payload)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found blood unit warehouse"));
    }
}
