import Box from "./Box";
import "../sass/Summary.scss";

const Summary = () => {
  return (
    <section className="summary">
      <h2>Summary</h2>
      <div>
        <Box score={80} title="Reaction" />
        <Box score={92} title="Memory" />
        <Box score={61} title="Verbal" />
        <Box score={72} title="Visual" />
        <button className="btn">Continue</button>
      </div>
    </section>
  );
};

export default Summary;
