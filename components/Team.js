import React, { Component } from "react";
import { readRemoteFile } from "react-papaparse";
import Orgs from "./Orgs";

const csv = "http://localhost:3000/data/team-report.csv";

class Team extends Component {
  constructor(props) {
    super(props);

    let now = new Date();
    const options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short"
    };
    this.reportDate = now.toLocaleString(undefined, options);

    this.state = { tickets: [] };
  }

  componentDidMount() {
    const getData = () => {
      readRemoteFile(csv, {
        header: true,
        complete: (results) => {
          this.setState({ tickets: results.data });
        },
      });
    };
    getData();
  }

  render() {
    const ticketLists = [];
    let names = getCSEs(this.state.tickets);

    // Build out a ticket list component for each CSE.
    for (const [index, name] of names.entries()) {
      
      // Tickets for this CSE.
      let tickets = this.state.tickets.filter(obj => {
        return obj.name === name
      })

      ticketLists.push(
        <Orgs key={index} name={name} tickets={tickets} />
      );
    }

    return (
      <div>
        <h2 className="text-xl">Active Tickets {this.reportDate}</h2>
        <div className="ticket-report lg:grid gap-4 grid-cols-3 sm:block">{ticketLists}</div>
      </div>
    );
  }
}

/**
 * Get unique CSE names from the ticket list.
 * @param {*} data 
 */
const getCSEs = (data) => {
  let names = [];
  if (data.length) {
    names = new Set(
      data.map(function (el) {
        return el.name;
      })
    );
  }
  return names;
};

export default Team;