import axios from "axios";

const baseUrl = "https://sugarytestapi.azurewebsites.net";

const axiosSecure = axios.create({
  baseURL: baseUrl,
//   withCredentials: true,
});

let isRefreshing = false;

axiosSecure.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosSecure.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const refreshRes = await axios.post(
            `${baseUrl}/Account/RefreshToken`,
            {
              AccessToken: localStorage.getItem("accessToken"),
              RefreshToken: localStorage.getItem("refreshToken"),
            }
          );

          const { Token, RefreshToken } = refreshRes.data;
          localStorage.setItem("accessToken", Token);
          localStorage.setItem("refreshToken", RefreshToken);
          isRefreshing = false;

          originalRequest.headers.Authorization = `Bearer ${Token}`;
          return axiosSecure(originalRequest); // 
        } catch (err) {
          isRefreshing = false;
          localStorage.clear();
          window.location.href = "/login";
        }
      }
    }

    return Promise.reject(error); // ✅ FIX: moved inside
  }
);

export default function useAxiosSecure() {
  return axiosSecure;
}
