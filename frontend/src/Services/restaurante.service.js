import http from "./http-common";

const getAll = () => {
  return http.get("/restaurantes");
};

const get = id => {
  return http.get(`/restaurantes/${id}`);
};

function create(data) {
  return http.post("/restaurantes", data);
}

const update = (id, data) => {
  return http.put(`/restaurantes/${id}`, data);
};

const remove = id => {
  return http.delete(`/restaurantes/${id}`);
};

const removeAll = () => {
  return http.delete(`/restaurantes`);
};


const RestauranteDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};

export default RestauranteDataService;