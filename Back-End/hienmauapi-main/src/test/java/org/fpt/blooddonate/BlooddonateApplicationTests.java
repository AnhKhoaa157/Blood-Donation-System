package org.fpt.blooddonate;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.DynamicPropertyRegistry;
import org.springframework.test.context.DynamicPropertySource;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@Testcontainers(disabledWithoutDocker = true)
class BlooddonateApplicationTests {

    private static final Map<String, List<String>> EXPECTED_COLUMNS = Map.ofEntries(
            Map.entry("blood_types", List.of("id", "name", "description", "status", "created_at", "updated_at")),
            Map.entry("users", List.of("id", "name", "username", "password_hash", "email", "phone_number",
                    "birth_date", "gender", "address", "latitude", "longitude", "blood_type_id", "rh_factor",
                    "medical_history", "weight_kg", "height_cm", "role", "status", "created_at", "updated_at")),
            Map.entry("employees", List.of("id", "employee_number", "job_title", "department", "start_date",
                    "employment_status", "user_id", "created_at", "updated_at")),
            Map.entry("donation_events", List.of("id", "name", "start_date", "end_date", "location", "description",
                    "max_participants", "current_participants", "created_by_id", "status", "created_at", "updated_at", "version")),
            Map.entry("donation_requests", List.of("id", "donor_id", "donation_event_id", "scheduled_donation_date",
                    "last_recovery_date", "notes", "approved_by_id", "approved_at", "amount_ml", "donation_type",
                    "status", "current_health", "screening_form", "pregnancy_flag", "infectious_disease_flag",
                    "created_at", "updated_at", "version")),
            Map.entry("blood_requests", List.of("id", "recipient_id", "scheduled_receive_date", "blood_type_id",
                    "required_blood_component", "quantity_units", "reason", "urgent", "receiving_address", "notes",
                    "approved_by_id", "approved_at", "status", "current_health", "pregnancy_flag", "screening_form",
                    "infectious_disease_flag", "created_at", "updated_at", "version")),
            Map.entry("blood_units", List.of("id", "blood_type_id", "blood_component", "quantity", "collected_at",
                    "expires_at", "donor_id", "test_result", "storage_location", "notes", "status", "blood_request_id",
                    "created_at", "updated_at", "version")),
            Map.entry("blood_compatibilities", List.of("id", "donor_blood_type_id", "recipient_blood_type_id", "status",
                    "created_at", "updated_at")),
            Map.entry("blog_categories", List.of("id", "title", "content", "status", "created_at", "updated_at")),
            Map.entry("blog_posts", List.of("id", "title", "image_path", "category_id", "content", "view_count",
                    "created_by_id", "status", "created_at", "updated_at")),
            Map.entry("notifications", List.of("id", "title", "image_path", "created_by_id", "content", "start_date",
                    "end_date", "status", "created_at", "updated_at")),
            Map.entry("support_tickets", List.of("id", "user_id", "full_name", "email", "phone_number", "subject",
                    "content", "status", "created_at", "updated_at")),
            Map.entry("support_ticket_history", List.of("id", "support_ticket_id", "supporter_id", "notes", "status",
                    "created_at", "updated_at"))
    );

    private static final List<String> LEGACY_TABLES = List.of(
            "nhommau", "nguoidung", "thongtinnhanvien", "hoatdonghienmau", "yeucauhienmau", "yeucaucanmau",
            "khodonvimau", "nhommautuongthich", "danhmucbaiviet", "baiviet", "thongbao", "yeucaulienhehotro",
            "lichsulienhehotro"
    );

    private static final List<String> LEGACY_COLUMNS = List.of(
            "ten", "mota", "trangthai", "ngaytao", "ngaycapnhat", "tendangnhap", "matkhau", "sodienthoai",
            "ngaysinh", "gioitinh", "diachi", "nhommauid", "yeutorh", "tiensubenh", "cannang", "chieucao",
            "vaitro", "masonhanvien", "chucvu", "phongban", "ngayvaolam", "trangthailamviec", "nguoidungid",
            "ngaybatdau", "ngayketthuc", "diadiem", "soluongnguoitoida", "soluongnguoidangkyhientai",
            "nguoitaoid", "trangthaihoatdong", "nguoihienid", "hoatdonghienmauid", "ngayhienmaudukien",
            "ngayphuchoigannhat", "ghichu", "nguoiduyetid", "ngayduyet", "soluong", "loaihien", "suckhoehientai",
            "formkham", "dangmangthai", "macbenhtruyennhiem", "nguoinhanid", "ngaynhanmaudukien", "thanhphanmaucan",
            "soluongdonvi", "lydo", "khancap", "diachinhanmau", "thanhphan", "ngaylaymau", "ngayhethan",
            "ketquaxetnghiem", "vitriluutru", "yeucaucanmauid", "nhommauhienid", "nhommaunhanid", "tieude", "noidung",
            "anh", "danhmucid", "luotxem", "nguoitao", "hoten", "hotroid", "nguoihotroid"
    );

