import axios from "axios";
import base_Url from "./base_Url";


export const Addstudentdetails = async (data) => {
  return await axios.post(`${base_Url}/students`, data);
}

export const getallstudentsdetailsAPI = async () => {
  return await axios.get(`${base_Url}/students`);
};


export const deleteStudentApi = async (id) => {
  return await axios.delete(`${base_Url}/students/${id}`);
};

export const getstudentApi = async (id) => {
  return await axios.get(`${base_Url}/students/${id}`);
};


export const updateToEditStudentApi = async (id, data) => {
  return await axios.put(`${base_Url}/students/${id}`, data);
};