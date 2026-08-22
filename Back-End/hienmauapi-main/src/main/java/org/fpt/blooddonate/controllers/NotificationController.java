package org.fpt.blooddonate.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.fpt.blooddonate.dtos.requests.CreateNotificationRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateNotificationRequestDTO;
import org.fpt.blooddonate.models.Notification;
import org.fpt.blooddonate.services.NotificationService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/notifications")
@RequiredArgsConstructor
public class NotificationController {
    private final NotificationService notificationService;

    @GetMapping
    public ResponseEntity<Page<Notification>> getAll(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(required = false) Integer status,
            @RequestParam(required = false) String keyword
    ) {
        return ResponseEntity.ok(notificationService.getAll(page, status, keyword));
    }

    @GetMapping("/active")
    public ResponseEntity<Page<Notification>> getAllActive(
            @RequestParam(defaultValue = "1") int page,
            @RequestParam(required = false) String keyword
    ) {
        return ResponseEntity.ok(notificationService.getAllActive(page, keyword));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Integer id) {
        Optional<Notification> result = notificationService.getById(id);
        if (result.isPresent()) {
            return ResponseEntity.ok(result.get());
        } else {
            return ResponseEntity.status(404).body("Not found notification");
        }
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @ModelAttribute CreateNotificationRequestDTO payload) throws IOException {
        return ResponseEntity.ok(notificationService.create(payload));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Integer id, @Valid @ModelAttribute UpdateNotificationRequestDTO payload) throws IOException {
        return notificationService.update(id, payload)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found notification"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        return notificationService.delete(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found notification"));
    }
}
