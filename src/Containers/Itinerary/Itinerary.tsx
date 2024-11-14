import Layout from "../../Components/Layout/Layout";
import InfoActivities from "../InfoActivities/InfoActivities";
import InfoHero from "../InfoHero/InfoHero";
import InfoHotels from "../InfoHotels/InfoHotels";
import InfoItenaries from "../InfoItenaries/InfoItenaries";

const Itinerary = () => {
  return (
    <Layout>
      <InfoHero />
      <InfoItenaries />
      <InfoHotels />
      <InfoActivities isEditable={true} />
    </Layout>
  );
};

export default Itinerary;
