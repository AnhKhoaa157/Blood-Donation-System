package org.fpt.blooddonate.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.fpt.blooddonate.dtos.requests.CreateSupportTicketRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateStatusSupportTicketRequestDTO;
import org.fpt.blooddonate.models.SupportTicket;
import org.fpt.blooddonate.services.SupportTicketService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;

@RestController
@RequestMapping("/api/support-tickets")
@RequiredArgsConstructor
public class SupportTicketController {
    private final SupportTicketService supportTicketService;

    @GetMapping
    public ResponseEntity<Page<SupportTicket>> getAll(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) String keyword
    ) {
        return ResponseEntity.ok(supportTicketService.getAll(page, status, keyword));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Integer id) {
        SupportTicket result = supportTicketService.getById(id);
        return ResponseEntity.ok(result);
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody CreateSupportTicketRequestDTO payload) throws IOException {
        return ResponseEntity.ok(supportTicketService.create(payload));
    }

    @PostMapping("/{id}/change-status")
    public ResponseEntity<?> updateStatus(@PathVariable Integer id, @Valid @RequestBody UpdateStatusSupportTicketRequestDTO payload) throws IOException {
        return supportTicketService.updateStatus(id, payload)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found support ticket"));
    }
}
