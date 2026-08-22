package org.fpt.blooddonate.repositories;

import org.fpt.blooddonate.models.BloodDonationRequest;
import org.fpt.blooddonate.models.BloodReceiveRequest;
import org.fpt.blooddonate.models.BloodUnitWareHouse;
import org.fpt.blooddonate.models.User;
import org.fpt.blooddonate.models.enums.BloodUnitStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import jakarta.persistence.LockModeType;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface BloodUnitWareHouseRepository extends JpaRepository<BloodUnitWareHouse, Integer> {
    List<BloodUnitWareHouse> findAllByYeuCauCanMau(BloodReceiveRequest request);

    @Query("""
    SELECT b FROM BloodUnitWareHouse b
    WHERE (:keyword IS NULL OR LOWER(b.viTriLuuTru) LIKE LOWER(CONCAT('%', :keyword, '%')))
          AND (:status IS NULL OR b.trangThai = :status)
    """)
    Page<BloodUnitWareHouse> paginated(
            @Param("status") BloodUnitStatus status,
            @Param("keyword") String keyword,
            Pageable pageable
    );

    @Query("""
        SELECT b 
        FROM BloodUnitWareHouse b 
        WHERE b.nhomMau.id IN :listBloodId 
          AND b.trangThai = :readyStatus
          AND b.yeuCauCanMau IS NULL
          AND b.ngayHetHan > :now
    """)
    List<BloodUnitWareHouse> findListAvailableForReceive(
            @Param("listBloodId") List<Integer> listBloodId,
            @Param("now") LocalDateTime now,
            @Param("readyStatus") BloodUnitStatus readyStatus
    );

    @Lock(LockModeType.PESSIMISTIC_WRITE)
    @Query("SELECT b FROM BloodUnitWareHouse b WHERE b.id = :id")
    Optional<BloodUnitWareHouse> findByIdForUpdate(@Param("id") Integer id);
}
