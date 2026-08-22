package org.fpt.blooddonate.repositories;

import org.fpt.blooddonate.models.SupportTicket;
import org.fpt.blooddonate.models.enums.SupportTicketStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;

@Repository
public interface SupportTicketRepository extends JpaRepository<SupportTicket, Integer> {
    @Query("""
    SELECT b FROM SupportTicket b
      WHERE (:keyword IS NULL OR LOWER(b.email) LIKE LOWER(CONCAT('%', :keyword, '%')) OR LOWER(b.hoTen) LIKE LOWER(CONCAT('%', :keyword, '%')) OR LOWER(b.noiDung) LIKE LOWER(CONCAT('%', :keyword, '%')) OR LOWER(b.soDienThoai) LIKE LOWER(CONCAT('%', :keyword, '%')) OR LOWER(b.tieuDe) LIKE LOWER(CONCAT('%', :keyword, '%')))
          AND (:status IS NULL OR b.trangThai = :status)
    """)
    Page<SupportTicket> paginated(
            @Param("status") SupportTicketStatus status,
            @Param("keyword") String keyword,
            Pageable pageable
    );

}
