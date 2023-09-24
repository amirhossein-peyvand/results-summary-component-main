import Circle from "./Circle";
import "../sass/Result.scss";

const Result = () => {
  return (
    <div className="result">
      <p>Your Result</p>
      <Circle />
      <div className="desc">
        <p>Great</p>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Result;
