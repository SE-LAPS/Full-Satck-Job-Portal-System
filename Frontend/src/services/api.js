import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the JWT token in requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const login = (username, password) => api.post('/users/login', { username, password });
export const register = (userData) => api.post('/users/register', userData);

export const getAllJobs = () => api.get('/jobs');
export const getJobById = (id) => api.get(`/jobs/${id}`);
export const addJob = (jobData) => api.post('/jobs', jobData);

export const getJobApplicationsByJobSeeker = () => api.get('/job-applications/job-seeker');
export const applyForJob = (jobId) => api.post('/job-applications', { jobId });

export const getEmployeeByUserId = () => api.get('/employees/user');
export const updateEmployeeProfile = (profileData) => api.put('/employees/update', profileData);

export const getAllJobCategories = () => api.get('/job-categories');
export const addJobCategory = (categoryData) => api.post('/job-categories', categoryData);

export default api;