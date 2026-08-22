-- Rename the V1 schema without recreating tables or deleting data.
-- V1 is already applied in existing environments and must remain unchanged.

DO $$
DECLARE
    table_mapping record;
    sequence_name text;
BEGIN
    FOR table_mapping IN
        SELECT *
        FROM (VALUES
            ('nhommau', 'blood_types'),
            ('nguoidung', 'users'),
            ('thongtinnhanvien', 'employees'),
            ('hoatdonghienmau', 'donation_events'),
            ('yeucauhienmau', 'donation_requests'),
            ('yeucaucanmau', 'blood_requests'),
            ('khodonvimau', 'blood_units'),
            ('nhommautuongthich', 'blood_compatibilities'),
            ('danhmucbaiviet', 'blog_categories'),
            ('baiviet', 'blog_posts'),
            ('thongbao', 'notifications'),
            ('yeucaulienhehotro', 'support_tickets'),
            ('lichsulienhehotro', 'support_ticket_history')
        ) AS mappings(old_table, new_table)
    LOOP
        SELECT sequence_relation.relname
        INTO sequence_name
        FROM pg_class sequence_relation
        JOIN pg_namespace sequence_namespace
            ON sequence_namespace.oid = sequence_relation.relnamespace
        JOIN pg_depend dependency ON dependency.objid = sequence_relation.oid
        JOIN pg_class table_relation ON table_relation.oid = dependency.refobjid
        JOIN pg_namespace table_namespace
            ON table_namespace.oid = table_relation.relnamespace
        JOIN pg_attribute column_relation
            ON column_relation.attrelid = table_relation.oid
           AND column_relation.attnum = dependency.refobjsubid
        WHERE sequence_relation.relkind = 'S'
          AND sequence_namespace.nspname = 'public'
          AND table_namespace.nspname = 'public'
          AND table_relation.relname = table_mapping.old_table
          AND column_relation.attname = 'id'
        LIMIT 1;

        IF sequence_name IS NOT NULL
           AND sequence_name <> table_mapping.new_table || '_id_seq' THEN
            IF to_regclass('public.' || table_mapping.new_table || '_id_seq') IS NOT NULL THEN
                RAISE EXCEPTION
                    'Cannot rename legacy sequence %.%: target sequence %.% already exists',
                    'public', sequence_name, 'public', table_mapping.new_table || '_id_seq';
            END IF;
            EXECUTE format(
                'ALTER SEQUENCE %I.%I RENAME TO %I',
                'public', sequence_name,
                table_mapping.new_table || '_id_seq'
            );
        END IF;
    END LOOP;
END $$;

ALTER TABLE nhommau RENAME TO blood_types;
ALTER TABLE nguoidung RENAME TO users;
ALTER TABLE thongtinnhanvien RENAME TO employees;
ALTER TABLE hoatdonghienmau RENAME TO donation_events;
ALTER TABLE yeucauhienmau RENAME TO donation_requests;
ALTER TABLE yeucaucanmau RENAME TO blood_requests;
ALTER TABLE khodonvimau RENAME TO blood_units;
ALTER TABLE nhommautuongthich RENAME TO blood_compatibilities;
ALTER TABLE danhmucbaiviet RENAME TO blog_categories;
ALTER TABLE baiviet RENAME TO blog_posts;
ALTER TABLE thongbao RENAME TO notifications;
ALTER TABLE yeucaulienhehotro RENAME TO support_tickets;
ALTER TABLE lichsulienhehotro RENAME TO support_ticket_history;

