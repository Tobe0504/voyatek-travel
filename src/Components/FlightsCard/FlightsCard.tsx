import americanAirLines from "../../Assets/Images/americanAirLines.svg";
import Baggage from "../../Assets/SVGs/Baggage";
import Cutleries from "../../Assets/SVGs/Cutleries";
import Delete from "../../Assets/SVGs/Delete";
import Entertainment from "../../Assets/SVGs/Entertainment";
import FlightDrop from "../../Assets/SVGs/FlightDrop";
import FlightRise from "../../Assets/SVGs/FlightRise";
import Usb from "../../Assets/SVGs/Usb";
import { formatCurrency } from "../../HelperFunctions/formatAmount";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";

type FlightsCardType = {
  name: string;
  iataCode: string;
  logoUrl: string;
  price: number;
};

const FlightsCard = ({ name, iataCode, logoUrl, price }: FlightsCardType) => {
  return (
    <div className="flex mb-6 rounded ">
      <div className="bg-white py-2 basis-full ">
        <div className="flex items-center justify-between gap-20 p-6">
          <div className="flex gap-3">
            <img
              src={logoUrl || americanAirLines}
              alt="American Airlines"
              className="w-6 h-6 object-cover"
            />
            <div>
              <h4 className="font-semibold text-xl text-blue-300">{name}</h4>
              <p className="font-medium text-base text-grey-400">
                {iataCode} . <span>Economy </span>
              </p>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-between gap-10">
            <div>
              <h4 className="text-blue-300 font-semibold text-2xl">08:35</h4>
              <p className="text-grey-400 font-medium text-sm">Sun, 20 Aug</p>
            </div>

            <div className=" flex-1">
              <div className="flex justify-between gap-2 mb-3">
                <FlightRise />
                <span className="text-grey-400 font-medium text-base">
                  Duration: 1h 45m
                </span>
                <FlightDrop />
              </div>

              <ProgressBar progress={30} />

              <div className="flex justify-between gap-2 mt-3">
                <span className="text-blue-300 font-semibold text-base">
                  LOS
                </span>
                <span className="text-grey-400 font-medium text-base">
                  Direct
                </span>
                <span className="text-blue-300 font-semibold text-base">
                  SIN
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-blue-300 font-semibold text-2xl">09:55</h4>
              <p className="text-grey-400 font-medium text-sm">Sun, 20 Aug</p>
            </div>
          </div>

          <div className="font-semibold text-blue-300 text-3xl">
            <h3>&#8358; {formatCurrency(price)}</h3>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex items-center gap-4 p-6 border-y-2 border-grey-500  text-grey-100 font-medium text-lg flex-wrap">
          <h4>Facilities:</h4>
          <span className="flex items-center gap-2 ">
            <Baggage />
            <span>Baggage: 20kg, </span>
          </span>
          <span className="flex items-center gap-1">
            <span>Cabin Baggage: 8kg</span>
          </span>
          <span className="flex items-center gap-1">
            <Entertainment />
            <span>In flight entertainment</span>
          </span>
          <span className="flex items-center gap-1">
            <Entertainment />
            <span>In flight entertainment</span>
          </span>
          <span className="flex items-center gap-1">
            <Cutleries />
            <span>In flight meal</span>
          </span>
          <span className="flex items-center gap-1">
            <Usb />
            <span>USB Port</span>
          </span>
        </div>

        <div className="flex item-center gap-8 p-6">
          <Button type="null">Flight details</Button>
          <Button type="null">Price details</Button>
          <Button className="ml-auto" type="null">
            Edit details
          </Button>
        </div>
      </div>

      <div className="p-2.5 flex items-center justify-center bg-red-100">
        <Delete />
      </div>
    </div>
  );
};

export default FlightsCard;
