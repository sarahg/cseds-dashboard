import React, { Component } from "react";
import { readRemoteFile } from "react-papaparse";

const csv = "http://localhost:3000/data/team-report-1589844860166.csv";

class TeamReport extends Component {
  constructor(props) {
    super(props)

    let now = new Date();
    this.reportDate = now.toLocaleString()

    this.state = {tickets: []}
  }

  componentDidMount() {
    const getData = () => {
      readRemoteFile(csv, {
        header: true,
        complete: results => {
          this.setState({tickets: results.data});
        }
      })
    };
    getData();
  }

  render() {
    let tickets = this.state.tickets;

    let report = ''
    if (process.browser) {
      report = buildTicketList(tickets);
    }
    
    return (
      <div>
        <h2>Active Tickets {this.reportDate}</h2>
        <div className="ticket-report">{report}</div>
      </div>
    );
  }
}

const buildTicketList = (data) => {
  if (data.length) {
    console.log(data)
    let name = "tiffany";
    let tickets = "tickets";
    return (
      <div>
        <div>{name}</div>
        <div>{tickets}</div>
      </div>
    );
  }
}

export default TeamReport;
