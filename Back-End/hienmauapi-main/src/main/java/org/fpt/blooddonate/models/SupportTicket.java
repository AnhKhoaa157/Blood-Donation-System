package org.fpt.blooddonate.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.fpt.blooddonate.models.enums.SupportTicketStatus;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "support_tickets", indexes = {
        @Index(name = "idx_support_tickets_status_created_at", columnList = "status,created_at"),
        @Index(name = "idx_support_tickets_user_id", columnList = "user_id")
})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class SupportTicket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne()
    @JoinColumn(name = "user_id", nullable = false)
    private User nguoiDung;

    @Column(name = "full_name", nullable = false, length = 255)
    private String hoTen;

    @Column(name = "email", nullable = false, length = 255)
    private String email;

    @Column(name = "phone_number", nullable = false, length = 20)
    private String soDienThoai;

    @Column(name = "subject", nullable = false, length = 255)
    private String tieuDe;

    @JdbcTypeCode(SqlTypes.LONGVARCHAR)
    @Column(name = "content", nullable = false)
    private String noiDung;

    @Convert(converter = SupportTicketStatus.JpaConverter.class)
    @Column(name = "status", nullable = false, length = 20)
    private SupportTicketStatus trangThai = SupportTicketStatus.NEW;

    @Column(name = "created_at", nullable = false)
    private LocalDateTime ngayTao;

    @Column(name = "updated_at", nullable = false)
    private LocalDateTime ngayCapNhat;

    @OneToMany(mappedBy = "supportTicket", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<SupportTicketHistory> histories;

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
