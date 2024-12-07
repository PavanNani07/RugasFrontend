import axios from 'axios';

const API_URL = 'http://localhost:5000';
const api = axios.create({ baseURL: API_URL });

export const setAuthToken = (token) => {
  if (token) api.defaults.headers['Authorization'] = `Bearer ${token}`;
  else delete api.defaults.headers['Authorization'];
};

// Authentication
export const loginUser = (credentials) => api.post('/login', credentials);


const getAuthToken = () => localStorage.getItem('token');

// Set token in headers for every request
api.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    if (token) {
      // If token exists, set it in the headers
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Laptop Management
export const addLaptop = (data) => api.post('/laptops', data);
export const getLaptops = () => api.get('/laptops');
export const updateLaptop = (id, data) => api.put(`/laptops/${id}`, data);
export const deleteLaptop = (id) => api.delete(`/laptops/${id}`);
export const reportIssue = (data) => api.post('/issues', data);

// Employee Management
export const assignLaptopToEmployee = (data) => api.post('/assignments', data);

// Export default API module
const apiModule = {
  setAuthToken,
  loginUser,
  addLaptop,
  getLaptops,
  updateLaptop,
  deleteLaptop,
  assignLaptopToEmployee,
};

export default apiModule;
