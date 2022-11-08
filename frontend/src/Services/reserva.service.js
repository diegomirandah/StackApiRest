import http from "./http-common";

const getAll = () => {
  return http.get("/reservas");
};

const get = id => {
  return http.get(`/reservas/${id}`);
};

const create = data => {
  return http.post("/reservas", data);
};

const update = (id, data) => {
  return http.put(`/reservas/${id}`, data);
};

const remove = id => {
  return http.delete(`/reservas/${id}`);
};

const removeAll = () => {
  return http.delete(`/reservas`);
};


const ReservaDataService = {
  getAll,
  get,  
  create,
  update,
  remove,
  removeAll
};

export default ReservaDataService;