ALTER TABLE blood_types RENAME COLUMN ten TO name;
ALTER TABLE blood_types RENAME COLUMN mota TO description;
ALTER TABLE blood_types RENAME COLUMN trangthai TO status;
ALTER TABLE blood_types RENAME COLUMN ngaytao TO created_at;
ALTER TABLE blood_types RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE users RENAME COLUMN ten TO name;
ALTER TABLE users RENAME COLUMN tendangnhap TO username;
ALTER TABLE users RENAME COLUMN matkhau TO password_hash;
ALTER TABLE users RENAME COLUMN sodienthoai TO phone_number;
ALTER TABLE users RENAME COLUMN ngaysinh TO birth_date;
ALTER TABLE users RENAME COLUMN gioitinh TO gender;
ALTER TABLE users RENAME COLUMN diachi TO address;
ALTER TABLE users RENAME COLUMN nhommauid TO blood_type_id;
ALTER TABLE users RENAME COLUMN yeutorh TO rh_factor;
ALTER TABLE users RENAME COLUMN tiensubenh TO medical_history;
ALTER TABLE users RENAME COLUMN cannang TO weight_kg;
ALTER TABLE users RENAME COLUMN chieucao TO height_cm;
ALTER TABLE users RENAME COLUMN vaitro TO role;
ALTER TABLE users RENAME COLUMN trangthai TO status;
ALTER TABLE users RENAME COLUMN ngaytao TO created_at;
ALTER TABLE users RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE employees RENAME COLUMN masonhanvien TO employee_number;
ALTER TABLE employees RENAME COLUMN chucvu TO job_title;
ALTER TABLE employees RENAME COLUMN phongban TO department;
ALTER TABLE employees RENAME COLUMN ngayvaolam TO start_date;
ALTER TABLE employees RENAME COLUMN trangthailamviec TO employment_status;
ALTER TABLE employees RENAME COLUMN nguoidungid TO user_id;
ALTER TABLE employees RENAME COLUMN ngaytao TO created_at;
ALTER TABLE employees RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE donation_events RENAME COLUMN ten TO name;
ALTER TABLE donation_events RENAME COLUMN ngaybatdau TO start_date;
ALTER TABLE donation_events RENAME COLUMN ngayketthuc TO end_date;
ALTER TABLE donation_events RENAME COLUMN diadiem TO location;
ALTER TABLE donation_events RENAME COLUMN mota TO description;
ALTER TABLE donation_events RENAME COLUMN soluongnguoitoida TO max_participants;
ALTER TABLE donation_events RENAME COLUMN soluongnguoidangkyhientai TO current_participants;
ALTER TABLE donation_events RENAME COLUMN nguoitaoid TO created_by_id;
ALTER TABLE donation_events RENAME COLUMN trangthaihoatdong TO status;
ALTER TABLE donation_events RENAME COLUMN ngaytao TO created_at;
ALTER TABLE donation_events RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE donation_requests RENAME COLUMN nguoihienid TO donor_id;
ALTER TABLE donation_requests RENAME COLUMN hoatdonghienmauid TO donation_event_id;
ALTER TABLE donation_requests RENAME COLUMN ngayhienmaudukien TO scheduled_donation_date;
ALTER TABLE donation_requests RENAME COLUMN ngayphuchoigannhat TO last_recovery_date;
ALTER TABLE donation_requests RENAME COLUMN ghichu TO notes;
ALTER TABLE donation_requests RENAME COLUMN nguoiduyetid TO approved_by_id;
ALTER TABLE donation_requests RENAME COLUMN ngayduyet TO approved_at;
ALTER TABLE donation_requests RENAME COLUMN soluong TO amount_ml;
ALTER TABLE donation_requests RENAME COLUMN loaihien TO donation_type;
ALTER TABLE donation_requests RENAME COLUMN trangthai TO status;
ALTER TABLE donation_requests RENAME COLUMN suckhoehientai TO current_health;
ALTER TABLE donation_requests RENAME COLUMN formkham TO screening_form;
ALTER TABLE donation_requests RENAME COLUMN dangmangthai TO pregnancy_flag;
ALTER TABLE donation_requests RENAME COLUMN macbenhtruyennhiem TO infectious_disease_flag;
ALTER TABLE donation_requests RENAME COLUMN ngaytao TO created_at;
ALTER TABLE donation_requests RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE blood_requests RENAME COLUMN nguoinhanid TO recipient_id;
ALTER TABLE blood_requests RENAME COLUMN ngaynhanmaudukien TO scheduled_receive_date;
ALTER TABLE blood_requests RENAME COLUMN nhommauid TO blood_type_id;
ALTER TABLE blood_requests RENAME COLUMN thanhphanmaucan TO required_blood_component;
ALTER TABLE blood_requests RENAME COLUMN soluongdonvi TO quantity_units;
ALTER TABLE blood_requests RENAME COLUMN lydo TO reason;
ALTER TABLE blood_requests RENAME COLUMN khancap TO urgent;
ALTER TABLE blood_requests RENAME COLUMN diachinhanmau TO receiving_address;
ALTER TABLE blood_requests RENAME COLUMN ghichu TO notes;
ALTER TABLE blood_requests RENAME COLUMN nguoiduyetid TO approved_by_id;
ALTER TABLE blood_requests RENAME COLUMN ngayduyet TO approved_at;
ALTER TABLE blood_requests RENAME COLUMN trangthai TO status;
ALTER TABLE blood_requests RENAME COLUMN suckhoehientai TO current_health;
ALTER TABLE blood_requests RENAME COLUMN dangmangthai TO pregnancy_flag;
ALTER TABLE blood_requests RENAME COLUMN formkham TO screening_form;
ALTER TABLE blood_requests RENAME COLUMN macbenhtruyennhiem TO infectious_disease_flag;
ALTER TABLE blood_requests RENAME COLUMN ngaytao TO created_at;
ALTER TABLE blood_requests RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE blood_units RENAME COLUMN nhommauid TO blood_type_id;
ALTER TABLE blood_units RENAME COLUMN thanhphan TO blood_component;
ALTER TABLE blood_units RENAME COLUMN soluong TO quantity;
ALTER TABLE blood_units RENAME COLUMN ngaylaymau TO collected_at;
ALTER TABLE blood_units RENAME COLUMN ngayhethan TO expires_at;
ALTER TABLE blood_units RENAME COLUMN nguoihienid TO donor_id;
ALTER TABLE blood_units RENAME COLUMN ketquaxetnghiem TO test_result;
ALTER TABLE blood_units RENAME COLUMN vitriluutru TO storage_location;
ALTER TABLE blood_units RENAME COLUMN ghichu TO notes;
ALTER TABLE blood_units RENAME COLUMN trangthai TO status;
ALTER TABLE blood_units RENAME COLUMN yeucaucanmauid TO blood_request_id;
ALTER TABLE blood_units RENAME COLUMN ngaytao TO created_at;
ALTER TABLE blood_units RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE blood_compatibilities RENAME COLUMN nhommauhienid TO donor_blood_type_id;
ALTER TABLE blood_compatibilities RENAME COLUMN nhommaunhanid TO recipient_blood_type_id;
ALTER TABLE blood_compatibilities RENAME COLUMN trangthai TO status;
ALTER TABLE blood_compatibilities RENAME COLUMN ngaytao TO created_at;
ALTER TABLE blood_compatibilities RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE blog_categories RENAME COLUMN tieude TO title;
ALTER TABLE blog_categories RENAME COLUMN noidung TO content;
ALTER TABLE blog_categories RENAME COLUMN trangthai TO status;
ALTER TABLE blog_categories RENAME COLUMN ngaytao TO created_at;
ALTER TABLE blog_categories RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE blog_posts RENAME COLUMN tieude TO title;
ALTER TABLE blog_posts RENAME COLUMN anh TO image_path;
ALTER TABLE blog_posts RENAME COLUMN danhmucid TO category_id;
ALTER TABLE blog_posts RENAME COLUMN noidung TO content;
ALTER TABLE blog_posts RENAME COLUMN luotxem TO view_count;
ALTER TABLE blog_posts RENAME COLUMN nguoitao TO created_by_id;
ALTER TABLE blog_posts RENAME COLUMN trangthai TO status;
ALTER TABLE blog_posts RENAME COLUMN ngaytao TO created_at;
ALTER TABLE blog_posts RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE notifications RENAME COLUMN tieude TO title;
ALTER TABLE notifications RENAME COLUMN anh TO image_path;
ALTER TABLE notifications RENAME COLUMN nguoitaoid TO created_by_id;
ALTER TABLE notifications RENAME COLUMN noidung TO content;
ALTER TABLE notifications RENAME COLUMN ngaybatdau TO start_date;
ALTER TABLE notifications RENAME COLUMN ngayketthuc TO end_date;
ALTER TABLE notifications RENAME COLUMN trangthai TO status;
ALTER TABLE notifications RENAME COLUMN ngaytao TO created_at;
ALTER TABLE notifications RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE support_tickets RENAME COLUMN nguoidungid TO user_id;
ALTER TABLE support_tickets RENAME COLUMN hoten TO full_name;
ALTER TABLE support_tickets RENAME COLUMN sodienthoai TO phone_number;
ALTER TABLE support_tickets RENAME COLUMN tieude TO subject;
ALTER TABLE support_tickets RENAME COLUMN noidung TO content;
ALTER TABLE support_tickets RENAME COLUMN trangthai TO status;
ALTER TABLE support_tickets RENAME COLUMN ngaytao TO created_at;
ALTER TABLE support_tickets RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE support_ticket_history RENAME COLUMN hotroid TO support_ticket_id;
ALTER TABLE support_ticket_history RENAME COLUMN nguoihotroid TO supporter_id;
ALTER TABLE support_ticket_history RENAME COLUMN ghichu TO notes;
ALTER TABLE support_ticket_history RENAME COLUMN trangthai TO status;
ALTER TABLE support_ticket_history RENAME COLUMN ngaytao TO created_at;
ALTER TABLE support_ticket_history RENAME COLUMN ngaycapnhat TO updated_at;

