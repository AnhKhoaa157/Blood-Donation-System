package org.fpt.blooddonate.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.fpt.blooddonate.dtos.requests.CreateBlogRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateBlogRequestDTO;
import org.fpt.blooddonate.models.Blog;
import org.springframework.data.domain.Page;
import org.fpt.blooddonate.services.BlogService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.Optional;

@RestController
@RequestMapping("/api/blogs")
@RequiredArgsConstructor
public class BlogController {
    private final BlogService blogService;

    @GetMapping
    public ResponseEntity<Page<Blog>> getAll(
        @RequestParam(defaultValue = "1") int page,
        @RequestParam(required = false) Integer categoryId,
        @RequestParam(required = false) Integer status,
        @RequestParam(required = false) String keyword
    ) {
        return ResponseEntity.ok(blogService.getAll(page, categoryId, status, keyword));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Integer id) {
        Optional<Blog> result = blogService.getById(id);
        if (result.isPresent()) {
            return ResponseEntity.ok(result.get());
        } else {
            return ResponseEntity.status(404).body("Not found blog");
        }
    }

    @PostMapping
    public ResponseEntity<?> create(@Valid @ModelAttribute CreateBlogRequestDTO payload) throws IOException {
        return ResponseEntity.ok(blogService.create(payload));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Integer id, @Valid @ModelAttribute UpdateBlogRequestDTO payload) throws IOException {
        return blogService.update(id, payload)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found blog"));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Integer id) {
        return blogService.delete(id)
                .<ResponseEntity<?>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body("Not found blog"));
    }
}