    private static final List<String> EXPECTED_SEQUENCES = EXPECTED_COLUMNS.keySet().stream()
            .map(table -> table + "_id_seq")
            .toList();

    private static final List<String> EXPECTED_CONSTRAINTS = List.of(
            "pk_blood_types", "pk_users", "pk_employees", "pk_donation_events", "pk_donation_requests",
            "pk_blood_requests", "pk_blood_units", "pk_blood_compatibilities", "pk_blog_categories",
            "pk_blog_posts", "pk_notifications", "pk_support_tickets", "pk_support_ticket_history",
            "uq_blood_types_name", "uq_users_username", "uq_users_email", "uq_employees_employee_number",
            "uq_employees_user_id", "uq_blood_compatibilities_donor_recipient_types",
            "ck_donation_events_max_participants_positive", "ck_donation_events_current_participants_nonnegative",
            "ck_donation_events_end_date_after_start", "ck_donation_events_current_participants_within_capacity",
            "ck_donation_requests_recovery_before_scheduled", "ck_donation_requests_amount_ml_range",
            "ck_donation_requests_pregnancy_flag", "ck_donation_requests_infectious_disease_flag",
            "ck_donation_requests_donation_type",
            "ck_blood_requests_quantity_units_range", "ck_blood_requests_pregnancy_flag",
            "ck_blood_requests_infectious_disease_flag", "ck_blood_units_quantity_positive",
            "ck_blood_units_expires_after_collected", "ck_blood_compatibilities_distinct_types",
            "ck_blog_posts_view_count_nonnegative", "ck_notifications_end_date_after_start",
            "ck_employees_employment_status", "ck_blood_types_status", "ck_users_status",
            "ck_donation_events_status", "ck_donation_requests_status", "ck_blood_requests_status",
            "ck_blood_units_status", "ck_blood_compatibilities_status", "ck_blog_categories_status",
            "ck_blog_posts_status", "ck_notifications_status", "ck_support_tickets_status",
            "ck_support_ticket_history_status", "ck_users_role", "ck_users_gender",
            "fk_users_blood_type", "fk_employees_user",
            "fk_donation_events_created_by", "fk_donation_requests_donor", "fk_donation_requests_event",
            "fk_donation_requests_approved_by", "fk_blood_requests_recipient", "fk_blood_requests_blood_type",
            "fk_blood_requests_approved_by", "fk_blood_units_blood_type", "fk_blood_units_donor",
            "fk_blood_units_blood_request", "fk_blood_compatibilities_donor_type",
            "fk_blood_compatibilities_recipient_type", "fk_blog_posts_category", "fk_notifications_created_by",
            "fk_support_tickets_user", "fk_support_ticket_history_ticket", "fk_support_ticket_history_supporter"
    );

    private static final List<String> LEGACY_CONSTRAINTS = List.of(
            "nhommau_pkey", "nguoidung_pkey", "thongtinnhanvien_pkey", "hoatdonghienmau_pkey",
            "yeucauhienmau_pkey", "yeucaucanmau_pkey", "khodonvimau_pkey", "nhommautuongthich_pkey",
            "danhmucbaiviet_pkey", "baiviet_pkey", "thongbao_pkey", "yeucaulienhehotro_pkey",
            "lichsulienhehotro_pkey", "nhommau_ten_key", "nguoidung_tendangnhap_key", "nguoidung_email_key",
            "thongtinnhanvien_masonhanvien_key", "thongtinnhanvien_nguoidungid_key", "uq_compatible_blood_pair",
            "ck_activity_dates", "ck_activity_capacity", "ck_activity_status", "ck_donation_recovery_date",
            "ck_blood_unit_expiry", "ck_compatible_blood_distinct", "ck_notification_dates",
            "nhommau_trangthai_check", "nguoidung_trangthai_check", "yeucauhienmau_trangthai_check",
            "yeucaucanmau_trangthai_check", "khodonvimau_trangthai_check", "nhommautuongthich_trangthai_check",
            "danhmucbaiviet_trangthai_check", "baiviet_trangthai_check", "thongbao_trangthai_check",
            "yeucaulienhehotro_trangthai_check", "lichsulienhehotro_trangthai_check",
            "hoatdonghienmau_soluongnguoitoida_check", "hoatdonghienmau_soluongnguoidangkyhientai_check",
            "yeucauhienmau_soluong_check", "yeucauhienmau_dangmangthai_check",
            "yeucauhienmau_macbenhtruyennhiem_check", "yeucaucanmau_soluongdonvi_check",
            "yeucaucanmau_dangmangthai_check", "yeucaucanmau_macbenhtruyennhiem_check",
            "khodonvimau_soluong_check", "baiviet_luotxem_check", "nhommautuongthich_nhommauhienid_fkey",
            "nhommautuongthich_nhommaunhanid_fkey", "nguoidung_nhommauid_fkey",
            "thongtinnhanvien_nguoidungid_fkey", "hoatdonghienmau_nguoitaoid_fkey",
            "yeucauhienmau_nguoihienid_fkey", "yeucauhienmau_hoatdonghienmauid_fkey",
            "yeucauhienmau_nguoiduyetid_fkey", "yeucaucanmau_nguoinhanid_fkey", "yeucaucanmau_nhommauid_fkey",
            "yeucaucanmau_nguoiduyetid_fkey", "khodonvimau_nhommauid_fkey", "khodonvimau_nguoihienid_fkey",
            "khodonvimau_yeucaucanmauid_fkey", "baiviet_danhmucid_fkey", "thongbao_nguoitaoid_fkey",
            "yeucaulienhehotro_nguoidungid_fkey", "lichsulienhehotro_hotroid_fkey",
            "lichsulienhehotro_nguoihotroid_fkey"
    );

