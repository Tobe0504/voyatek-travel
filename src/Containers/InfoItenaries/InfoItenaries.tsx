import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Flights2 from "../../Assets/SVGs/Flights2";
import Button from "../../Components/Button/Button";
import EmptyTabContainer from "../../Components/EmptyTabContainer/EmptyTabContainer";
import FlightsCard from "../../Components/FlightsCard/FlightsCard";
import Loader from "../../Components/Loader/Loader";
import { scrollToTop } from "../../HelperFunctions/scrollToTop";
import { useFlights } from "../../Hooks/useGetInfo";
import { flightsType } from "../../Utilities/types";

type InfoItenariesType = {
  isEditable?: boolean;
};

const InfoItenaries = ({ isEditable }: InfoItenariesType) => {
  // Requests
  const { isLoading, data } = useFlights("2024-12-25");

  // Router
  const navigate = useNavigate();

  // Memo
  const flights: flightsType = useMemo(() => data?.data?.data, [data]);

  return (
    <section className="mt-sectionMarginTop font-body">
      <h3 className="text-blue-300 font-semibold text-xl">Trip itineraries</h3>
      <p className="text-grey-100 font-medium font-sm mb-6">
        Your trip itineraries are placed here
      </p>

      <div className="bg-grey-300 p-6 rounded">
        <div className="flex gap-2.5 items-center mb-8">
          <Flights2 />
          <span className="font-semibold text-lg text-blue-300">Flights</span>

          {isEditable && (
            <Button
              className="ml-auto"
              type="secondary"
              onClick={() => {
                navigate("/");
                scrollToTop();
              }}
            >
              Add Flights
            </Button>
          )}
        </div>

        {isLoading ? (
          <Loader />
        ) : flights?.aggregation?.airlines?.length > 0 ? (
          flights?.aggregation?.airlines?.map((data) => {
            return (
              <FlightsCard
                name={data?.name}
                iataCode={data?.iataCode}
                logoUrl={data?.logoUrl}
                price={data?.minPrice?.units}
              />
            );
          })
        ) : (
          <EmptyTabContainer icon={<Flights2 />} ctaText="Add Flight" />
        )}
      </div>
    </section>
  );
};

export default InfoItenaries;
