import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import DonorLayout from "../layouts/DonorLayout";
import StaffLayout from "../layouts/StaffLayout";
import AdminLayout from "../layouts/AdminLayout";
import RouteGuard from "../lib/auth/RouteGuard";
import { useAuth } from "../lib/auth/AuthContext";
import { homePathForRole } from "../lib/auth/roles";
import RouteFallback from "../components/states/RouteFallback";

const HomePage = lazy(() => import("../features/public/HomePage"));
const DonationGuidePage = lazy(() => import("../features/public/DonationGuidePage"));
const ContactPage = lazy(() => import("../features/public/ContactPage"));

const LoginPage = lazy(() => import("../features/auth/LoginPage"));
const RegisterPage = lazy(() => import("../features/auth/RegisterPage"));
const ChangePasswordPage = lazy(() => import("../features/auth/ChangePasswordPage"));

const CampaignListPage = lazy(() => import("../features/campaigns/CampaignListPage"));
const PublicCampaignDetailPage = lazy(() => import("../features/campaigns/PublicCampaignDetailPage"));
const DonorCampaignDetailPage = lazy(() => import("../features/campaigns/DonorCampaignDetailPage"));
const CampaignManagerPage = lazy(() => import("../features/campaigns/CampaignManagerPage"));
const CampaignManagerDetailPage = lazy(() => import("../features/campaigns/CampaignManagerDetailPage"));

const BlogListPage = lazy(() => import("../features/blogs/BlogListPage"));
const BlogDetailPage = lazy(() => import("../features/blogs/BlogDetailPage"));
const BlogManagerPage = lazy(() => import("../features/blogs/BlogManagerPage"));
const BlogDetailManagerPage = lazy(() => import("../features/blogs/BlogDetailManagerPage"));
const BlogCategoryDetailPage = lazy(() => import("../features/blogs/BlogCategoryDetailPage"));

const DonorDashboardPage = lazy(() => import("../features/dashboard/DonorDashboardPage"));
const AdminOverviewPage = lazy(() => import("../features/dashboard/AdminOverviewPage"));

const DonationHistoryPage = lazy(() => import("../features/donation-requests/DonationHistoryPage"));
const StaffDonationQueuePage = lazy(() => import("../features/donation-requests/StaffDonationQueuePage"));
const StaffDonationDetailPage = lazy(() => import("../features/donation-requests/StaffDonationDetailPage"));

const DonorReceiveRequestsPage = lazy(() => import("../features/receive-requests/DonorReceiveRequestsPage"));
const StaffReceiveQueuePage = lazy(() => import("../features/receive-requests/StaffReceiveQueuePage"));
const StaffReceiveDetailPage = lazy(() => import("../features/receive-requests/StaffReceiveDetailPage"));

const BloodUnitsPage = lazy(() => import("../features/blood-units/BloodUnitsPage"));
const BloodTypesManagerPage = lazy(() => import("../features/blood-types/BloodTypesManagerPage"));
const BloodTypeDetailPage = lazy(() => import("../features/blood-types/BloodTypeDetailPage"));

const NearMePage = lazy(() => import("../features/users/NearMePage"));
const ProfilePage = lazy(() => import("../features/users/ProfilePage"));
const ProfileEditPage = lazy(() => import("../features/users/ProfileEditPage"));
const UserManagerPage = lazy(() => import("../features/users/UserManagerPage"));
const UserDetailPage = lazy(() => import("../features/users/UserDetailPage"));

const NotificationManagerPage = lazy(() => import("../features/notifications/NotificationManagerPage"));
const SupportManagerPage = lazy(() => import("../features/support/SupportManagerPage"));

const PrivacyPolicyPage = lazy(() =>
  import("../features/public/LegalPages").then((m) => ({ default: m.PrivacyPolicyPage }))
);
const TermsPage = lazy(() =>
  import("../features/public/LegalPages").then((m) => ({ default: m.TermsPage }))
);
const SitemapPage = lazy(() =>
  import("../features/public/LegalPages").then((m) => ({ default: m.SitemapPage }))
);

