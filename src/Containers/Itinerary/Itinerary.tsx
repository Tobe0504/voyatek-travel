import { useContext, useMemo } from "react";
import Layout from "../../Components/Layout/Layout";
import { AppContext } from "../../Context/AppContext";
import InfoActivities from "../InfoActivities/InfoActivities";
import InfoHero from "../InfoHero/InfoHero";
import InfoHotels from "../InfoHotels/InfoHotels";
import InfoItenaries from "../InfoItenaries/InfoItenaries";

const Itinerary = () => {
  // Context
  const { itinerary } = useContext(AppContext);

  const activities = useMemo(
    () => itinerary.filter((data) => data.type === "activity"),
    [itinerary]
  );

  return (
    <Layout>
      <InfoHero />
      <InfoActivities isEditable data={activities} />
      <InfoItenaries isEditable />
      <InfoHotels isEditable />
    </Layout>
  );
};

export default Itinerary;
