import Activities from "../../Assets/SVGs/Activities";
import ActivitiesCard from "../../Components/ActivitiesCard.tsx/ActivitiesCard";
import Button from "../../Components/Button/Button";
import EmptyTabContainer from "../../Components/EmptyTabContainer/EmptyTabContainer";
import { activitiesType } from "../../Utilities/types";

type InfoActivitiesTypes = {
  data?: activitiesType[];
  isEditable?: boolean;
};

const InfoActivities = ({ data, isEditable }: InfoActivitiesTypes) => {
  return (
    <section className="mt-sectionMarginTop font-body">
      <div className="bg-blue-600 p-6 rounded">
        <div className="flex gap-2.5 items-center mb-8">
          <Activities fill="#fff" />
          <span className="font-semibold text-lg text-white">Activities</span>

          <Button className="ml-auto" type="secondary">
            Add Activities
          </Button>
        </div>

        {!data || data?.length < 1 ? (
          <EmptyTabContainer icon={<Activities />} ctaText="Add Activity" />
        ) : (
          data?.map((data) => {
            return <ActivitiesCard {...data} isEditable={isEditable} />;
          })
        )}
      </div>
    </section>
  );
};

export default InfoActivities;
