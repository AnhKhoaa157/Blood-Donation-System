package org.fpt.blooddonate.services;

import org.fpt.blooddonate.dtos.requests.CreateCompatibleBloodDTO;
import org.fpt.blooddonate.dtos.requests.UpdateStatusCompatibleBlood;
import org.fpt.blooddonate.models.*;
import org.fpt.blooddonate.repositories.BloodRepository;
import org.fpt.blooddonate.repositories.CompatibleBloodRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class CompatibleBloodService {
    private final CompatibleBloodRepository repository;
    private final BloodRepository bloodRepository;

    public CompatibleBloodService(CompatibleBloodRepository repository, BloodRepository bloodRepository) {
        this.repository = repository;
        this.bloodRepository = bloodRepository;
    }

    public List<CompatibleBlood> getAll(int bloodId) {
        return repository.findAllByNhomMauHien(bloodId);
    }

    public List<CompatibleBlood> getAllReceive(int bloodId) {
        return repository.findAllByNhomMauNhan(bloodId);
    }

    public Optional<CompatibleBlood> getById(Integer id) {
        return repository.findById(id);
    }

    public CompatibleBlood create(CreateCompatibleBloodDTO payload) throws IOException {
        this.bloodRepository.findById(payload.getNhomMauHien())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not existed blood " + payload.getNhomMauHien()));

        this.bloodRepository.findById(payload.getNhomMauNhan())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Not existed blood " + payload.getNhomMauNhan()));

        List<CompatibleBlood> list = repository.findAllByNhomMauHien(payload.getNhomMauHien());
        for (CompatibleBlood compatibleBlood : list) {
            if (compatibleBlood.getNhomMauNhan().getId() == payload.getNhomMauNhan()) {
                throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Blood already exists");
            }
        }

        Blood sourceBlood = new Blood();
        sourceBlood.setId(payload.getNhomMauHien());

        Blood targetBlood = new Blood();
        targetBlood.setId(payload.getNhomMauNhan());

        CompatibleBlood compatibleBlood = new CompatibleBlood();
        compatibleBlood.setNhomMauHien(sourceBlood);
        compatibleBlood.setNhomMauNhan(targetBlood);
        return repository.save(compatibleBlood);
    }

    public Optional<CompatibleBlood> updateStatus(Integer id, UpdateStatusCompatibleBlood payload) {
        return repository.findById(id).map(compatibleBlood -> {
            System.out.println(payload.getTrangthai());
            compatibleBlood.setTrangThai(payload.getTrangthai());
            repository.save(compatibleBlood);
            return compatibleBlood;
        });
    }
}
