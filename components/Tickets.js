import React from "react";

const zendeskBaseURL = "https://pantheon.zendesk.com/agent/tickets";

const Tickets = (props) => {
  let tickets = props.tickets;
  let ticketList = [];

  for (const [index, ticket] of tickets.entries()) {
    let icon = "";
    if (ticket.escalated == "true") {
      icon = "🚨";
    }

    ticketList.push(
      <li key={index + "-ticket"} className="list-disc ml-4">
        <span>{icon}</span>
        <a href={`${zendeskBaseURL}/${ticket.id}`}>{ticket.subject}</a>
        <span className="ml-1 text-sm text-gray-700">[{ticket.status}]</span>
      </li>
    );
  }

  return <ul>{ticketList}</ul>;
};

export default Tickets;
