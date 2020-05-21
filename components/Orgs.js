import React from "react";
import Tickets from "./Tickets";

const Orgs = (props) => {
  let orgs = getOrgs(props.tickets);
  let orgList = [];

  for (const [index, orgName] of orgs.entries()) {

    // Get tickets for this org to pass off to Tickets.js
    let tickets = props.tickets.filter((obj) => {
      return obj.orgName === orgName;
    });

    orgList.push(
      <div>
        <h4 key={index}>{orgName}</h4>
        <Tickets key={index + '-org'} tickets={tickets} />
      </div>
    );
  }

  return (
    <div className="py-4">
      <h3 key={props.index}>{props.name}</h3>
      <div className="px-2">{orgList}</div>
    </div>
  );
};

/**
 * Get orgs for a given CSE.
 * @param {array} tickets
 */
const getOrgs = (tickets) => {
  let orgNames = new Set(
    tickets.map(function (el) {
      return el.orgName;
    })
  );
  return orgNames;
};

export default Orgs;
