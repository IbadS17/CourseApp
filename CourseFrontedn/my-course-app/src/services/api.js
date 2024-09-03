import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

export const createCourse = (course) =>
  axios.post(`${API_BASE_URL}/courses`, course);

export const getCourses = () => axios.get(`${API_BASE_URL}/courses`);

export const deleteCourse = (id) =>
  axios.delete(`${API_BASE_URL}/courses/${id}`);

// Add more API service calls here
