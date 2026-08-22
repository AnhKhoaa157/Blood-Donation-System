package org.fpt.blooddonate.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.fpt.blooddonate.dtos.requests.CreateBlogCategoryRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateBlogCategoryRequestDTO;
import org.fpt.blooddonate.models.BlogCategory;
import org.fpt.blooddonate.services.BlogCategoryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/blog-categories")
@RequiredArgsConstructor
public class BlogCategoryController {
    private final BlogCategoryService blogCategoryService;

    @GetMapping
    public ResponseEntity<List<BlogCategory>> getAll() {
        return ResponseEntity.ok(blogCategoryService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Integer id) {
        Optional<BlogCategory> result = blogCategoryService.getById(id);
        if (result.isPresent()) {
            return ResponseEntity.ok(result.get());
        } else {
            return ResponseEntity.status(404).body("Not found blood");
        }
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @RequestBody CreateBlogCategoryRequestDTO payload) {
        return ResponseEntity.ok(blogCategoryService.create(payload));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Integer id, @Valid @RequestBody UpdateBlogCategoryRequestDTO payload) {
        return blogCategoryService.update(id, payload)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found category"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        return blogCategoryService.delete(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found category"));
    }
}
