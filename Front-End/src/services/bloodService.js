import instance from "../api/axiosConfig";

// Lấy danh sách bloods
export const getBloods = async (params) => {
  const res = await instance.get("/api/bloods", { params });
  return res.data;
};

// Lấy detail 1 blood
export const getBloodDetail = async (id) => {
  const res = await instance.get(`/api/bloods/${id}`);
  return res.data;
};

// Thêm mới blood
export const createBlood = async (data) => {
  const res = await instance.post("/api/bloods", data);
  return res.data;
};

// Cập nhật blood
export const updateBlood = async (id, data) => {
  const res = await instance.put(`/api/bloods/${id}`, data);
  return res.data;
};

// Xóa blood
export const deleteBlood = async (id) => {
  const res = await instance.delete(`/api/bloods/${id}`);
  return res.data;
};

// Lấy danh sách yêu cầu hiến máu
export const getBloodRequests = async (params) => {
  const res = await instance.get("/api/admin/blood-donation-requests", {
    params,
  });
  return res.data;
};

// Lấy chi tiết yêu cầu hiến máu
export const getBloodRequestDetail = async (id) => {
  const res = await instance.get(`/api/admin/blood-donation-requests/${id}`);
  return res.data;
};

// Duyệt yêu cầu hiến máu
export const approveRequest = async (id) => {
  const res = await instance.post(
    `/api/admin/blood-donation-requests/${id}/approve`
  );
  return res.data;
};

// Từ chối yêu cầu hiến máu
export const rejectRequest = async (id, data) => {
  const res = await instance.post(
    `/api/admin/blood-donation-requests/${id}/reject`,
    data
  );
  return res.data;
};

// Hoàn thành yêu cầu hiến máu
export const completeRequest = async (id, data) => {
  const res = await instance.post(
    `/api/admin/blood-donation-requests/${id}/complete`,
    data
  );
  return res.data;
};

// Lấy các nhóm máu CÓ THỂ HIẾN cho nhóm máu này (nhận máu từ nhóm khác)
export const getCompatibleBloodsDonate = async (bloodId) => {
  const res = await instance.get(`/api/compatible-bloods`, {
    params: { bloodId },
  });
  return res.data;
};

// Lấy các nhóm máu CÓ THỂ NHẬN từ nhóm máu này (nhóm này hiến được cho ai)
export const getCompatibleBloodsReceive = async (bloodId) => {
  const res = await instance.get(`/api/compatible-bloods/receive`, {
    params: { bloodId },
  });
  return res.data;
};

// Tạo mới (thêm 1 cặp hiến-nhận)
export const addCompatibleBlood = async ({ nhomMauHien, nhomMauNhan }) => {
  const res = await instance.post(`/api/admin/compatible-bloods`, {
    nhomMauHien,
    nhomMauNhan,
  });
  return res.data;
};

export const changeCompatibleBloodStatus = async (id, trangthai) => {
  const res = await instance.post(
    `/api/admin/compatible-bloods/${id}/change-status`,
    { trangthai }
  );
  return res.data;
};
