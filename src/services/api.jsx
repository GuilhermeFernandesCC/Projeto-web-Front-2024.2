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
    const response = await api.post("user/add", {
        name,email,senha
    })
    return response
}

export const updateUserProfile = async(token,name,email,senha) => {
    return await api.put("user/update",{
        name,email,senha
    })
}

export const getTablesAsMaster = async(token) => {
    const response = await api.get('user/getTablesAsMaster',{
        headers: { Authorization: `Bearer ${token}` },
    })
    return response
}

export const getTablesAsPlayer = async(token) => {
    const response = await api.get('user/getTablesAsPlayer',{
        headers: { Authorization: `Bearer ${token}` },
    })
    return response
}

export const createTable = async(token,name) => {
    const headers = { Authorization: `Bearer ${token}` }
    console.log(headers)
    const response = await api.post('table/add', { name }, { headers })
    console.log(response)
    return response;
}

export const getJogadores = async(token,tableId) => {
    const headers = { Authorization: `Bearer ${token}` }
    const response = await api.get('table/getPlayers/'+tableId,{ headers:headers })
    return response;
}

export const deleteTable = async(token,tableId) =>{
    const headers = { Authorization: `Bearer ${token}` }
    const response = await api.delete('table/delete/'+tableId,{ headers:headers })
    return response;
}

export const updateTable = async(token,tableId,name) =>{
    const headers = { Authorization: `Bearer ${token}` }
    const response = await api.put('table/update/'+tableId,{name},{ headers })
    console.log(response)
    return response;
}

export const addJogador = async(token,tableId,email) =>{
    const headers = { Authorization: `Bearer ${token}` }
    const response = await api.post('table/addPlayer/'+tableId,{email},{ headers:headers })
    return response;
}

export const removeJogador = async(token,tableId,email) =>{
    const headers = { Authorization: `Bearer ${token}` }
    const response = await api.delete(`table/removePlayer/${tableId}`, {
        headers,
        data: { email },
      });
    return response;
}

