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
      <div key={index} className="py-1">
        <h4 key={index}>{orgName}</h4>
        <Tickets key={index + '-org'} tickets={tickets} />
      </div>
    );
  }

  return (
    <div className="py-4 px-4 bg-gray-200">
      <h3 key={props.index} className="text-lg font-medium py-2">{props.name}</h3>
      <div>{orgList}</div>
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