function HomeOrRedirect() {
  const { isAuthenticated, role } = useAuth();
  if (isAuthenticated) return <Navigate to={homePathForRole(role)} replace />;
  return <HomePage />;
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomeOrRedirect />} />
          <Route path="/chien-dich" element={<CampaignListPage basePath="/chien-dich" />} />
          <Route path="/chien-dich/:id" element={<PublicCampaignDetailPage />} />
          <Route path="/cam-nang-hien-mau" element={<DonationGuidePage />} />
          <Route path="/bai-viet" element={<BlogListPage basePath="/bai-viet" />} />
          <Route path="/bai-viet/:id" element={<BlogDetailPage />} />
          <Route path="/lien-he" element={<ContactPage />} />
          <Route path="/chinh-sach-bao-mat" element={<PrivacyPolicyPage />} />
          <Route path="/dieu-khoan-su-dung" element={<TermsPage />} />
          <Route path="/so-do-trang-web" element={<SitemapPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/user"
          element={
            <RouteGuard allowedRoles={["USER"]}>
              <DonorLayout />
            </RouteGuard>
          }
        >
          <Route index element={<DonorDashboardPage />} />
          <Route path="chien-dich" element={<CampaignListPage basePath="/user/chien-dich" />} />
          <Route path="chien-dich/:id" element={<DonorCampaignDetailPage />} />
          <Route path="lich-su-dang-ky" element={<DonationHistoryPage />} />
          <Route path="yeu-cau-nhan-mau" element={<DonorReceiveRequestsPage />} />
          <Route path="nguoi-hien-gan-ban" element={<NearMePage />} />
          <Route path="bai-viet" element={<BlogListPage basePath="/user/bai-viet" />} />
          <Route path="bai-viet/:id" element={<BlogDetailPage />} />
          <Route path="ho-so" element={<ProfilePage />} />
          <Route path="ho-so/chinh-sua" element={<ProfileEditPage />} />
          <Route path="doi-mat-khau" element={<ChangePasswordPage />} />
        </Route>

        <Route
          path="/employee"
          element={
            <RouteGuard allowedRoles={["EMPLOYEE"]}>
              <StaffLayout />
            </RouteGuard>
          }
        >
          <Route index element={<Navigate to="chien-dich" replace />} />
          <Route path="chien-dich" element={<CampaignManagerPage basePath="/employee/chien-dich" />} />
          <Route path="chien-dich/:id" element={<CampaignManagerDetailPage />} />
          <Route path="yeu-cau-hien-mau" element={<StaffDonationQueuePage />} />
          <Route path="yeu-cau-hien-mau/:id" element={<StaffDonationDetailPage />} />
          <Route path="yeu-cau-nhan-mau" element={<StaffReceiveQueuePage />} />
          <Route path="yeu-cau-nhan-mau/:id" element={<StaffReceiveDetailPage />} />
          <Route path="kho-don-vi-mau" element={<BloodUnitsPage />} />
          <Route path="nhom-mau" element={<BloodTypesManagerPage />} />
          <Route path="nhom-mau/:id" element={<BloodTypeDetailPage />} />
          <Route path="bai-viet" element={<BlogManagerPage basePath="/employee/bai-viet" />} />
          <Route path="bai-viet/:id" element={<BlogDetailManagerPage />} />
          <Route path="bai-viet/danh-muc/:id" element={<BlogCategoryDetailPage />} />
        </Route>

        <Route
          path="/admin"
          element={
            <RouteGuard allowedRoles={["ADMIN"]}>
              <AdminLayout />
            </RouteGuard>
          }
        >
          <Route index element={<AdminOverviewPage />} />
          <Route path="nguoi-dung" element={<UserManagerPage />} />
          <Route path="nguoi-dung/:id" element={<UserDetailPage />} />
          <Route path="chien-dich" element={<CampaignManagerPage basePath="/admin/chien-dich" />} />
          <Route path="chien-dich/:id" element={<CampaignManagerDetailPage />} />
          <Route path="thong-bao" element={<NotificationManagerPage />} />
          <Route path="ho-tro" element={<SupportManagerPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}
