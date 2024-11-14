import ErrorPage from "../Containers/ErrorPage/ErrorPage";
import Info from "../Containers/Info/Info";
import Itinerary from "../Containers/Itinerary/Itinerary";

export const routeComponents = [
  {
    title: "Home",
    route: "/",
    component: <Info />,
  },

  {
    title: "Itinerary",
    route: "/itinerary",
    component: <Itinerary />,
  },

  {
    title: "Error Page",
    route: "*",
    component: <ErrorPage />,
  },
];
