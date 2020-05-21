import React from "react";

const TicketList = (props) => {
  let orgs = getOrgs(props.tickets);

  if (props.name == "Brenda Boggs") {
    console.log(props.tickets);
    console.log(orgs);
  }

  // List orgs
  let tickets = []
  for (const [index, orgName] of orgs.entries()) {
    tickets.push(<h4 key={index}>{orgName}</h4>)
  }

  // List tickets per org

  return (
    <div className="py-4">
      <h3 key={props.index}>{props.name}</h3>
      <div className="px-2">{tickets}</div>
    </div>
  );

};

const getOrgs = (tickets) => {
  let orgNames = new Set(
    tickets.map(function (el) {
      return el.orgName;
    })
  );
  return orgNames;
};

export default TicketList;
