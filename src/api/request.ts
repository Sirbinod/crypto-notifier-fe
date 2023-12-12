/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { API_BASE_URL, getAPIConfig } from ".";

export const fetchData = async (url: string) => {
  const config = getAPIConfig();
  const response = await axios.get(`${API_BASE_URL}/${url}`, config);

  return response;
};

export const createData = async (url: string, data: any) => {
  try {
    const config = getAPIConfig();

    const response = await axios.post(`${API_BASE_URL}/${url}`, data, config);

    return response.data;
  } catch (err) {
    return err;
  }
};

export const updateData = async (url: string, id: string, data: any) => {
  const config = getAPIConfig();

  const response = await axios.put(
    `${API_BASE_URL}/${url}/${id}`,
    data,
    config
  );

  return response.data;
};


export const deleteData = async (url: string, id?: string) => {
  const config = getAPIConfig();

  const response = await axios.delete(`${API_BASE_URL}/${url}/${id}`, config);

  return response.data;
};
