import React from "react";

const TeamPeopleList = ({ players }) => {
  if (!players) {
    return <section>No data available.</section>;
  }
  return <section>There are some players to list.</section>;
};

export default TeamPeopleList;
