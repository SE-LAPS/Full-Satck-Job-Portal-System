import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (userData) => api.post('/auth/register', userData);
export const getJobs = () => api.get('/jobs');
export const applyForJob = (jobId) => api.post(`/jobs/${jobId}/apply`);
export const getPostedJobs = () => api.get('/employer/jobs');
export const postJob = (jobData) => api.post('/employer/jobs', jobData);
export const getAllUsers = () => api.get('/admin/users');
export const getAllJobs = () => api.get('/admin/jobs');

export default api;