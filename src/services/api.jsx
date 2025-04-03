import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000/",

  });

export const loginUser = async (email,password) => {
    return api.post("auth/login",{"email":email,"password":password});
}

export const getUserProfile = async (token) => {
    return api.get("user/getPerfil", {
      headers: { Authorization: `Bearer ${token}` },
    });
};

export const addUserProfile = async (name,email,senha) => {
    return api.post("user/add", {
        name,email,senha
    })
}

export const updateUserProfile = async(token,name,email,senha) => {
    return api.put("user/update",{
        name,email,senha
    })
}

export const getTablesAsMaster = async(token) => {
    const response =  api.get('/user/getTablesAsMaster',{
        headers: { Authorization: `Bearer ${token}` },
    })
    return response
}

export const getTablesAsPlayer = async(token) => {
    const responde = api.get('/user/getTablesAsPlayer',{
        headers: { Authorization: `Bearer ${token}` },
    })
    return responde
}