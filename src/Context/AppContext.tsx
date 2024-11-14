import { createContext, Dispatch, SetStateAction, useState } from "react";
import { activitiesType, notificationsType } from "../Utilities/types";

type AppContextValuesTypes = {
  notifications: notificationsType;
  setNotifications: Dispatch<SetStateAction<notificationsType>>;
  itinerary: activitiesType[];
  setItinerary: Dispatch<SetStateAction<activitiesType[]>>;
};

type AppContextProviderypes = {
  children: React.ReactNode;
};

export const AppContext = createContext({} as AppContextValuesTypes);

const AppContextProvider = ({ children }: AppContextProviderypes) => {
  // States
  const [notifications, setNotifications] = useState<notificationsType>([]);

  const [itinerary, setItinerary] = useState<activitiesType[]>([]);

  return (
    <AppContext.Provider
      value={{ notifications, setNotifications, setItinerary, itinerary }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
