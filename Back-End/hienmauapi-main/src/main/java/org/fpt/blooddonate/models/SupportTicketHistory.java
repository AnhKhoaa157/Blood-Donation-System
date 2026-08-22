package org.fpt.blooddonate.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;
import org.fpt.blooddonate.models.enums.SupportTicketStatus;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDateTime;

@Entity
@Table(name = "support_ticket_history", indexes = {
        @Index(name = "idx_support_ticket_history_support_ticket_id", columnList = "support_ticket_id")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SupportTicketHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "support_ticket_id")
    @JsonBackReference
    private SupportTicket supportTicket;

    @ManyToOne
    @JoinColumn(name = "supporter_id", nullable = false)
    private User supporter;

    @JdbcTypeCode(SqlTypes.LONGVARCHAR)
    @Column(name = "notes", nullable = false)
    private String ghiChu;

    @Convert(converter = SupportTicketStatus.JpaConverter.class)
    @Column(name = "status", nullable = false, length = 20)
    private SupportTicketStatus trangThai = SupportTicketStatus.NEW;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime ngayTao;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime ngayCapNhat;

    @PrePersist
    protected void onCreate() {
        this.ngayTao = LocalDateTime.now();
        this.ngayCapNhat = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.ngayCapNhat = LocalDateTime.now();
    }
}
