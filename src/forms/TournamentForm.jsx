import React, { Component } from "react";

class TournamentForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      sport: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const tournament = {
      name: this.state.name,
      sport: this.state.sport,
    };
    this.props.handlePost(tournament);
  }

  render() {
    return (
      <form id="form-tournament-create" className="form-create" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Name"
        ></input>
        <input
          type="text"
          value={this.state.sport}
          onChange={this.handleChange}
          placeholder="Sport"
        ></input>
        <button className="button-submit">Submit</button>
      </form>
    );
  }
}

export default TournamentForm;