package org.fpt.blooddonate.repositories;

import org.fpt.blooddonate.models.BloodDonationRequest;
import org.fpt.blooddonate.models.User;
import org.fpt.blooddonate.models.enums.BloodDonationRequestStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import jakarta.persistence.LockModeType;

import java.util.List;
import java.util.Optional;

public interface BloodDonationRequestRepository extends JpaRepository<BloodDonationRequest, Integer> {
    List<BloodDonationRequest> findAllByNguoiHien(User user);

    @Query("""
    SELECT b FROM BloodDonationRequest b
    WHERE (:keyword IS NULL OR LOWER(b.ghiChu) LIKE LOWER(CONCAT('%', :keyword, '%')))
          AND (:status IS NULL OR b.trangThai = :status)
    """)
    Page<BloodDonationRequest> paginated(
            @Param("status") BloodDonationRequestStatus status,
            @Param("keyword") String keyword,
            Pageable pageable
    );

    @Query("""
    SELECT b FROM BloodDonationRequest b
    WHERE (:keyword IS NULL OR LOWER(b.ghiChu) LIKE LOWER(CONCAT('%', :keyword, '%')))
          AND (:status IS NULL OR b.trangThai = :status)
              AND (:userId IS NULL OR b.nguoiHien.id = :userId)
    """)
    Page<BloodDonationRequest> paginatedByUserId(
            Integer userId,
            @Param("status") BloodDonationRequestStatus status,
            @Param("keyword") String keyword,
            Pageable pageable
    );

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT b FROM BloodDonationRequest b WHERE b.id = :id")
    Optional<BloodDonationRequest> findByIdForUpdate(@Param("id") Integer id);
}
