package org.fpt.blooddonate.controllers;

import org.fpt.blooddonate.models.CompatibleBlood;
import org.fpt.blooddonate.services.CompatibleBloodService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/compatible-bloods")
@RequiredArgsConstructor
public class CompatibleBloodController {
    private final CompatibleBloodService compatibleBloodService;

    @GetMapping
    public ResponseEntity<List<CompatibleBlood>> getAll(
            @RequestParam(required = false) int bloodId
    ) {
        return ResponseEntity.ok(compatibleBloodService.getAll(bloodId));
    }

    @GetMapping("/receive")
    public ResponseEntity<List<CompatibleBlood>> getAllReceive(
            @RequestParam(required = false) int bloodId
    ) {
        return ResponseEntity.ok(compatibleBloodService.getAllReceive(bloodId));
    }
}
