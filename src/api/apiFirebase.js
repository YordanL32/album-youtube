import axios from 'axios';
const ApiFirebase = axios.create({
    baseURL: import.meta.env.VITE_API_FIREBASE,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Content-Language": "es",
    }
});
/* Api.interceptors.request.use((config) => {
      config.headers = {
          Authorization: `bearer ${sessionStorage.getItem('token')}`
      } 
    return config
}) */
export { ApiFirebase }

