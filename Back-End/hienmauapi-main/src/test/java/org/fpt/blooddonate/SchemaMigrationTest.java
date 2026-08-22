package org.fpt.blooddonate;

import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class SchemaMigrationTest {

    @Test
    void englishV2MigrationRenamesEveryEntityTableAndStatusValue() throws IOException {
        String sql = readMigration("/db/migration/V2__rename_schema_identifiers_to_english.sql");

        List<String> tableRenames = List.of(
                "alter table nhommau rename to blood_types",
                "alter table nguoidung rename to users",
                "alter table thongtinnhanvien rename to employees",
                "alter table hoatdonghienmau rename to donation_events",
                "alter table yeucauhienmau rename to donation_requests",
                "alter table yeucaucanmau rename to blood_requests",
                "alter table khodonvimau rename to blood_units",
                "alter table nhommautuongthich rename to blood_compatibilities",
                "alter table danhmucbaiviet rename to blog_categories",
                "alter table baiviet rename to blog_posts",
                "alter table thongbao rename to notifications",
                "alter table yeucaulienhehotro rename to support_tickets",
                "alter table lichsulienhehotro rename to support_ticket_history"
        );
        assertThat(tableRenames).allSatisfy(rename -> assertThat(sql).contains(rename));
        assertThat(sql.lines().filter(line -> line.startsWith("alter table ") && line.contains(" rename column ")).count())
                .as("all V1 non-identity columns are explicitly renamed")
                .isEqualTo(129);

        assertThat(sql).contains("rename column tendangnhap to username");
        assertThat(sql).contains("rename column ngayhienmaudukien to scheduled_donation_date");
        assertThat(sql).contains("rename column soluongnguoitoida to max_participants");
        assertThat(sql).doesNotContain("soluongnguoitoima");
        assertThat(sql).contains("rename column nhommauid to blood_type_id");
        assertThat(sql).contains("rename column nguoidungid to user_id");
        assertThat(sql).contains("rename column ngaytao to created_at");
        assertThat(sql).contains("rename column ngaycapnhat to updated_at");
        assertThat(sql).contains("rename column trangthaihoatdong to status");
        assertThat(sql).contains("rename column nguoihienid to donor_id");
        assertThat(sql).contains("rename column nguoinhanid to recipient_id");
        assertThat(sql).contains("rename column thanhphanmaucan to required_blood_component");
        assertThat(sql).contains("rename column yeucaucanmauid to blood_request_id");
        assertThat(sql).contains("rename column nhommauhienid to donor_blood_type_id");
        assertThat(sql).contains("rename column nhommaunhanid to recipient_blood_type_id");
        assertThat(sql).contains("rename column danhmucid to category_id");
        assertThat(sql).contains("rename column nguoitaoid to created_by_id");
        assertThat(sql).contains("rename column hotroid to support_ticket_id");
        assertThat(sql).contains("rename column nguoihotroid to supporter_id");
        assertThat(sql).contains("rename column ngayphuchoigannhat to last_recovery_date");
        assertThat(sql).contains("rename column dangmangthai to pregnancy_flag");
        assertThat(sql).contains("rename column macbenhtruyennhiem to infectious_disease_flag");
        assertThat(sql).contains("rename column ngayduyet to approved_at");
        assertThat(sql).contains("rename column ngaybatdau to start_date");
        assertThat(sql).contains("rename column ngayketthuc to end_date");
        assertThat(sql).contains("rename column ngayhethan to expires_at");
        assertThat(sql).contains("rename column ngaylaymau to collected_at");
        assertThat(sql).contains("rename column luotxem to view_count");
        assertThat(sql).contains("rename column sodienthoai to phone_number");
        assertThat(sql).contains("rename column matkhau to password_hash");
        assertThat(sql).contains("rename column tiensubenh to medical_history");
        assertThat(sql).contains("rename column chieucao to height_cm");
        assertThat(sql).contains("rename column cannang to weight_kg");
        assertThat(sql).contains("rename column trangthailamviec to employment_status");
        assertThat(sql).contains("rename column ngaynhanmaudukien to scheduled_receive_date");
        assertThat(sql).contains("rename column soluongdonvi to quantity_units");
        assertThat(sql).contains("rename column diachinhanmau to receiving_address");
        assertThat(sql).contains("rename column ketquaxetnghiem to test_result");
        assertThat(sql).contains("rename column vitriluutru to storage_location");
        assertThat(sql).contains("rename column nguoitao to created_by_id");
        assertThat(sql).contains("rename column anh to image_path");
        assertThat(sql).contains("rename column hoten to full_name");
        assertThat(sql).contains("rename column formkham to screening_form");
        assertThat(sql).contains("rename column suckhoehientai to current_health");
        assertThat(sql).contains("rename column loaihien to donation_type");
        assertThat(sql).contains("rename column soluong to amount_ml");
        assertThat(sql).contains("rename column thanhphan to blood_component");
        assertThat(sql).contains("rename column ngayvaolam to start_date");
        assertThat(sql).contains("rename column masonhanvien to employee_number");
        assertThat(sql).contains("rename column phongban to department");
        assertThat(sql).contains("rename column chucvu to job_title");
        assertThat(sql).contains("'coming_soon'");
        assertThat(sql).contains("'blood_allocated'");
        assertThat(sql).contains("'waiting_for_testing'");
        assertThat(sql).contains("'in_progress'");
        assertThat(sql).contains("when 'nguoidung' then 'user'");
        assertThat(sql).contains("when 'nhanvien' then 'employee'");
        assertThat(sql).contains("when 'nam' then 'male'");
        assertThat(sql).contains("when 'toanphan' then 'whole_blood'");
        assertThat(sql).contains("rename constraint ck_donation_recovery_date");
        assertThat(sql).contains("to ck_donation_requests_recovery_before_scheduled");
        assertThat(sql).doesNotContain("last_recovery_date > scheduled_donation_date");

        assertThat(sql).contains("rename to blood_types");
        assertThat(sql).contains("rename to users");
        assertThat(sql).contains("rename to employees");
        assertThat(sql).contains("rename to donation_events");
        assertThat(sql).contains("rename to donation_requests");
        assertThat(sql).contains("rename to blood_requests");
        assertThat(sql).contains("rename to blood_units");
        assertThat(sql).contains("rename to blood_compatibilities");
        assertThat(sql).contains("rename to blog_categories");
        assertThat(sql).contains("rename to blog_posts");
        assertThat(sql).contains("rename to notifications");
        assertThat(sql).contains("rename to support_tickets");
        assertThat(sql).contains("rename to support_ticket_history");

        List<String> legacyDdlPrefixes = List.of(
                "create table nhommau", "create table nguoidung", "create table thongtinnhanvien",
                "create table hoatdonghienmau", "create table yeucauhienmau", "create table yeucaucanmau",
                "create table khodonvimau", "create table nhommautuongthich", "create table danhmucbaiviet",
                "create table baiviet", "create table thongbao", "create table yeucaulienhehotro",
                "create table lichsulienhehotro", "create index idx_user_blood"
        );
        assertThat(legacyDdlPrefixes).allSatisfy(prefix -> assertThat(sql).doesNotContain(prefix));
        assertThat(sql).doesNotContain("drop table", "create table", "delete from", "truncate");
        assertThat(sql).doesNotContain("enum(");
        assertThat(sql).doesNotContain("mysql");
    }

    private String readMigration(String path) throws IOException {
        try (InputStream input = getClass().getResourceAsStream(path)) {
            assertThat(input).as("Flyway migration resource: " + path).isNotNull();
            return new String(input.readAllBytes(), StandardCharsets.UTF_8).toLowerCase();
        }
    }
}
