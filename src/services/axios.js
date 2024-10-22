import axios from "axios";
import ToastComp from "../components/toast/ToastComp";

// Create an Axios instance
const client = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL,
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const request = async ({ ...options }, notify = true) => {
  const onSuccess = (response) => {
    if (notify) {
      if (response.status === 200) {
        if (options.method === "delete") {
          ToastComp({
            variant: "success",
            message: response.message
              ? response.message
              : "Removed Successfully",
          });
        } else if (options.method === "put") {
          ToastComp({
            variant: "success",
            message: response.message
              ? response.message
              : "Updated Successfully",
          });
        } else if (options.method === "post") {
          ToastComp({
            variant: "info",
            message: response.message ? response.message : "Already Added",
          });
          return response;
        } else if (options.method === "patch") {
          ToastComp({
            variant: "success",
            message: response.message
              ? response.message
              : "Updated Successfully",
          });
        }
        return response;
      } else if (response.status === 201) {
        ToastComp({
          variant: "success",
          message: response.message ? response.message : "Added Successfully",
        });
        return response;
      } else {
        ToastComp({
          variant: "error",
          message: response.message ? response.message : "Error",
        });
        return response;
      }
    } else {
      return response;
    }
  };

  const onError = (error) => {
    console.log(
      "Error In Axios interceptor: ",
      error,
      error?.response?.data?.message
    );
    if (notify) {
      ToastComp({
        variant: "error",
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Error! Try Again Later",
      });
    }
    return Promise.reject(error);
  };

  // Handle specific URL pattern (e.g., "tennis")
  if (options?.url?.includes("tennis")) {
    return client(options).then(onSuccess).catch(onError);
  }

  // Default request
  return client(options).then(onSuccess).catch(onError);
};
