import Result from "./Result";
import Summary from "./Summary";
import "../sass/MainCard.scss";

const Card = () => {
  return (
    <div className="mainCard">
      <Result />
      <Summary />
    </div>
  );
};

export default Card;
