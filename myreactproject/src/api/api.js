import axios from 'axios';

const ApiFormData = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const Api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json"
  }
});

const config = {
  headers: {
    'authorization': `Bearer ${localStorage.getItem("token")}`
  }
}


export const createUserApi = (data) => ApiFormData.post("/api/pract/createUsers", data);
export const  loginUserApi= (data)=>Api.post("/api/pract/login", data)


export const getUser= ()=>Api.get("/api/pract/getallusers",config)
export const getUserById= (id)=>Api.get(`/api/pract/getusersbyid/${id}`,config)
export const updateUserById= (id,data)=>ApiFormData.put(`/api/pract/updateUsers/${id}`,data,config)
export const deleteUserById= (id)=>Api.delete(`/api/pract/deleteUsers/${id}`,config)
