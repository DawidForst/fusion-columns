import css from "./Results.module.css";

const Results = ({ results = '0' }) => (
  <section className={css.Results__Container}>
    <h2>Results:</h2>
    <div className={css.Results__Grid}>
      <div className={css.Results__Row}>
        <p>PzU1: {results.PzU1}</p>
        <p>MxU1: {results.MxU1}</p>
        <p>MyU1: {results.MyU1}</p>
      </div>
      <div className={css.Results__Row}>
        <p>PzU2: {results.PzU2}</p>
        <p>MxU2: {results.MxU2}</p>
        <p>MyU2: {results.MyU2}</p>
      </div>
      <div className={css.Results__Row}>
        <p>PzU3: {results.PzU3}</p>
        <p>MxU3: {results.MxU3}</p>
        <p>MyU3: {results.MyU3}</p>
      </div>
    </div>
  </section>
);

export default Results;