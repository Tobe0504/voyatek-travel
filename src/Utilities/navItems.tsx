import Activities from "../Assets/SVGs/Activities";
import Carts from "../Assets/SVGs/Carts";
import Commision from "../Assets/SVGs/Commision";
import Create from "../Assets/SVGs/Create";
import Dashboard from "../Assets/SVGs/Dashboard";
import Flights from "../Assets/SVGs/Flights";
import Home from "../Assets/SVGs/Home";
import Hotels from "../Assets/SVGs/Hotels";
import Immigration from "../Assets/SVGs/Immigration";
import Medical from "../Assets/SVGs/Medical";
import Notification from "../Assets/SVGs/Notification";
import Plan from "../Assets/SVGs/Plan";
import Study from "../Assets/SVGs/Study";
import VacationPackages from "../Assets/SVGs/VacationPackages";
import Visa from "../Assets/SVGs/Visa";
import Wallet from "../Assets/SVGs/Wallet";

export const navItems = [
  {
    title: "Home",
    icon: <Home />,
    route: "/",
  },

  {
    title: "Dashboard",
    icon: <Dashboard />,
    route: "/dashboard",
  },
  {
    title: "Wallet",
    icon: <Wallet />,
    route: "/wallet",
  },
  {
    title: "Plan a trip",
    icon: <Plan />,
    route: "/plan-a-trip",
  },
  {
    title: "Commission for life",
    icon: <Commision />,
    route: "/commission-for-life",
  },
  {
    title: "Notification",
    icon: <Notification />,
    route: "/notification",
  },
  {
    title: "Carts",
    icon: <Carts />,
    route: "/carts",
  },
  {
    title: "Create",
    icon: <Create />,
    route: "/create",
  },
];

export const sideNavItems = [
  {
    title: "Itinerary ",
    icon: <VacationPackages />,
    route: "/itinerary",
  },
  {
    title: "Activities",
    icon: <Activities />,
    route: "/activities",
  },
  {
    title: "Hotels",
    icon: <Hotels />,
    route: "/hotels",
  },
  {
    title: "Flights",
    icon: <Flights />,
    route: "/flights",
  },

  {
    title: "Study",
    icon: <Study />,
    route: "/study",
  },
  {
    title: "Visa",
    icon: <Visa />,
    route: "/visa",
  },
  {
    title: "Immigration",
    icon: <Immigration />,
    route: "/immigration",
  },
  {
    title: "Medical",
    icon: <Medical />,
    route: "/medical",
  },
];
