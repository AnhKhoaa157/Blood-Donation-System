package org.fpt.blooddonate.services;
import org.fpt.blooddonate.configs.AppConfig;
import org.fpt.blooddonate.models.Blood;
import org.fpt.blooddonate.models.CompatibleBlood;
import org.fpt.blooddonate.repositories.BloodRepository;
import org.fpt.blooddonate.repositories.CompatibleBloodRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import org.fpt.blooddonate.models.User;
import org.fpt.blooddonate.repositories.UserRepository;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final BloodRepository bloodRepository;
    private final CompatibleBloodRepository compatibleBloodRepository;

    public UserService(
            UserRepository userRepository,
            BloodRepository bloodRepository,
            CompatibleBloodRepository compatibleBloodRepository
    ) {
        this.userRepository = userRepository;
        this.bloodRepository = bloodRepository;
        this.compatibleBloodRepository = compatibleBloodRepository;
    }

    public Page<User> getAll(int page, String role, String keyword) {
        Pageable pageable = PageRequest.of(page - 1, 10);
        return userRepository.paginated(role, keyword, pageable);
    }

    public List<User> getListNearMe() {
        Integer id = (Integer) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        User user = userRepository.findById(id).orElse(null);
        Blood blood = bloodRepository.findById(user.getNhomMau().getId()).orElse(null);
        List<CompatibleBlood> listCompatibleBlood = compatibleBloodRepository.findAllByNhomMauNhan(blood.getId());
        List<Integer> listId = new ArrayList<>();
        for (CompatibleBlood compatibleBlood : listCompatibleBlood) {
            if (compatibleBlood.getTrangThai() == 1) {
                listId.add(compatibleBlood.getNhomMauHien().getId());
            }
        }

        List<User> listUser = userRepository.findListNearMe(listId, id);
        for (int i = 0; i < listUser.size(); i++) {
            listUser.get(i).setDistance(this.haversine(listUser.get(i).getLatitude(), listUser.get(i).getLongitude(), user.getLatitude(), user.getLongitude()));
        }

        listUser.sort(Comparator.comparingDouble(User::getDistance));
        return listUser;
    }

    public Optional<User> getById(Integer id) {
        return userRepository.findById(id);
    }

    public Optional<User> delete(Integer id) {
        return userRepository.findById(id).map(user -> {
            user.setTrangThai(AppConfig.INACTIVE_STATUS);
            return userRepository.save(user);
        });
    }

    public long getTotalByVaitro(String vaitro) {
        return userRepository.countByVaiTro(vaitro);
    }

    public double haversine(double lat1, double lon1, double lat2, double lon2) {
        final int R = 6371;
        double latDistance = Math.toRadians(lat2 - lat1);
        double lonDistance = Math.toRadians(lon2 - lon1);
        double a = Math.sin(latDistance / 2) * Math.sin(latDistance / 2)
                + Math.cos(Math.toRadians(lat1)) * Math.cos(Math.toRadians(lat2))
                * Math.sin(lonDistance / 2) * Math.sin(lonDistance / 2);
        double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

}