ALTER TABLE blood_types DROP CONSTRAINT nhommau_trangthai_check;
ALTER TABLE users DROP CONSTRAINT nguoidung_trangthai_check;
ALTER TABLE donation_events DROP CONSTRAINT ck_activity_status;
ALTER TABLE donation_requests DROP CONSTRAINT yeucauhienmau_trangthai_check;
ALTER TABLE blood_requests DROP CONSTRAINT yeucaucanmau_trangthai_check;
ALTER TABLE blood_units DROP CONSTRAINT khodonvimau_trangthai_check;
ALTER TABLE blood_compatibilities DROP CONSTRAINT nhommautuongthich_trangthai_check;
ALTER TABLE blog_categories DROP CONSTRAINT danhmucbaiviet_trangthai_check;
ALTER TABLE blog_posts DROP CONSTRAINT baiviet_trangthai_check;
ALTER TABLE notifications DROP CONSTRAINT thongbao_trangthai_check;
ALTER TABLE support_tickets DROP CONSTRAINT yeucaulienhehotro_trangthai_check;
ALTER TABLE support_ticket_history DROP CONSTRAINT lichsulienhehotro_trangthai_check;
ALTER TABLE donation_requests
    RENAME CONSTRAINT ck_donation_recovery_date
    TO ck_donation_requests_recovery_before_scheduled;

