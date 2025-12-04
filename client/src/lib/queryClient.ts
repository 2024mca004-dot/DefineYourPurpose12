import { QueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

// Create axios instance with default config
export const api = axios.create({
  baseURL: "",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// API request helper using axios
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown
): Promise<{ data: unknown }> {
  try {
    const response = await api.request({
      method,
      url,
      data,
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      const status = error.response?.status || 500;
      const message = error.response?.data?.error || error.message;
      throw new ApiError(message, status);
    }
    throw error;
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: async ({ queryKey }) => {
        try {
          const response = await api.get(queryKey[0] as string);
          return response.data;
        } catch (error) {
          if (error instanceof AxiosError) {
            throw new Error(`HTTP error! status: ${error.response?.status}`);
          }
          throw error;
        }
      },
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
