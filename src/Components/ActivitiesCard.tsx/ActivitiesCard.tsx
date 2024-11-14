import { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import hotel1 from "../../Assets/Images/hotel1.svg";
import hotel2 from "../../Assets/Images/hotel2.svg";
import Add from "../../Assets/SVGs/Add";
import Delete from "../../Assets/SVGs/Delete";
import Location from "../../Assets/SVGs/Location";
import RatingStar from "../../Assets/SVGs/RatingStar";
import {
  ScrollArrowLeft,
  ScrollArrowRight,
} from "../../Assets/SVGs/ScrollArrows";
import Time from "../../Assets/SVGs/Time";
import { AppContext } from "../../Context/AppContext";
import { formatCurrency } from "../../HelperFunctions/formatAmount";
import { setNotiticationFunction } from "../../HelperFunctions/setNotificationFunction";
import Button from "../Button/Button";

type ActivitiesCardType = {
  name: string;
  address: string;
  location: string;
  price: number;
  date: string;
  duration: string;
  isEditable?: boolean;
};

const ActivitiesCard = ({
  name,
  address,
  location,
  price,
  date,
  duration,
  isEditable = false,
}: ActivitiesCardType) => {
  // States
  const [images, setImages] = useState([
    { image: hotel1, isActive: false },
    { image: hotel2, isActive: true },
  ]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  //   Context
  const { setItinerary, itinerary, setNotifications } = useContext(AppContext);

  //   Memo
  const activeImage = useMemo(
    () => images.find((data) => data.isActive),
    [images]
  );

  //   Utils
  const handleImageSetter = () => {
    setImages((prevState) => {
      const currentImages = prevState?.map((images, i) => {
        if (i === activeImageIndex) {
          return { ...images, isActive: true };
        } else {
          return { ...images, isActive: false };
        }
      });
      return currentImages;
    });
  };

  const scrollImage = (direction: string) => {
    if (direction === "left") {
      if (activeImageIndex !== 0) {
        setActiveImageIndex((prevState) => prevState - 1);
      }
    }

    if (direction === "right") {
      if (activeImageIndex < images.length - 1) {
        setActiveImageIndex((prevState) => prevState + 1);
      }
    }
  };

  //   Effects
  useEffect(() => {
    handleImageSetter();

    // eslint-disable-next-line
  }, [activeImageIndex]);

  const handleAddedActivity = () => {
    const data = { name, address, location, price, date, duration };

    const similarItem = itinerary.find((data) => data?.name === name);

    if (!similarItem) {
      setItinerary((prevState) => {
        return [...prevState, data];
      });

      setNotiticationFunction(
        setNotifications,
        "New itinerary added successfully",
        "success"
      );
    } else {
      setNotiticationFunction(
        setNotifications,
        "This item already exists in your itinerary"
      );
    }
  };

  return (
    <div className="flex  bg-white rounded mb-6">
      <div className="flex gap-4 font-body p-6 basis-full">
        <div className="relative w-hotelImageDimensions h-hotelImageDimensions  rounded  shrink-0 select-none">
          <img
            src={activeImage?.image}
            alt={name}
            className="w-full h-full rounded object-cover"
          />
          <div className="absolute top-0 bottom-0 m-auto flex items-center justify-between  left-3 right-3">
            <ScrollArrowLeft
              onClick={() => {
                scrollImage("left");
              }}
            />
            <ScrollArrowRight
              onClick={() => {
                scrollImage("right");
              }}
            />
          </div>
        </div>

        <div className="basis-full">
          <div className="flex justify-between ">
            <div>
              <h4 className="text-black font-semibold text-xl">{name}</h4>
              <p className="text-blue-300 font-medium text-base">{address}</p>
              <p className="text-blue-300 font-medium text-base"> {location}</p>
            </div>

            <div className="text-right">
              <h4 className="text-blue-300 font-semibold text-2xl">
                &#8358;{formatCurrency(price)}
              </h4>
              <p className="text-blue-300 font-medium text-base">{date}</p>
            </div>
          </div>

          <div className="mt-2 flex gap-3.5 items-center mb-5">
            <Button type="null" className="px-0 py-0">
              <Location />
              <span>Show in map</span>
            </Button>

            <div className="flex items-center gap-1 text-base text-grey-400 font-medium">
              <RatingStar />
              <span>8.5 (436)</span>
            </div>

            <div className="flex items-center gap-1 text-base text-grey-400 font-medium">
              <Time />
              <span>{duration} </span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-grey-100 font-medium text-lg border-y-2 border-grey-500 p-3">
            <div>
              <span>
                What's Included: Admission to the Empire State Building{" "}
                <Link to="/" className="text-blue-100">
                  See more
                </Link>
              </span>
            </div>

            <div className="ml-auto flex gap-3">
              <div>Day 1</div>
            </div>
          </div>
          <div className="flex gap-8 items-center p-3">
            <Button type="null">Activity details</Button>
            <Button type="null">Price details</Button>
            <Button type="null" className="ml-auto">
              Edit details
            </Button>
          </div>
        </div>
      </div>
      {!isEditable ? (
        <div className="flex items-center justify-center bg-blue-200 p-4">
          <Add onClick={handleAddedActivity} />
        </div>
      ) : (
        <div className="flex items-center justify-center bg-red-100 p-4">
          <Delete />
        </div>
      )}
    </div>
  );
};

export default ActivitiesCard;
