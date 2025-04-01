import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/",

  });

export const loginUser = async (email,password) => {
    return api.post("auth/login",{"email":email,"password":password});
}

export const getUserProfile = async (token) => {
    return api.get("user/get", {
      headers: { Authorization: `Bearer ${token}` },
    });
};

export const addUserProfile = async (name,email,senha) => {
    return api.post("user/add"), {
        name,email,senha
    }
}