UPDATE donation_events
SET status = CASE status
    WHEN 'sapdienra' THEN 'coming_soon'
    WHEN 'dangdienra' THEN 'in_progress'
    WHEN 'daketthuc' THEN 'completed'
    WHEN 'huy' THEN 'cancelled'
    ELSE status
END
WHERE status IS NOT NULL;

UPDATE donation_requests
SET status = CASE status
    WHEN 'dangcho' THEN 'pending'
    WHEN 'huy' THEN 'cancelled'
    WHEN 'xacnhan' THEN 'approved'
    WHEN 'tuchoi' THEN 'rejected'
    WHEN 'dahien' THEN 'completed'
    ELSE status
END;

UPDATE blood_requests
SET status = CASE status
    WHEN 'dangcho' THEN 'pending'
    WHEN 'huy' THEN 'cancelled'
    WHEN 'dacomau' THEN 'blood_allocated'
    WHEN 'dahoanthanh' THEN 'completed'
    ELSE status
END;

UPDATE blood_units
SET status = CASE status
    WHEN 'choxetnghiem' THEN 'waiting_for_testing'
    WHEN 'sansang' THEN 'ready'
    WHEN 'dasudung' THEN 'used'
    WHEN 'huybo' THEN 'cancelled'
    ELSE status
END;

UPDATE support_tickets
SET status = CASE status
    WHEN 'moi' THEN 'new'
    WHEN 'dangxuly' THEN 'in_progress'
    WHEN 'hoanthanh' THEN 'completed'
    WHEN 'dahuy' THEN 'cancelled'
    ELSE status
END;

UPDATE support_ticket_history
SET status = CASE status
    WHEN 'moi' THEN 'new'
    WHEN 'dangxuly' THEN 'in_progress'
    WHEN 'hoanthanh' THEN 'completed'
    WHEN 'dahuy' THEN 'cancelled'
    ELSE status
END;

