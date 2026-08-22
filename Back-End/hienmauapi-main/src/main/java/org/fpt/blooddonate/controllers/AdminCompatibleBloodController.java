package org.fpt.blooddonate.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.fpt.blooddonate.dtos.requests.CreateCompatibleBloodDTO;
import org.fpt.blooddonate.dtos.requests.UpdateStatusCompatibleBlood;
import org.fpt.blooddonate.services.CompatibleBloodService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/admin/compatible-bloods")
@RequiredArgsConstructor
public class AdminCompatibleBloodController {
    private final CompatibleBloodService compatibleBloodService;

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody CreateCompatibleBloodDTO payload) throws IOException {
        return ResponseEntity.ok(compatibleBloodService.create(payload));
    }

    @PostMapping("/{id}/change-status")
    public ResponseEntity<?> updateStatus(@PathVariable Integer id, @Valid @RequestBody UpdateStatusCompatibleBlood payload) throws IOException {
        return compatibleBloodService.updateStatus(id, payload)
            .<ResponseEntity<?>>map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.status(404).body("Not found blood"));
    }
}