    private static final List<String> LEGACY_INDEXES = List.of(
            "nhommau_pkey", "nguoidung_pkey", "thongtinnhanvien_pkey", "hoatdonghienmau_pkey",
            "yeucauhienmau_pkey", "yeucaucanmau_pkey", "khodonvimau_pkey", "nhommautuongthich_pkey",
            "danhmucbaiviet_pkey", "baiviet_pkey", "thongbao_pkey", "yeucaulienhehotro_pkey",
            "lichsulienhehotro_pkey", "nhommau_ten_key", "nguoidung_tendangnhap_key", "nguoidung_email_key",
            "thongtinnhanvien_masonhanvien_key", "thongtinnhanvien_nguoidungid_key", "uq_compatible_blood_pair",
            "idx_user_blood", "idx_user_role_status", "idx_employee_user", "idx_activity_status_dates",
            "idx_activity_creator", "idx_donation_request_status_date", "idx_donation_request_donor",
            "idx_donation_request_activity", "idx_receive_request_status_date", "idx_receive_request_recipient",
            "idx_receive_request_blood", "idx_blood_unit_status_expiry", "idx_blood_unit_blood",
            "idx_blood_unit_receive_request", "idx_compatible_blood_target", "idx_blog_category_status",
            "idx_notification_active_dates", "idx_support_ticket_status_date", "idx_support_ticket_user",
            "idx_support_history_ticket"
    );

    private static final List<String> LEGACY_SEQUENCES = LEGACY_TABLES.stream()
            .map(table -> table + "_id_seq")
            .toList();

    @Container
    static final PostgreSQLContainer<?> POSTGRES = new PostgreSQLContainer<>("postgres:16-alpine");

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @DynamicPropertySource
    static void databaseProperties(DynamicPropertyRegistry registry) {
        registry.add("DB_URL", POSTGRES::getJdbcUrl);
        registry.add("DB_USERNAME", POSTGRES::getUsername);
        registry.add("DB_PASSWORD", POSTGRES::getPassword);
        registry.add("JWT_SECRET", () -> "test-secret-that-is-at-least-32-characters-long");
        registry.add("CORS_ALLOWED_ORIGINS", () -> "http://localhost:5173");
        registry.add("JPA_DDL_AUTO", () -> "validate");
    }

    @Test
    void contextLoads() {
    }