UPDATE employees
SET employment_status = CASE lower(employment_status)
    WHEN 'danglamviec' THEN 'active'
    WHEN 'nghiviec' THEN 'inactive'
    WHEN 'active' THEN 'active'
    WHEN 'inactive' THEN 'inactive'
    ELSE employment_status
END
WHERE employment_status IS NOT NULL;

UPDATE users
SET role = CASE lower(role)
    WHEN 'nguoidung' THEN 'user'
    WHEN 'customer' THEN 'user'
    WHEN 'nhanvien' THEN 'employee'
    WHEN 'administrator' THEN 'admin'
    ELSE role
END;

UPDATE users
SET gender = CASE lower(gender)
    WHEN 'nam' THEN 'male'
    WHEN 'nu' THEN 'female'
    WHEN 'khac' THEN 'other'
    ELSE gender
END
WHERE gender IS NOT NULL;

UPDATE donation_requests
SET donation_type = CASE lower(donation_type)
    WHEN 'toanphan' THEN 'whole_blood'
    WHEN 'hongcau' THEN 'red_cells'
    WHEN 'tieucau' THEN 'platelets'
    WHEN 'huyettuong' THEN 'plasma'
    ELSE donation_type
END;

UPDATE blood_requests
SET required_blood_component = CASE lower(required_blood_component)
    WHEN 'toanphan' THEN 'whole_blood'
    WHEN 'hongcau' THEN 'red_cells'
    WHEN 'tieucau' THEN 'platelets'
    WHEN 'huyettuong' THEN 'plasma'
    ELSE required_blood_component
END
WHERE required_blood_component IS NOT NULL;

UPDATE blood_units
SET blood_component = CASE lower(blood_component)
    WHEN 'toanphan' THEN 'whole_blood'
    WHEN 'hongcau' THEN 'red_cells'
    WHEN 'tieucau' THEN 'platelets'
    WHEN 'huyettuong' THEN 'plasma'
    ELSE blood_component
END;

ALTER TABLE donation_requests ALTER COLUMN status SET DEFAULT 'pending';
ALTER TABLE blood_requests ALTER COLUMN status SET DEFAULT 'pending';
ALTER TABLE blood_units ALTER COLUMN status SET DEFAULT 'waiting_for_testing';
ALTER TABLE support_tickets ALTER COLUMN status SET DEFAULT 'new';
ALTER TABLE support_ticket_history ALTER COLUMN status SET DEFAULT 'new';
ALTER TABLE donation_requests ALTER COLUMN donation_type SET DEFAULT 'whole_blood';
ALTER TABLE blood_units ALTER COLUMN blood_component SET DEFAULT 'whole_blood';

ALTER TABLE blood_types RENAME CONSTRAINT nhommau_pkey TO pk_blood_types;
ALTER TABLE users RENAME CONSTRAINT nguoidung_pkey TO pk_users;
ALTER TABLE employees RENAME CONSTRAINT thongtinnhanvien_pkey TO pk_employees;
ALTER TABLE donation_events RENAME CONSTRAINT hoatdonghienmau_pkey TO pk_donation_events;
ALTER TABLE donation_requests RENAME CONSTRAINT yeucauhienmau_pkey TO pk_donation_requests;
ALTER TABLE blood_requests RENAME CONSTRAINT yeucaucanmau_pkey TO pk_blood_requests;
ALTER TABLE blood_units RENAME CONSTRAINT khodonvimau_pkey TO pk_blood_units;
ALTER TABLE blood_compatibilities RENAME CONSTRAINT nhommautuongthich_pkey TO pk_blood_compatibilities;
ALTER TABLE blog_categories RENAME CONSTRAINT danhmucbaiviet_pkey TO pk_blog_categories;
ALTER TABLE blog_posts RENAME CONSTRAINT baiviet_pkey TO pk_blog_posts;
ALTER TABLE notifications RENAME CONSTRAINT thongbao_pkey TO pk_notifications;
ALTER TABLE support_tickets RENAME CONSTRAINT yeucaulienhehotro_pkey TO pk_support_tickets;
ALTER TABLE support_ticket_history RENAME CONSTRAINT lichsulienhehotro_pkey TO pk_support_ticket_history;

