import http from "./http-common";

const getAll = () => {
  return http.get("/admin");
};

const get = id => {
  return http.get(`/admin/${id}`);
};

function create(data) {
  return http.post("/admin", data);
}

const update = (id, data) => {
  return http.put(`/admin/${id}`, data);
};

const remove = id => {
  return http.delete(`/admin/${id}`);
};

const removeAll = () => {
  return http.delete(`/admin`);
};


const AdminDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default AdminDataService;