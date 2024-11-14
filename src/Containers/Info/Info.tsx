import Layout from "../../Components/Layout/Layout";
import { activities } from "../../Utilities/demoData";
import InfoActivities from "../InfoActivities/InfoActivities";
import InfoDetails from "../InfoDetails/InfoDetails";
import InfoHero from "../InfoHero/InfoHero";
import InfoHotels from "../InfoHotels/InfoHotels";
import InfoItenaries from "../InfoItenaries/InfoItenaries";

const Info = () => {
  return (
    <Layout>
      <InfoHero />
      <InfoDetails />
      <InfoActivities data={activities} />
      <InfoItenaries />
      <InfoHotels />
    </Layout>
  );
};

export default Info;
