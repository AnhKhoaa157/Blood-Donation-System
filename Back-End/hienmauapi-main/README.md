# Blood Donation API

Spring Boot 4.1 backend using Java 26, JPA/Hibernate, PostgreSQL, Flyway, and
JWT authentication.

## Local setup

1. Install Java 26 and ensure `java -version` reports Java 26.
2. Create a PostgreSQL database, for example `blooddonate`.
3. Copy the environment template and fill in local values:

   ```powershell
   Copy-Item .env.example .env
   ```

   `.env` is ignored by Git. `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD` are the
   only database connection inputs used by the application. Generate a unique
   `JWT_SECRET` with at least 32 characters. Leave SMTP credentials empty when
   email is not configured; status emails are skipped safely in that case.

4. Start the API:

   ```powershell
   .\mvnw.cmd spring-boot:run
   ```

## PostgreSQL schema lifecycle

Flyway owns the PostgreSQL schema. `V1__initial_postgresql_schema.sql` is the
immutable baseline and must not be edited after it has been applied. `V2__rename_schema_identifiers_to_english.sql`
renames that existing schema in place, preserving rows, foreign keys, indexes,
constraints, identity sequences, transactions, and locking behavior. It does
not delete or recreate tables.

- A fresh database runs V1 and then V2.
- A database already at V1 runs only V2 on its next migration.
- The final application schema has English `snake_case` table, column, foreign-key,
  index, check-constraint, and sequence names.
- JPA keeps the existing Java properties and REST JSON names through explicit
  `@Table`, `@Column`, `@JoinColumn`, and enum converter mappings. The API keeps
  legacy status codes while PostgreSQL stores English status values.
- Hibernate uses `validate` by default and never alters the schema.

V2 renames the recovery-date check to the English
`ck_donation_requests_recovery_before_scheduled` constraint while preserving
the existing business rule: `last_recovery_date < scheduled_donation_date`.
The migration does not silently modify those dates.

For explicit Flyway operations, pass connection values as ephemeral Maven
properties and do not commit them:

```powershell
.\mvnw.cmd "-Dflyway.url=$env:DB_URL" "-Dflyway.user=$env:DB_USERNAME" "-Dflyway.password=$env:DB_PASSWORD" flyway:info
.\mvnw.cmd "-Dflyway.url=$env:DB_URL" "-Dflyway.user=$env:DB_USERNAME" "-Dflyway.password=$env:DB_PASSWORD" flyway:validate
.\mvnw.cmd "-Dflyway.url=$env:DB_URL" "-Dflyway.user=$env:DB_USERNAME" "-Dflyway.password=$env:DB_PASSWORD" flyway:migrate
```

The application loads `.env` automatically; standalone Maven commands expect
the three values to be exported in the current shell first.

## Final table and column mapping

The following is the complete V1-to-final physical mapping. `id` and `version`
are shown where present even when their names are unchanged.

