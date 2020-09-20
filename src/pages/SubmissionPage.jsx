import React, { Component } from "react";

import Request from "../helpers/request";

import PersonForm from "../forms/PersonForm";
import TeamForm from "../forms/TeamForm";
import TournamentForm from "../forms/TournamentForm";

class SubmissionPage extends Component {
  constructor() {
    super();
    this.state = {};
    this.handlePost = this.handlePost.bind(this);
  }

  handlePost(item) {
    const request = new Request();
    request
      .post("/api/" + this.props.match.params.collection, item)
      .then((res) => console.log(res));
    // .then(() => (window.location = "/people"));
  }

  render() {
    let collection = this.props.match.params.collection;
    let form;
    if (collection === "tournaments") {
      form = <TournamentForm handlePost={this.handlePost} />;
    }
    if (collection === "people") {
      form = <PersonForm handlePost={this.handlePost} />;
    }
    if (collection === "teams") {
      form = <TeamForm handlePost={this.handlePost} />;
    }
    return (
      <div id="submission-page" className="page">
        <section id="sidebar">
          Sidebar here
          {/* <DisplayList items={this.state.itemList} onClick={this.handleItemSelect} /> */}
          {/* <Link to={collection + "/new"}>Add new</Link> */}
        </section>
        <section id="main">
          <h2>Add new...</h2>
          {form}
        </section>
      </div>
    );
  }
}

export default SubmissionPage;
