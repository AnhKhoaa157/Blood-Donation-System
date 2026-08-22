package org.fpt.blooddonate;

import org.flywaydb.core.Flyway;
import org.junit.jupiter.api.Test;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

import static org.assertj.core.api.Assertions.assertThat;

@Testcontainers(disabledWithoutDocker = true)
class SchemaUpgradeIntegrationTest {

    @Container
    static final PostgreSQLContainer<?> POSTGRES = new PostgreSQLContainer<>("postgres:16-alpine");

    @Test
    void upgradesAnExistingV1DatabaseWithoutRecreatingData() {
        DriverManagerDataSource dataSource = new DriverManagerDataSource(
                POSTGRES.getJdbcUrl(), POSTGRES.getUsername(), POSTGRES.getPassword());
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);

        Flyway.configure()
                .dataSource(dataSource)
                .locations("classpath:db/migration")
                .target("1")
                .load()
                .migrate();

        int bloodTypeId = jdbcTemplate.queryForObject(
                "INSERT INTO nhommau (ten, mota) VALUES (?, ?) RETURNING id",
                Integer.class,
                "A+",
                "legacy blood type");
        int donorId = jdbcTemplate.queryForObject(
                "INSERT INTO nguoidung (ten, tendangnhap, matkhau, email, gioitinh, vaitro, nhommauid) "
                        + "VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING id",
                Integer.class,
                "Legacy donor",
                "legacy-donor",
                "legacy-password-hash",
                "legacy-donor@example.test",
                "nam",
                "nguoidung",
                bloodTypeId);
        int donationRequestId = jdbcTemplate.queryForObject(
                "INSERT INTO yeucauhienmau (nguoihienid, ngayhienmaudukien, soluong, loaihien, trangthai) "
                        + "VALUES (?, DATE '2030-01-10', ?, ?, ?) RETURNING id",
                Integer.class,
                donorId,
                450,
                "toanphan",
                "dangcho");

        Flyway.configure()
                .dataSource(dataSource)
                .locations("classpath:db/migration")
                .load()
                .migrate();

        assertThat(jdbcTemplate.queryForObject(
                "SELECT name FROM blood_types WHERE id = ?", String.class, bloodTypeId))
                .isEqualTo("A+");
        assertThat(jdbcTemplate.queryForObject(
                "SELECT password_hash FROM users WHERE id = ?", String.class, donorId))
                .isEqualTo("legacy-password-hash");
        assertThat(jdbcTemplate.queryForObject(
                "SELECT blood_type_id FROM users WHERE id = ?", Integer.class, donorId))
                .isEqualTo(bloodTypeId);
        assertThat(jdbcTemplate.queryForObject(
                "SELECT role FROM users WHERE id = ?", String.class, donorId))
                .isEqualTo("user");
        assertThat(jdbcTemplate.queryForObject(
                "SELECT gender FROM users WHERE id = ?", String.class, donorId))
                .isEqualTo("male");
        assertThat(jdbcTemplate.queryForObject(
                "SELECT status FROM donation_requests WHERE id = ?", String.class, donationRequestId))
                .isEqualTo("pending");
        assertThat(jdbcTemplate.queryForObject(
                "SELECT donation_type FROM donation_requests WHERE id = ?", String.class, donationRequestId))
                .isEqualTo("whole_blood");
        assertThat(jdbcTemplate.queryForObject(
                "SELECT donor_id FROM donation_requests WHERE id = ?", Integer.class, donationRequestId))
                .isEqualTo(donorId);

        assertThat(count(jdbcTemplate, "SELECT COUNT(*) FROM information_schema.tables "
                + "WHERE table_schema = 'public' AND table_name = ?", "nhommau")).isZero();
        assertThat(count(jdbcTemplate, "SELECT COUNT(*) FROM information_schema.tables "
                + "WHERE table_schema = 'public' AND table_name = ?", "nguoidung")).isZero();
        assertThat(count(jdbcTemplate, "SELECT COUNT(*) FROM information_schema.tables "
                + "WHERE table_schema = 'public' AND table_name = ?", "yeucauhienmau")).isZero();
        assertThat(count(jdbcTemplate, "SELECT COUNT(*) FROM flyway_schema_history WHERE success")).isEqualTo(2);
        assertThat(jdbcTemplate.queryForObject(
                "SELECT pg_get_serial_sequence('blood_types', 'id')", String.class))
                .isEqualTo("public.blood_types_id_seq");
    }

    private int count(JdbcTemplate jdbcTemplate, String sql, Object... args) {
        Integer result = jdbcTemplate.queryForObject(sql, Integer.class, args);
        return result == null ? 0 : result;
    }
}
