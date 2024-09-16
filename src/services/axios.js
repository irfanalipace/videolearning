import axios from "axios";
import ToastComp from "../components/toast/ToastComp";

const client = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_URL,
});

export const request = async ({ ...options }, notify = true) => {
  const onSuccess = (response) => {
    if (notify) {
      if (response.status === 200) {
        if (options.method === "delete") {
          ToastComp({
            varient: "success",
            message: response.message
              ? response.message
              : "Removed Successfully",
          });
        } else if (options.method === "put") {
          if (notify) {
            ToastComp({
              varient: "success",
              message: response.message
                ? response.message
                : "Updated Successfully",
            });
          }
        } else if (options.method === "post") {
          if (notify) {
            ToastComp({
              varient: "info",
              message: response.message ? response.message : "Already Added",
            });
            return response;
          } else {
            ToastComp({
              varient: "info",
              message: response.message ? response.message : "Already Added",
            });
          }
          return response;
        } else if (options.method === "patch") {
          if (notify) {
            ToastComp({
              varient: "success",
              message: response.message
                ? response.message
                : "Updated Successfully",
            });
          }
        }
        return response;
      } else if (response.status === 201) {
        if (notify == true) {
          ToastComp({
            varient: "success",
            message: response.message ? response.message : "Added Successfully",
          });
          return response;
        } else {
          return response;
        }
      } else {
        ToastComp({
          varient: "error",
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
      "Error In Axios interceptor : ",
      error,
      error?.response?.data?.message
    );
    if (notify) {
      ToastComp({
        varient: "error",
        message:
          error?.response?.data?.message ||
          error?.message ||
          "Error ! Try Again Later",
      });
      return error;
    }
    return error;
  };

  if (options?.url?.includes("tennis")) {
    return client1(options).then(onSuccess).catch(onError);
  }

  return client(options).then(onSuccess).catch(onError);
};
