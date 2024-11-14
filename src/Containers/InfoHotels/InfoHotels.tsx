import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Hotels2 from "../../Assets/SVGs/Hotels2";
import Button from "../../Components/Button/Button";
import EmptyTabContainer from "../../Components/EmptyTabContainer/EmptyTabContainer";
import HotelCard from "../../Components/HotelCard/HotelCard";
import Loader from "../../Components/Loader/Loader";
import { scrollToTop } from "../../HelperFunctions/scrollToTop";
import { useHotels } from "../../Hooks/useGetInfo";

type InfoHotelsTypes = {
  isEditable?: boolean;
};

const InfoHotels = ({ isEditable }: InfoHotelsTypes) => {
  // Requests
  const { isLoading, data } = useHotels();

  // Router
  const navigate = useNavigate();

  // Memo
  const hotels = useMemo(() => data?.data?.data, [data]);

  return (
    <section className="mt-sectionMarginTop font-body">
      <div className="bg-blue-500 p-6 rounded">
        <div className="flex gap-2.5 items-center mb-8">
          <Hotels2 />
          <span className="font-semibold text-lg text-white">Hotels</span>

          {isEditable && (
            <Button
              className="ml-auto"
              type="secondary"
              onClick={() => {
                navigate("/");
                scrollToTop();
              }}
            >
              Add Hotels
            </Button>
          )}
        </div>

        {isLoading ? (
          <Loader />
        ) : hotels?.length > 0 ? (
          hotels?.map((data: any) => {
            return <HotelCard />;
          })
        ) : (
          <EmptyTabContainer
            icon={<Hotels2 fill="#344054" />}
            ctaText="Add Hotels"
          />
        )}
      </div>
    </section>
  );
};

export default InfoHotels;
