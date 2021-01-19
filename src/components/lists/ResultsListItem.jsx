import React from "react";
const ResultsListItem = ({match}) => {
  return <li>{match.team1.name} {match.score1} - {match.score2} {match.team2.name}</li>;
};

export default ResultsListItem;
