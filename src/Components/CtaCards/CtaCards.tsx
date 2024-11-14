import Button from "../Button/Button";

type CtaCardsTypes = {
  title: string;
  caption: string;
  ctaText: string;
  action: () => void;
  type: string;
};

const CtaCards = ({ title, caption, ctaText, action, type }: CtaCardsTypes) => {
  return (
    <div
      className={`py-4 px-3.5 font-body max-w-ctaCardMax rounded ${
        type === "primary"
          ? "bg-blue-400 text-white"
          : type === "secondary"
          ? "bg-blue-200 text-blue-300"
          : "bg-blue-100 text-white"
      }`}
    >
      <h4 className="text-base font-semibold ">{title}</h4>
      <p className="text-sm mt-2">{caption}</p>

      <Button
        onClick={action}
        className="mt-9 w-full"
        type={
          type === "primary" || type === "secondary" ? "primary" : "secondary"
        }
      >
        {ctaText}
      </Button>
    </div>
  );
};

export default CtaCards;
