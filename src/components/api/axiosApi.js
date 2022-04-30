import React from 'react';
import Axios from 'axios';

const axiosApi = Axios.create({
  baseURL: "http://localhost:8000/api/router/",
  timeout: 3000,
})
export default axiosApi
