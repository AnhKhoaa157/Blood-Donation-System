package org.fpt.blooddonate.dtos.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class ChangeStatusBloodReceiveRequestToAvailable {

    @NotNull
    @NotEmpty
    private List<Integer> danhSachKhoDonViMau;
}
