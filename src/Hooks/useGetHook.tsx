import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import useSWR, { SWRConfiguration } from "swr";
import { AppContext } from "../Context/AppContext";
import { setNotiticationFunction } from "../HelperFunctions/setNotificationFunction";

const useGetHook = (url: string | null, props?: SWRConfiguration) => {
  const { data, error, isLoading, isValidating } = useSWR(url, { ...props });

  // Context
  const { setNotifications } = useContext(AppContext);

  // Router
  const navigate = useNavigate();
  const location = useLocation();

  const errorMessage =
    error?.response?.data?.message ||
    error?.message ||
    "There was an issue making this request";

  // Effects
  useEffect(() => {
    if (error) {
      setNotiticationFunction(setNotifications, errorMessage);
    }

    if (errorMessage === "Expired Token" || errorMessage === "Unauthorized") {
      navigate("/sign-in", { state: location.pathname });
    }

    // eslint-disable-next-line
  }, [error, errorMessage]);

  return { data, error, isLoading, isValidating };
};

export default useGetHook;
