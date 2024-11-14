import Button from "../Button/Button";

type EmptyTabContainerTypes = {
  ctaText: string;
  icon: React.ReactNode;
};

const EmptyTabContainer = ({ ctaText, icon }: EmptyTabContainerTypes) => {
  return (
    <div className="flex flex-col p-10 items-center justify- gap-4 bg-white rounded">
      <span>{icon}</span>
      <h4>No Request yet</h4>
      <Button>{ctaText}</Button>
    </div>
  );
};

export default EmptyTabContainer;
