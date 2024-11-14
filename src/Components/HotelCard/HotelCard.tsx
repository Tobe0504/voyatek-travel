import { useEffect, useMemo, useState } from "react";
import hotel1 from "../../Assets/Images/hotel1.svg";
import hotel2 from "../../Assets/Images/hotel2.svg";
import Bed from "../../Assets/SVGs/Bed";
import Calemder from "../../Assets/SVGs/Calemder";
import Delete from "../../Assets/SVGs/Delete";
import Location from "../../Assets/SVGs/Location";
import RatingStar from "../../Assets/SVGs/RatingStar";
import {
  ScrollArrowLeft,
  ScrollArrowRight,
} from "../../Assets/SVGs/ScrollArrows";
import Button from "../Button/Button";

const HotelCard = () => {
  // States
  const [images, setImages] = useState([
    { image: hotel1, isActive: true },
    { image: hotel2, isActive: false },
  ]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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

  return (
    <div className="flex  bg-white rounded mb-6">
      <div className="flex gap-4 font-body p-6 basis-full">
        <div className="relative w-hotelImageDimensions h-hotelImageDimensions  rounded  shrink-0 select-none">
          <img
            src={activeImage?.image}
            alt="Riviera Resort, Lekki"
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
              <h4 className="text-black font-semibold text-xl">
                Riviera Resort, Lekki
              </h4>
              <p className="text-blue-300 font-medium text-base">
                18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
              </p>
              <p className="text-blue-300 font-medium text-base">
                {" "}
                Lekki Phase1
              </p>
            </div>

            <div className="text-right">
              <h4 className="text-blue-300 font-semibold text-2xl">
                &#8358;123,450.00
              </h4>
              <p className="text-blue-300 font-medium text-base">
                Total Price: NGN 560,000
              </p>
              <p className="text-blue-300 font-medium text-base">
                {" "}
                1 room x 10 nights incl. taxes
              </p>
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
              <Bed />
              <span>King size room</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-grey-100 font-medium text-lg border-y-2 border-grey-500 p-3">
            <div>
              <span>Facilities:</span>
            </div>

            <div className="ml-auto flex gap-3">
              <div className="flex gap-1.5 items-center">
                <Calemder fill="#475367" />
                <span>Check In: 20-04-2024</span>
              </div>

              <div className="flex gap-1.5 items-center">
                <Calemder fill="#475367" />
                <span>Check Out: 29-04-2024</span>
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center p-3">
            <Button type="null">Hotel details</Button>
            <Button type="null">Price details</Button>
            <Button type="null" className="ml-auto">
              Edit details
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-red-100 p-4">
        <Delete />
      </div>
    </div>
  );
};

export default HotelCard;