ALTER TABLE blood_types RENAME CONSTRAINT nhommau_ten_key TO uq_blood_types_name;
ALTER TABLE users RENAME CONSTRAINT nguoidung_tendangnhap_key TO uq_users_username;
ALTER TABLE users RENAME CONSTRAINT nguoidung_email_key TO uq_users_email;
ALTER TABLE employees RENAME CONSTRAINT thongtinnhanvien_masonhanvien_key TO uq_employees_employee_number;
ALTER TABLE employees RENAME CONSTRAINT thongtinnhanvien_nguoidungid_key TO uq_employees_user_id;
ALTER TABLE blood_compatibilities RENAME CONSTRAINT uq_compatible_blood_pair TO uq_blood_compatibilities_donor_recipient_types;

ALTER TABLE donation_events RENAME CONSTRAINT hoatdonghienmau_soluongnguoitoida_check TO ck_donation_events_max_participants_positive;
ALTER TABLE donation_events RENAME CONSTRAINT hoatdonghienmau_soluongnguoidangkyhientai_check TO ck_donation_events_current_participants_nonnegative;
ALTER TABLE donation_events RENAME CONSTRAINT ck_activity_dates TO ck_donation_events_end_date_after_start;
ALTER TABLE donation_events RENAME CONSTRAINT ck_activity_capacity TO ck_donation_events_current_participants_within_capacity;
ALTER TABLE donation_requests RENAME CONSTRAINT yeucauhienmau_soluong_check TO ck_donation_requests_amount_ml_range;
ALTER TABLE donation_requests RENAME CONSTRAINT yeucauhienmau_dangmangthai_check TO ck_donation_requests_pregnancy_flag;
ALTER TABLE donation_requests RENAME CONSTRAINT yeucauhienmau_macbenhtruyennhiem_check TO ck_donation_requests_infectious_disease_flag;
ALTER TABLE blood_requests RENAME CONSTRAINT yeucaucanmau_soluongdonvi_check TO ck_blood_requests_quantity_units_range;
ALTER TABLE blood_requests RENAME CONSTRAINT yeucaucanmau_dangmangthai_check TO ck_blood_requests_pregnancy_flag;
ALTER TABLE blood_requests RENAME CONSTRAINT yeucaucanmau_macbenhtruyennhiem_check TO ck_blood_requests_infectious_disease_flag;
ALTER TABLE blood_units RENAME CONSTRAINT khodonvimau_soluong_check TO ck_blood_units_quantity_positive;
ALTER TABLE blood_units RENAME CONSTRAINT ck_blood_unit_expiry TO ck_blood_units_expires_after_collected;
ALTER TABLE blood_compatibilities RENAME CONSTRAINT ck_compatible_blood_distinct TO ck_blood_compatibilities_distinct_types;
ALTER TABLE blog_posts RENAME CONSTRAINT baiviet_luotxem_check TO ck_blog_posts_view_count_nonnegative;
ALTER TABLE notifications RENAME CONSTRAINT ck_notification_dates TO ck_notifications_end_date_after_start;

