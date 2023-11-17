import axios from "axios";
import { Alert } from "../components/Alert";

const baseURL = import.meta.env.VITE_APP_API_URL || "https://jsonplaceholder.typicode.com";

const server = axios.create({
  baseURL,
});

const { interceptors: { response } } = server

response.use(
  (response) => {
    return response
  },

  (error) => {
    const { response, request } = error || {}
    if (response) {
      const { status, data } = response;
      const { message } = data || {}
      if (status === 401) {
        Alert.error('Unauthorized access');
      } else
        if (status === 404) {
          Alert.error('Resource not found');
        } else {
          Alert.error(message || 'An error occurred');
        }
    } else if (request) {
      Alert.error('No response received');
    } else {
      Alert.error('Error setting up the request');
    }
    return Promise.reject(error);
  }
)


export default server;