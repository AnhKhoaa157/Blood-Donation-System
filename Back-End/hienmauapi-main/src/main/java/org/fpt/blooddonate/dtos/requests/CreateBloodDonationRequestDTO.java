package org.fpt.blooddonate.dtos.requests;

import jakarta.validation.constraints.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class CreateBloodDonationRequestDTO {
    private Integer hoatDongHienMau;

    @NotBlank()
    private String ngayHienMauDuKien;

    @NotBlank()
    private String ngayPhucHoiGanNhat;

    private String ghiChu;

    @NotNull
    @Positive
    @Max(2000)
    private int soLuong;

    @NotBlank()
    private String sucKhoeHienTai;

    @NotNull
    @Min(0)
    @Max(1)
    private int dangMangThai;

    @NotNull
    @Min(0)
    @Max(1)
    private int macBenhTruyenNhiem;

    @NotBlank()
    @Pattern(regexp = "toanphan|hongcau|tieucau|huyettuong")
    private String loaiHien;
}
