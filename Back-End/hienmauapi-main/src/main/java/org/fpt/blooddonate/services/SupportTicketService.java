package org.fpt.blooddonate.services;

import org.fpt.blooddonate.dtos.requests.CreateSupportTicketRequestDTO;
import org.fpt.blooddonate.dtos.requests.UpdateStatusSupportTicketRequestDTO;
import org.fpt.blooddonate.models.SupportTicket;
import org.fpt.blooddonate.models.SupportTicketHistory;
import org.fpt.blooddonate.models.User;
import org.fpt.blooddonate.models.enums.SupportTicketStatus;
import org.fpt.blooddonate.repositories.SupportTicketHistoryRepository;
import org.fpt.blooddonate.repositories.SupportTicketRepository;
import org.fpt.blooddonate.repositories.UserRepository;
import org.fpt.blooddonate.utils.SendEmail;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.Optional;

@Service
public class SupportTicketService {
    private final SupportTicketRepository repository;
    private final UserRepository userRepository;
    private final SupportTicketHistoryRepository historyRepository;

    public SupportTicketService(
            SupportTicketRepository repository,
            UserRepository userRepository,
            SupportTicketHistoryRepository historyRepository
    ) {
        this.repository = repository;
        this.userRepository = userRepository;
        this.historyRepository = historyRepository;
    }

    public Page<SupportTicket> getAll(int page, String status, String keyword) {
        if (page < 1) {
            throw badRequest("Page must be greater than zero");
        }
        return repository.paginated(parseStatus(status), keyword == null || keyword.isBlank() ? null : keyword.trim(),
                PageRequest.of(page - 1, 10));
    }

    public SupportTicket getById(Integer id) {
        return repository.findById(id)
                .orElseThrow(() -> badRequest("Not existed support ticket"));
    }

    @Transactional
    public SupportTicket create(CreateSupportTicketRequestDTO payload) throws IOException {
        User user = userRepository.findById(currentUserId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Authenticated user not found"));
        SupportTicket ticket = new SupportTicket();
        ticket.setNguoiDung(user);
        ticket.setEmail(payload.getEmail());
        ticket.setTieuDe(payload.getTieude());
        ticket.setNoiDung(payload.getNoidung());
        ticket.setHoTen(payload.getHoten());
        ticket.setSoDienThoai(payload.getSodienthoai());
        SupportTicket inserted = repository.save(ticket);

        SupportTicketHistory history = new SupportTicketHistory();
        history.setSupportTicket(inserted);
        history.setSupporter(user);
        history.setGhiChu("User created new support ticket");
        history.setTrangThai(SupportTicketStatus.NEW);
        historyRepository.save(history);
        return inserted;
    }

    @Transactional
    public Optional<SupportTicket> updateStatus(Integer id, UpdateStatusSupportTicketRequestDTO payload) throws IOException {
        SupportTicketStatus status = parseStatus(payload.getTrangthai());
        return repository.findById(id).map(ticket -> {
            ticket.setTrangThai(status);

            User supporter = userRepository.findById(currentUserId())
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Authenticated user not found"));
            SupportTicketHistory history = new SupportTicketHistory();
            history.setSupporter(supporter);
            history.setSupportTicket(ticket);
            history.setTrangThai(status);
            history.setGhiChu(payload.getGhichu() == null || payload.getGhichu().isBlank()
                    ? "Support ticket status changed" : payload.getGhichu());
            historyRepository.save(history);

            SendEmail.changeSupportTicketStatus(ticket.getEmail(), id, status.getCode());
            return ticket;
        });
    }

    private SupportTicketStatus parseStatus(String raw) {
        if (raw == null || raw.isBlank()) {
            return null;
        }
        try {
            return SupportTicketStatus.fromCode(raw);
        } catch (IllegalArgumentException ex) {
            throw badRequest("Unsupported support ticket status");
        }
    }

    private Integer currentUserId() {
        Object principal = SecurityContextHolder.getContext().getAuthentication() == null
                ? null : SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (principal instanceof Number number) {
            return number.intValue();
        }
        throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Authentication required");
    }

    private ResponseStatusException badRequest(String message) {
        return new ResponseStatusException(HttpStatus.BAD_REQUEST, message);
    }
}
