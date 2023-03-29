import { Student } from "../models/student";
import { listParams, ListResponse } from "./../models/common";
import axiosClient from "./axiosClient";

const cityApi = {
  getAll(params: listParams): Promise<ListResponse<Student>> {
    const url = "/students";
    return axiosClient.get(url, { params });
  },
  getById(id: string): Promise<Student> {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },
  add(data: Student): Promise<Student> {
    const url = "/students";
    return axiosClient.post(url, data);
  },
  update(data: Student): Promise<Student> {
    const url = "/students";
    return axiosClient.patch(url, data);
  },
  delete(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};

export default cityApi;