    @Test
    void finalSchemaUsesEnglishTablesColumnsAndDatabaseObjects() {
        EXPECTED_COLUMNS.forEach((table, columns) -> {
            assertThat(count("SELECT COUNT(*) FROM information_schema.tables "
                    + "WHERE table_schema = 'public' AND table_name = ?", table))
                    .as("table %s", table)
                    .isEqualTo(1);

            assertThat(count("SELECT COUNT(*) FROM information_schema.columns "
                    + "WHERE table_schema = 'public' AND table_name = ?", table))
                    .as("column count for %s", table)
                    .isEqualTo(columns.size());

            columns.forEach(column -> assertThat(count("SELECT COUNT(*) FROM information_schema.columns "
                            + "WHERE table_schema = 'public' AND table_name = ? AND column_name = ?", table, column))
                    .as("column %s.%s", table, column)
                    .isEqualTo(1));
        });

        LEGACY_TABLES.forEach(table -> assertThat(count("SELECT COUNT(*) FROM information_schema.tables "
                        + "WHERE table_schema = 'public' AND table_name = ?", table))
                .as("legacy table %s must not remain", table)
                .isZero());

        LEGACY_COLUMNS.forEach(column -> assertThat(count("SELECT COUNT(*) FROM information_schema.columns "
                        + "WHERE table_schema = 'public' AND column_name = ?", column))
                .as("legacy column %s must not remain", column)
                .isZero());

        LEGACY_SEQUENCES.forEach(sequence -> assertThat(count("SELECT COUNT(*) FROM pg_class c "
                        + "JOIN pg_namespace n ON n.oid = c.relnamespace "
                        + "WHERE n.nspname = 'public' AND c.relkind = 'S' AND c.relname = ?", sequence))
                .as("legacy sequence %s must not remain", sequence)
                .isZero());

        EXPECTED_SEQUENCES.forEach(sequence -> assertThat(count("SELECT COUNT(*) FROM pg_class c "
                        + "JOIN pg_namespace n ON n.oid = c.relnamespace "
                        + "WHERE n.nspname = 'public' AND c.relkind = 'S' AND c.relname = ?", sequence))
                .as("sequence %s", sequence)
                .isEqualTo(1));

        List<String> expectedIndexes = List.of(
                "pk_blood_types", "pk_users", "pk_employees", "pk_donation_events", "pk_donation_requests",
                "pk_blood_requests", "pk_blood_units", "pk_blood_compatibilities", "pk_blog_categories",
                "pk_blog_posts", "pk_notifications", "pk_support_tickets", "pk_support_ticket_history",
                "uq_blood_types_name", "uq_users_username", "uq_users_email", "uq_employees_employee_number",
                "uq_employees_user_id", "uq_blood_compatibilities_donor_recipient_types",
                "idx_users_blood_type_id", "idx_users_role_status", "idx_employees_user_id",
                "idx_donation_events_status_start_end", "idx_donation_events_created_by_id",
                "idx_donation_requests_status_scheduled_date", "idx_donation_requests_donor_id",
                "idx_donation_requests_donation_event_id", "idx_blood_requests_status_scheduled_date",
                "idx_blood_requests_recipient_id", "idx_blood_requests_blood_type_id", "idx_blood_units_status_expires_at",
                "idx_blood_units_blood_type_id", "idx_blood_units_blood_request_id",
                "idx_blood_compatibilities_recipient_blood_type_id", "idx_blog_posts_category_status",
                "idx_notifications_status_start_end", "idx_support_tickets_status_created_at", "idx_support_tickets_user_id",
                "idx_support_ticket_history_support_ticket_id"
        );
        expectedIndexes.forEach(index -> assertThat(count("SELECT COUNT(*) FROM pg_class c "
                        + "JOIN pg_namespace n ON n.oid = c.relnamespace "
                        + "WHERE n.nspname = 'public' AND c.relkind = 'i' AND c.relname = ?", index))
                .as("index %s", index)
                .isEqualTo(1));

        LEGACY_INDEXES.forEach(index -> assertThat(count("SELECT COUNT(*) FROM pg_class c "
                        + "JOIN pg_namespace n ON n.oid = c.relnamespace "
                        + "WHERE n.nspname = 'public' AND c.relkind = 'i' AND c.relname = ?", index))
                .as("legacy index %s must not remain", index)
                .isZero());

        EXPECTED_CONSTRAINTS.forEach(constraint -> assertThat(count("SELECT COUNT(*) FROM pg_constraint c "
                        + "JOIN pg_namespace n ON n.oid = c.connamespace "
                        + "WHERE n.nspname = 'public' AND c.conname = ?", constraint))
                .as("constraint %s", constraint)
                .isEqualTo(1));

        LEGACY_CONSTRAINTS.forEach(constraint -> assertThat(count("SELECT COUNT(*) FROM pg_constraint c "
                        + "JOIN pg_namespace n ON n.oid = c.connamespace "
                        + "WHERE n.nspname = 'public' AND c.conname = ?", constraint))
                .as("legacy constraint %s must not remain", constraint)
                .isZero());

        assertThat(count("SELECT COUNT(*) FROM pg_constraint c "
                + "JOIN pg_namespace n ON n.oid = c.connamespace "
                + "WHERE n.nspname = 'public' AND c.conname = ? "
                + "AND lower(pg_get_constraintdef(c.oid)) LIKE '%last_recovery_date < scheduled_donation_date%'",
                "ck_donation_requests_recovery_before_scheduled"))
                .as("recovery-date business rule")
                .isEqualTo(1);
        assertThat(count("SELECT COUNT(*) FROM pg_constraint c "
                + "JOIN pg_namespace n ON n.oid = c.connamespace "
                + "WHERE n.nspname = 'public' AND c.conname = ?", "ck_donation_recovery_date"))
                .as("legacy recovery constraint name")
                .isZero();
    }

    private int count(String sql, Object... args) {
        Integer result = jdbcTemplate.queryForObject(sql, Integer.class, args);
        return result == null ? 0 : result;
    }
}
