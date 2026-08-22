package org.fpt.blooddonate.controllers;

import org.fpt.blooddonate.configs.AppConfig;
import org.fpt.blooddonate.dtos.responses.AnalysisResponseDTO;
import org.fpt.blooddonate.repositories.BloodUnitWareHouseRepository;
import org.fpt.blooddonate.repositories.UserRepository;
import org.fpt.blooddonate.services.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboards")
@RequiredArgsConstructor
public class DashBoardController {
    private final BloodReceiveRequestService bloodReceiveRequestService;
    private final BloodDonationRequestService bloodDonationRequestService;
    private final BloodUnitWareHouseService bloodUnitWareHouseService;
    private final BloodService bloodService;
    private final UserService userService;
    private final BloodDonationActivityService bloodDonationActivityService;
    private final BlogService blogService;

    @GetMapping("/analysis")
    public ResponseEntity<?> analysis() {
        long totalBloodReceiveRequest = bloodReceiveRequestService.getTotal();
        long totalBloodDonationRequest = bloodDonationRequestService.getTotal();
        long totalBloodUnitWareHouse = bloodUnitWareHouseService.getTotal();
        long totalBlood = bloodService.getTotal();
        long totalEmployee = userService.getTotalByVaitro(AppConfig.USER_EMPLOYEE_ROLE);
        long totalCustomer = userService.getTotalByVaitro(AppConfig.USER_CUSTOMER_ROLE);
        long totalBloodDonationActivity = bloodDonationActivityService.getTotal();
        long totalBlog = blogService.getTotal();

        AnalysisResponseDTO analysisResponseDTO = new AnalysisResponseDTO();
        analysisResponseDTO.setTotalBloodReceiveRequest(totalBloodReceiveRequest);
        analysisResponseDTO.setTotalBloodDonationRequest(totalBloodDonationRequest);
        analysisResponseDTO.setTotalBloodUnitWareHouse(totalBloodUnitWareHouse);
        analysisResponseDTO.setTotalBlood(totalBlood);
        analysisResponseDTO.setTotalEmployee(totalEmployee);
        analysisResponseDTO.setTotalCustomer(totalCustomer);
        analysisResponseDTO.setTotalBloodDonationActivity(totalBloodDonationActivity);
        analysisResponseDTO.setTotalBlog(totalBlog);
        return ResponseEntity.ok(analysisResponseDTO);
    }
}
