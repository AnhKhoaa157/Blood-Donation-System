package org.fpt.blooddonate.repositories;

import org.fpt.blooddonate.models.BloodReceiveRequest;
import org.fpt.blooddonate.models.enums.BloodReceiveRequestStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import jakarta.persistence.LockModeType;

import java.util.Optional;

public interface BloodReceiveRequestRepository extends JpaRepository<BloodReceiveRequest, Integer> {
    @Query("""
    SELECT b FROM BloodReceiveRequest b
    WHERE (:keyword IS NULL OR LOWER(b.lyDo) LIKE LOWER(CONCAT('%', :keyword, '%')))
          AND (:status IS NULL OR b.trangThai = :status)
    """)
    Page<BloodReceiveRequest> paginated(
            @Param("status") BloodReceiveRequestStatus status,
            @Param("keyword") String keyword,
            Pageable pageable
    );

    @Query("""
    SELECT b FROM BloodReceiveRequest b
    WHERE (:keyword IS NULL OR LOWER(b.lyDo) LIKE LOWER(CONCAT('%', :keyword, '%')))
          AND (:status IS NULL OR b.trangThai = :status)
              AND (:userId IS NULL OR b.nguoiNhan.id = :userId)
    """)
    Page<BloodReceiveRequest> paginatedByUserId(
            Integer userId,
            @Param("status") BloodReceiveRequestStatus status,
            @Param("keyword") String keyword,
            Pageable pageable
    );

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT b FROM BloodReceiveRequest b WHERE b.id = :id")
    Optional<BloodReceiveRequest> findByIdForUpdate(@Param("id") Integer id);
}
