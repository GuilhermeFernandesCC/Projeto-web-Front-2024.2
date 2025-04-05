import axios from "axios"
import { data } from "react-router-dom";

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
    const response =  api.get('user/getTablesAsMaster',{
        headers: { Authorization: `Bearer ${token}` },
    })
    return response
}

export const getTablesAsPlayer = async(token) => {
    const response = api.get('user/getTablesAsPlayer',{
        headers: { Authorization: `Bearer ${token}` },
    })
    return response
}

export const createTable = async(token,name) => {
    const headers = { Authorization: `Bearer ${token}` }
    console.log(headers)
    const response = api.post('table/add', { name }, { headers })
    console.log(response)
    return response;
}

export const getJogadores = async(token,tableId) => {
    const headers = { Authorization: `Bearer ${token}` }
    const response = api.get('table/getPlayers/'+tableId,{ headers:headers })
    return response;
}