| V1 table | Final table | Column mapping |
| --- | --- | --- |
| `nhommau` | `blood_types` | `id -> id`, `ten -> name`, `mota -> description`, `trangthai -> status`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at` |
| `nguoidung` | `users` | `id -> id`, `ten -> name`, `tendangnhap -> username`, `matkhau -> password_hash`, `email -> email`, `sodienthoai -> phone_number`, `ngaysinh -> birth_date`, `gioitinh -> gender`, `diachi -> address`, `latitude -> latitude`, `longitude -> longitude`, `nhommauid -> blood_type_id`, `yeutorh -> rh_factor`, `tiensubenh -> medical_history`, `cannang -> weight_kg`, `chieucao -> height_cm`, `vaitro -> role`, `trangthai -> status`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at` |
| `thongtinnhanvien` | `employees` | `id -> id`, `masonhanvien -> employee_number`, `chucvu -> job_title`, `phongban -> department`, `ngayvaolam -> start_date`, `trangthailamviec -> employment_status`, `nguoidungid -> user_id`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at` |
| `hoatdonghienmau` | `donation_events` | `id -> id`, `ten -> name`, `ngaybatdau -> start_date`, `ngayketthuc -> end_date`, `diadiem -> location`, `mota -> description`, `soluongnguoitoida -> max_participants`, `soluongnguoidangkyhientai -> current_participants`, `nguoitaoid -> created_by_id`, `trangthaihoatdong -> status`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at`, `version -> version` |
| `yeucauhienmau` | `donation_requests` | `id -> id`, `nguoihienid -> donor_id`, `hoatdonghienmauid -> donation_event_id`, `ngayhienmaudukien -> scheduled_donation_date`, `ngayphuchoigannhat -> last_recovery_date`, `ghichu -> notes`, `nguoiduyetid -> approved_by_id`, `ngayduyet -> approved_at`, `soluong -> amount_ml`, `loaihien -> donation_type`, `trangthai -> status`, `suckhoehientai -> current_health`, `formkham -> screening_form`, `dangmangthai -> pregnancy_flag`, `macbenhtruyennhiem -> infectious_disease_flag`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at`, `version -> version` |
| `yeucaucanmau` | `blood_requests` | `id -> id`, `nguoinhanid -> recipient_id`, `ngaynhanmaudukien -> scheduled_receive_date`, `nhommauid -> blood_type_id`, `thanhphanmaucan -> required_blood_component`, `soluongdonvi -> quantity_units`, `lydo -> reason`, `khancap -> urgent`, `diachinhanmau -> receiving_address`, `ghichu -> notes`, `nguoiduyetid -> approved_by_id`, `ngayduyet -> approved_at`, `trangthai -> status`, `suckhoehientai -> current_health`, `dangmangthai -> pregnancy_flag`, `formkham -> screening_form`, `macbenhtruyennhiem -> infectious_disease_flag`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at`, `version -> version` |
| `khodonvimau` | `blood_units` | `id -> id`, `nhommauid -> blood_type_id`, `thanhphan -> blood_component`, `soluong -> quantity`, `ngaylaymau -> collected_at`, `ngayhethan -> expires_at`, `nguoihienid -> donor_id`, `ketquaxetnghiem -> test_result`, `vitriluutru -> storage_location`, `ghichu -> notes`, `trangthai -> status`, `yeucaucanmauid -> blood_request_id`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at`, `version -> version` |
| `nhommautuongthich` | `blood_compatibilities` | `id -> id`, `nhommauhienid -> donor_blood_type_id`, `nhommaunhanid -> recipient_blood_type_id`, `trangthai -> status`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at` |
| `danhmucbaiviet` | `blog_categories` | `id -> id`, `tieude -> title`, `noidung -> content`, `trangthai -> status`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at` |
| `baiviet` | `blog_posts` | `id -> id`, `tieude -> title`, `anh -> image_path`, `danhmucid -> category_id`, `noidung -> content`, `luotxem -> view_count`, `nguoitao -> created_by_id`, `trangthai -> status`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at` |
| `thongbao` | `notifications` | `id -> id`, `tieude -> title`, `anh -> image_path`, `nguoitaoid -> created_by_id`, `noidung -> content`, `ngaybatdau -> start_date`, `ngayketthuc -> end_date`, `trangthai -> status`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at` |
| `yeucaulienhehotro` | `support_tickets` | `id -> id`, `nguoidungid -> user_id`, `hoten -> full_name`, `email -> email`, `sodienthoai -> phone_number`, `tieude -> subject`, `noidung -> content`, `trangthai -> status`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at` |
| `lichsulienhehotro` | `support_ticket_history` | `id -> id`, `hotroid -> support_ticket_id`, `nguoihotroid -> supporter_id`, `ghichu -> notes`, `trangthai -> status`, `ngaytao -> created_at`, `ngaycapnhat -> updated_at` |

String status values are migrated as follows: `sapdienra -> coming_soon`,
`dangdienra -> in_progress`, `daketthuc -> completed`, `huy -> cancelled`;
donation request `dangcho/xacnhan/tuchoi/dahien -> pending/approved/rejected/completed`;
receive request `dangcho/dacomau/dahoanthanh -> pending/blood_allocated/completed`;
blood unit `choxetnghiem/sansang/dasudung/huybo -> waiting_for_testing/ready/used/cancelled`;
and support `moi/dangxuly/hoanthanh/dahuy -> new/in_progress/completed/cancelled`.
Employee values `danglamviec/nghiviec` become `active/inactive`.
Other enum-like values are stored in English as well while the Java/API codes
remain compatible: roles `nguoidung/nhanvien/admin` become `user/employee/admin`,
gender `nam/nu/khac` becomes `male/female/other`, and blood values
`toanphan/hongcau/tieucau/huyettuong` become
`whole_blood/red_cells/platelets/plasma`. `LegacyDomainValueConverter` handles
the API-to-database conversion for these fields.

