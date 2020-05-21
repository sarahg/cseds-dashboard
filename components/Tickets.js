import React from "react";

const zendeskBaseURL = "https://pantheon.zendesk.com/agent/tickets";

const Tickets = (props) => {
  let tickets = props.tickets;
  let ticketList = [];

  for (const [index, ticket] of tickets.entries()) {
    ticketList.push(
      <li key={index + "-ticket"} className="list-disc ml-4">
        <a href={`${zendeskBaseURL}/${ticket.id}`}>{ticket.subject}</a>
      </li>
    );
  }

  return <ul>{ticketList}</ul>;
};

export default Tickets;
