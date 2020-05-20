import React, { Component } from "react";
import { readRemoteFile } from "react-papaparse";
import TicketList from "./TicketList";

const csv = "http://localhost:3000/data/team-report-1589844860166.csv";

class TeamReport extends Component {
  constructor(props) {
    super(props);

    let now = new Date();
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: true,
      hour: "numeric",
      minute: "numeric",
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
        return obj.Name === name
      })

      ticketLists.push(
        <TicketList key={index} name={name} tickets={tickets} />
      );
    }

    return (
      <div>
        <h2>Active Tickets {this.reportDate}</h2>
        <div className="ticket-report">{ticketLists}</div>
      </div>
    );
  }
}

const getCSEs = (data) => {
  let names = [];
  if (data.length) {
    names = new Set(
      data.map(function (el) {
        return el.Name;
      })
    );
  }
  return names;
};

export default TeamReport;
