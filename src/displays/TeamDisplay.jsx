import React from "react";

import FixturesList from "../components/lists/FixturesList";
import ResultsList from "../components/lists/ResultsList";
import PlayersList from "../components/lists/PlayersList";

const TeamDisplay = ({ team }) => {
  let results,
    fixtures = null;
  if (team.matches) {
    results = team.matches.filter((match) => match.Completed);
    fixtures = team.matches.filter((match) => !match.Completed);
  }
  return (
    <>
      <header>
        <h1>{team.name}</h1>
        <h3>{team.venue.name}</h3>
        {/* <h2>{team.venue}</h2> */}
      </header>
      <div id="content-wrapper">
        <PlayersList players={team.players} />
        <ResultsList header="Results" matches={results} />
        <FixturesList header="Fixtures" matches={fixtures} />
      </div>
    </>
  );
};

export default TeamDisplay;
