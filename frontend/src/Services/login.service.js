import http from "./http-common";

const login = data => {
    return http.post("/login", data);
  };


const LoginDataService = {
  login,
};

export default LoginDataService;