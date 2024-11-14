import { useNavigate } from "react-router-dom";
import homeHero from "../../Assets/Images/homeHero.svg";
import BackArrow from "../../Assets/SVGs/BackArrow";

const InfoHero = () => {
  //   Router
  const navigate = useNavigate();

  return (
    <section
      style={{ background: `url(${homeHero})` }}
      className="rounded h-homeHeroHeight p-6 mb-5"
    >
      <span
        className="p-4 inline-block rounded cursor-pointer bg-offWhite-100"
        onClick={() => {
          navigate(-1);
        }}
      >
        <BackArrow />
      </span>
    </section>
  );
};

export default InfoHero;