ALTER TABLE users RENAME CONSTRAINT nguoidung_nhommauid_fkey TO fk_users_blood_type;
ALTER TABLE employees RENAME CONSTRAINT thongtinnhanvien_nguoidungid_fkey TO fk_employees_user;
ALTER TABLE donation_events RENAME CONSTRAINT hoatdonghienmau_nguoitaoid_fkey TO fk_donation_events_created_by;
ALTER TABLE donation_requests RENAME CONSTRAINT yeucauhienmau_nguoihienid_fkey TO fk_donation_requests_donor;
ALTER TABLE donation_requests RENAME CONSTRAINT yeucauhienmau_hoatdonghienmauid_fkey TO fk_donation_requests_event;
ALTER TABLE donation_requests RENAME CONSTRAINT yeucauhienmau_nguoiduyetid_fkey TO fk_donation_requests_approved_by;
ALTER TABLE blood_requests RENAME CONSTRAINT yeucaucanmau_nguoinhanid_fkey TO fk_blood_requests_recipient;
ALTER TABLE blood_requests RENAME CONSTRAINT yeucaucanmau_nhommauid_fkey TO fk_blood_requests_blood_type;
ALTER TABLE blood_requests RENAME CONSTRAINT yeucaucanmau_nguoiduyetid_fkey TO fk_blood_requests_approved_by;
ALTER TABLE blood_units RENAME CONSTRAINT khodonvimau_nhommauid_fkey TO fk_blood_units_blood_type;
ALTER TABLE blood_units RENAME CONSTRAINT khodonvimau_nguoihienid_fkey TO fk_blood_units_donor;
ALTER TABLE blood_units RENAME CONSTRAINT khodonvimau_yeucaucanmauid_fkey TO fk_blood_units_blood_request;
ALTER TABLE blood_compatibilities RENAME CONSTRAINT nhommautuongthich_nhommauhienid_fkey TO fk_blood_compatibilities_donor_type;
ALTER TABLE blood_compatibilities RENAME CONSTRAINT nhommautuongthich_nhommaunhanid_fkey TO fk_blood_compatibilities_recipient_type;
ALTER TABLE blog_posts RENAME CONSTRAINT baiviet_danhmucid_fkey TO fk_blog_posts_category;
ALTER TABLE notifications RENAME CONSTRAINT thongbao_nguoitaoid_fkey TO fk_notifications_created_by;
ALTER TABLE support_tickets RENAME CONSTRAINT yeucaulienhehotro_nguoidungid_fkey TO fk_support_tickets_user;
ALTER TABLE support_ticket_history RENAME CONSTRAINT lichsulienhehotro_hotroid_fkey TO fk_support_ticket_history_ticket;
ALTER TABLE support_ticket_history RENAME CONSTRAINT lichsulienhehotro_nguoihotroid_fkey TO fk_support_ticket_history_supporter;

ALTER INDEX IF EXISTS nhommau_pkey RENAME TO pk_blood_types;
ALTER INDEX IF EXISTS nguoidung_pkey RENAME TO pk_users;
ALTER INDEX IF EXISTS thongtinnhanvien_pkey RENAME TO pk_employees;
ALTER INDEX IF EXISTS hoatdonghienmau_pkey RENAME TO pk_donation_events;
ALTER INDEX IF EXISTS yeucauhienmau_pkey RENAME TO pk_donation_requests;
ALTER INDEX IF EXISTS yeucaucanmau_pkey RENAME TO pk_blood_requests;
ALTER INDEX IF EXISTS khodonvimau_pkey RENAME TO pk_blood_units;
ALTER INDEX IF EXISTS nhommautuongthich_pkey RENAME TO pk_blood_compatibilities;
ALTER INDEX IF EXISTS danhmucbaiviet_pkey RENAME TO pk_blog_categories;
ALTER INDEX IF EXISTS baiviet_pkey RENAME TO pk_blog_posts;
ALTER INDEX IF EXISTS thongbao_pkey RENAME TO pk_notifications;
ALTER INDEX IF EXISTS yeucaulienhehotro_pkey RENAME TO pk_support_tickets;
ALTER INDEX IF EXISTS lichsulienhehotro_pkey RENAME TO pk_support_ticket_history;
ALTER INDEX IF EXISTS nhommau_ten_key RENAME TO uq_blood_types_name;
ALTER INDEX IF EXISTS nguoidung_tendangnhap_key RENAME TO uq_users_username;
ALTER INDEX IF EXISTS nguoidung_email_key RENAME TO uq_users_email;
ALTER INDEX IF EXISTS thongtinnhanvien_masonhanvien_key RENAME TO uq_employees_employee_number;
ALTER INDEX IF EXISTS thongtinnhanvien_nguoidungid_key RENAME TO uq_employees_user_id;
ALTER INDEX IF EXISTS uq_compatible_blood_pair RENAME TO uq_blood_compatibilities_donor_recipient_types;

