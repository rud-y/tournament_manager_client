import React from "react";
import ResultsListItem from "./ResultsListItem";

const ResultsList = () => {
  return (
    <section className="component-display">
      <ul>
        <h3>Results</h3>
        <ResultsListItem />
      </ul>
    </section>
  );
};

export default ResultsList;