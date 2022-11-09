import axios from 'axios';
const ApiYoutube = axios.create({
    baseURL: import.meta.env.VITE_API_YOUTUBE,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Content-Language": "es",
        //"X-localization": "es"
        // "Accept-Language": "es"
    }
});
/* Api.interceptors.request.use((config) => {
      config.headers = {
          Authorization: `bearer ${sessionStorage.getItem('token')}`
      } 
    return config
}) */
export { ApiYoutube}

