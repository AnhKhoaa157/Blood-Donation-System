package org.fpt.blooddonate.dtos.requests;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class UpdateBloodDonationRequestDTO {
    @NotBlank()
    private String ngayHienMauDuKien;

    @NotBlank()
    private String ngayPhucHoiGanNhat;

    private String ghiChu;

    @NotNull()
    @Positive
    @Max(2000)
    private int soLuong;

    @NotBlank()
    @Pattern(regexp = "toanphan|hongcau|tieucau|huyettuong")
    private String loaiHien;

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
}
