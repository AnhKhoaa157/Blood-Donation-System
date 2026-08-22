package org.fpt.blooddonate.services;

import org.fpt.blooddonate.configs.AppConfig;
import org.fpt.blooddonate.dtos.requests.CreateBlogCategoryRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateBlogCategoryRequestDTO;
import org.fpt.blooddonate.models.BlogCategory;
import org.fpt.blooddonate.repositories.BlogCategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogCategoryService {
    private final BlogCategoryRepository repository;

    public BlogCategoryService(BlogCategoryRepository repository) {
        this.repository = repository;
    }

    public List<BlogCategory> getAll() {
        return repository.findAll();
    }

    public Optional<BlogCategory> getById(Integer id) {
        return repository.findById(id);
    }

    public BlogCategory create(CreateBlogCategoryRequestDTO payload) {
        BlogCategory blogCategory = new BlogCategory();
        blogCategory.setTieuDe(payload.getTieude());
        blogCategory.setNoidung(payload.getNoidung());
        return repository.save(blogCategory);
    }

    public Optional<BlogCategory> update(Integer id, UpdateBlogCategoryRequestDTO payload) {
        return repository.findById(id).map(blogCategory -> {
            blogCategory.setTieuDe(payload.getTieude());
            blogCategory.setNoidung(payload.getNoidung());
            return repository.save(blogCategory);
        });
    }

    public Optional<BlogCategory> delete(Integer id) {
        return repository.findById(id).map(blogCategory -> {
            blogCategory.setTrangThai(AppConfig.INACTIVE_STATUS);
            return repository.save(blogCategory);
        });
    }
}
