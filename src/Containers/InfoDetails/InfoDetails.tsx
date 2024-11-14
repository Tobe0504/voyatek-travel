import Ellipsis from "../../Assets/SVGs/Ellipsis";
import ArrowRight from "../../Assets/SVGs/ArrowRight";
import Calemder from "../../Assets/SVGs/Calemder";
import User from "../../Assets/SVGs/User";
import Button from "../../Components/Button/Button";
import user2 from "../../Assets/Images/user2.svg";
import Settings from "../../Assets/SVGs/Settings";
import CtaCards from "../../Components/CtaCards/CtaCards";

const InfoDetails = () => {
  // Utils
  const options = [
    {
      title: "Activities",
      caption:
        "Build, personalize, and optimize your itineraries with our trip planner.",
      ctaText: "Add Activities",
      action: () => {},
      type: "primary",
    },

    {
      title: "Hotels",
      caption:
        "Build, personalize, and optimize your itineraries with our trip planner.",
      ctaText: "Add Hotels",
      action: () => {},
      type: "secondary",
    },

    {
      title: "Flights",
      caption:
        "Build, personalize, and optimize your itineraries with our trip planner.",
      ctaText: "Add Flights",
      action: () => {},
      type: "tertiary",
    },
  ];

  return (
    <section className="font-body">
      <div className="flex justify-between items-center gap-2 mb-1">
        <div className="py-2 px-4 bg-brown-100 flex items-center gap-2 text-brown-200 text-sm font-medium">
          <Calemder />
          <span>21 March 2024</span>
          <ArrowRight />
          <span>21 April 2024</span>
        </div>
        <Button type="tertiary" className="ml-auto px-16">
          <User />
        </Button>
        <Ellipsis />
      </div>

      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-black font-semibold text-2xl">
            Bahamas Family Trip
          </h2>
          <p className="text-grey-400 font-medium text-base">
            <span>New York,  United States of America </span>{" "}
            <span>Solo Trip</span>
          </p>
        </div>

        <img src={user2} alt=" User" className="ml-auto" />
        <span className="border-2 border-blue-200 rounded-full p-3">
          <Settings />
        </span>
      </div>

      <div className="flex gap-1 mt-5">
        {options.map((data) => {
          return <CtaCards {...data} />;
        })}
      </div>
    </section>
  );
};

export default InfoDetails;