Foreign-key names use `fk_<table>_<relationship>`, primary keys use
`pk_<table>`, unique constraints use `uq_<table>_<columns>`, checks use
`ck_<table>_<rule>`, and indexes use `idx_<table>_<columns>`. The migration
renames every V1 object to this convention.

## Configuration

Important variables are documented in `.env.example`:

- `DB_URL`, `DB_USERNAME`, `DB_PASSWORD`: PostgreSQL connection.
- `JWT_SECRET`, `JWT_EXPIRATION_MS`: signing key and token lifetime.
- `CORS_ALLOWED_ORIGINS`: comma-separated exact browser origins. Wildcard
  origins are rejected when credentials are enabled.
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USERNAME`, `SMTP_PASSWORD`: optional mail.
- `JPA_DDL_AUTO`: normally `validate`.
- `FLYWAY_ENABLED` and `FLYWAY_BASELINE_ON_MIGRATE`: migration controls. Keep
  `FLYWAY_BASELINE_ON_MIGRATE=false` for a new database so V1 and V2 run.

Do not commit `.env`, credentials, database dumps containing private data, or
real JWT/SMTP values. The existing legacy MySQL dump is retained unchanged and
is not treated as the complete PostgreSQL schema source.

## Tests and build

```powershell
$env:JAVA_HOME = 'C:\Program Files\Eclipse Adoptium\jdk-26.0.2.10-hotspot'
$env:Path = "$env:JAVA_HOME\bin;$env:Path"
.\mvnw.cmd test
.\mvnw.cmd -DskipTests package
```

The test suite includes static migration contract checks, authorization tests,
and a PostgreSQL Testcontainers test that runs Flyway and Hibernate with
`JPA_DDL_AUTO=validate`, then checks the final schema through `JdbcTemplate`.
The container test is skipped when Docker is unavailable; run it with Docker
enabled to validate the live PostgreSQL migration and schema.

## Safe MySQL-to-PostgreSQL migration procedure

The old MySQL dump has fewer tables than the JPA model, so it must not be
replayed directly. The target schema is the versioned Flyway baseline plus V2;
the source database and dump remain untouched.

1. Take a source backup and record row counts for every source table. Export
   data to neutral CSV/ETL staging with explicit UTF-8 encoding and a mapping
   for legacy table/column names.
2. Apply V1 and V2 to an empty PostgreSQL database. Load parent tables first
   (`blood_types`, `users`, and categories), then employees, events, requests,
   inventory, notifications, blog, and support-history data.
3. Convert MySQL-specific values during the load: `0/1` flags, booleans,
   timestamps, identity keys, and legacy status strings. The application enums
   preserve the existing API status codes while the database stores portable
   English `varchar` values.
4. Validate before cutover. Compare row counts, run FK checks, check duplicate
   usernames/emails and compatibility pairs, verify non-null columns and status
   values, verify recovery/expiry/activity dates, and run Hibernate validation
   plus the PostgreSQL integration tests.
5. Reconcile identity sequences after explicit ID loads. For each final table,
   use PostgreSQL `setval` against `MAX(id)` (or its identity equivalent), then
   insert a disposable row in a transaction to verify the next ID.
6. Stop writes, repeat validation, switch `DB_URL` to the target, start the API,
   and monitor logs. Keep the source read-only until the rollback window closes.

Useful final-schema checks include:

```sql
SELECT d.id
FROM donation_requests d
LEFT JOIN users u ON u.id = d.donor_id
WHERE u.id IS NULL;

SELECT username, COUNT(*) FROM users GROUP BY username HAVING COUNT(*) > 1;
SELECT email, COUNT(*) FROM users GROUP BY email HAVING COUNT(*) > 1;
SELECT donor_blood_type_id, recipient_blood_type_id, COUNT(*)
FROM blood_compatibilities
GROUP BY donor_blood_type_id, recipient_blood_type_id HAVING COUNT(*) > 1;

SELECT id FROM donation_events
WHERE current_participants > max_participants OR end_date < start_date;
SELECT id FROM blood_units
WHERE expires_at IS NOT NULL AND collected_at IS NOT NULL AND expires_at <= collected_at;
```

Rollback is a database restore or target snapshot restore, followed by pointing
`DB_URL` back to the unchanged source-compatible environment. Do not roll back
by deleting source rows or editing Flyway history; add a new forward migration
after the incident is understood.
