import http from "./http-common";

const getAll = () => {
  return http.get("/mesas");
};

const get = id => {
  return http.get(`/mesas/${id}`);
};

const create = data => {
  return http.post("/mesas", data);
};

const update = (id, data) => {
  return http.put(`/mesas/${id}`, data);
};

const remove = id => {
  return http.delete(`/mesas/${id}`);
};

const removeAll = () => {
  return http.delete(`/mesas`);
};


const MesaDataService = {
  getAll,
  get,  
  create,
  update,
  remove,
  removeAll
};

export default MesaDataService;