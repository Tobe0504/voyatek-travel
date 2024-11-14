import axios, { AxiosResponse } from "axios";
import { SWRConfig } from "swr";

type UseSWRConfigProps = {
  children: React.ReactNode;
};

type Fetcher = (
  ...args: Parameters<typeof axios.get>
) => Promise<AxiosResponse<any>>;

const fetcher: Fetcher = async (url, config) => {
  const headers = {
    ...config?.headers,
  };

  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
    headers: {
      ...config?.headers,
      "x-rapidapi-host": "booking-com15.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    },
  });

  return axiosInstance.get(url, { ...config, headers }).then((res) => res);
};

const UseSWRConfigProvider = ({ children }: UseSWRConfigProps) => {
  return <SWRConfig value={{ fetcher }}>{children}</SWRConfig>;
};

export default UseSWRConfigProvider;
