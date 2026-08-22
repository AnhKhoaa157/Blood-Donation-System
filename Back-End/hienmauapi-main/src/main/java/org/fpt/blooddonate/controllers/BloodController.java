package org.fpt.blooddonate.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.fpt.blooddonate.dtos.requests.CreateBloodRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateBloodRequestDTO;
import org.fpt.blooddonate.models.Blood;
import org.fpt.blooddonate.services.BloodService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bloods")
@RequiredArgsConstructor
public class BloodController {
    private final BloodService bloodService;

    @GetMapping
    public ResponseEntity<List<Blood>> getAll() {
        return ResponseEntity.ok(bloodService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Integer id) {
        Blood result = bloodService.getById(id);
        return ResponseEntity.ok(result);
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody CreateBloodRequestDTO payload) {
        return ResponseEntity.ok(bloodService.create(payload));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Integer id, @Valid @RequestBody UpdateBloodRequestDTO payload) {
        return bloodService.update(id, payload)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found blood"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        return bloodService.delete(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found blood"));
    }
}
