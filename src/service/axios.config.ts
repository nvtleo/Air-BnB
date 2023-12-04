import axios from "axios"

const BASE_URL = "https://airbnbnew.cybersoft.edu.vn/api"


export const axiosWithoutAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000,
  });