ALTER INDEX IF EXISTS idx_user_blood RENAME TO idx_users_blood_type_id;
ALTER INDEX IF EXISTS idx_user_role_status RENAME TO idx_users_role_status;
ALTER INDEX IF EXISTS idx_employee_user RENAME TO idx_employees_user_id;
ALTER INDEX IF EXISTS idx_activity_status_dates RENAME TO idx_donation_events_status_start_end;
ALTER INDEX IF EXISTS idx_activity_creator RENAME TO idx_donation_events_created_by_id;
ALTER INDEX IF EXISTS idx_donation_request_status_date RENAME TO idx_donation_requests_status_scheduled_date;
ALTER INDEX IF EXISTS idx_donation_request_donor RENAME TO idx_donation_requests_donor_id;
ALTER INDEX IF EXISTS idx_donation_request_activity RENAME TO idx_donation_requests_donation_event_id;
ALTER INDEX IF EXISTS idx_receive_request_status_date RENAME TO idx_blood_requests_status_scheduled_date;
ALTER INDEX IF EXISTS idx_receive_request_recipient RENAME TO idx_blood_requests_recipient_id;
ALTER INDEX IF EXISTS idx_receive_request_blood RENAME TO idx_blood_requests_blood_type_id;
ALTER INDEX IF EXISTS idx_blood_unit_status_expiry RENAME TO idx_blood_units_status_expires_at;
ALTER INDEX IF EXISTS idx_blood_unit_blood RENAME TO idx_blood_units_blood_type_id;
ALTER INDEX IF EXISTS idx_blood_unit_receive_request RENAME TO idx_blood_units_blood_request_id;
ALTER INDEX IF EXISTS idx_compatible_blood_target RENAME TO idx_blood_compatibilities_recipient_blood_type_id;
ALTER INDEX IF EXISTS idx_blog_category_status RENAME TO idx_blog_posts_category_status;
ALTER INDEX IF EXISTS idx_notification_active_dates RENAME TO idx_notifications_status_start_end;
ALTER INDEX IF EXISTS idx_support_ticket_status_date RENAME TO idx_support_tickets_status_created_at;
ALTER INDEX IF EXISTS idx_support_ticket_user RENAME TO idx_support_tickets_user_id;
ALTER INDEX IF EXISTS idx_support_history_ticket RENAME TO idx_support_ticket_history_support_ticket_id;

ALTER TABLE employees
    ADD CONSTRAINT ck_employees_employment_status
    CHECK (employment_status IS NULL OR employment_status IN ('active', 'inactive'));

ALTER TABLE blood_types
    ADD CONSTRAINT ck_blood_types_status CHECK (status IN (0, 1));
ALTER TABLE users
    ADD CONSTRAINT ck_users_status CHECK (status IN (0, 1));
ALTER TABLE donation_events
    ADD CONSTRAINT ck_donation_events_status
    CHECK (status IS NULL OR status IN ('coming_soon', 'in_progress', 'completed', 'cancelled'));
ALTER TABLE donation_requests
    ADD CONSTRAINT ck_donation_requests_status
    CHECK (status IN ('pending', 'cancelled', 'approved', 'rejected', 'completed'));
ALTER TABLE blood_requests
    ADD CONSTRAINT ck_blood_requests_status
    CHECK (status IN ('pending', 'cancelled', 'blood_allocated', 'completed'));
ALTER TABLE blood_units
    ADD CONSTRAINT ck_blood_units_status
    CHECK (status IN ('waiting_for_testing', 'ready', 'used', 'cancelled'));
ALTER TABLE blood_compatibilities
    ADD CONSTRAINT ck_blood_compatibilities_status CHECK (status IN (0, 1));
ALTER TABLE blog_categories
    ADD CONSTRAINT ck_blog_categories_status CHECK (status IN (0, 1));
ALTER TABLE blog_posts
    ADD CONSTRAINT ck_blog_posts_status CHECK (status IN (0, 1));
ALTER TABLE notifications
    ADD CONSTRAINT ck_notifications_status CHECK (status IN (0, 1));
ALTER TABLE support_tickets
    ADD CONSTRAINT ck_support_tickets_status
    CHECK (status IN ('new', 'in_progress', 'completed', 'cancelled'));
ALTER TABLE support_ticket_history
    ADD CONSTRAINT ck_support_ticket_history_status
    CHECK (status IN ('new', 'in_progress', 'completed', 'cancelled'));

ALTER TABLE users
    ADD CONSTRAINT ck_users_role CHECK (role IN ('user', 'employee', 'admin'));
ALTER TABLE users
    ADD CONSTRAINT ck_users_gender CHECK (gender IS NULL OR gender IN ('male', 'female', 'other'));
ALTER TABLE donation_requests
    ADD CONSTRAINT ck_donation_requests_donation_type
    CHECK (donation_type IN ('whole_blood', 'red_cells', 'platelets', 'plasma'));
