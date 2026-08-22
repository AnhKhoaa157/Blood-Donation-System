package org.fpt.blooddonate.services;

import org.fpt.blooddonate.configs.AppConfig;
import org.fpt.blooddonate.dtos.requests.CreateBloodRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateBloodRequestDTO;
import org.fpt.blooddonate.models.Blood;
import org.fpt.blooddonate.repositories.BloodRepository;
import org.fpt.blooddonate.repositories.CompatibleBloodRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class BloodService {
    private final BloodRepository repository;
    private final CompatibleBloodRepository compatibleBloodRepository;

    public BloodService(BloodRepository repository, CompatibleBloodRepository compatibleBloodRepository) {
        this.repository = repository;
        this.compatibleBloodRepository = compatibleBloodRepository;
    }

    public List<Blood> getAll() {
        List<Blood> listBlood = repository.findAllByTrangThai(1);
        return listBlood;
    }

    public Blood getById(Integer id) {
        Blood blood = repository.findById(id)
             .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not existed blood"));

        return blood;
    }

    public Blood create(CreateBloodRequestDTO payload) {
        Blood blood = new Blood();
        blood.setTen(payload.getTen());
        blood.setMota(payload.getMota());
        return repository.save(blood);
    }

    public Optional<Blood> update(Integer id, UpdateBloodRequestDTO payload) {
        return repository.findById(id).map(blood -> {
            blood.setTen(payload.getTen());
            blood.setMota(payload.getMota());
            return repository.save(blood);
        });
    }

    public long getTotal() {
        return repository.count();
    }

    public Optional<Blood> delete(Integer id) {
        return repository.findById(id).map(blood -> {
            blood.setTrangThai(AppConfig.INACTIVE_STATUS);
            return repository.save(blood);
        });
    }
}
