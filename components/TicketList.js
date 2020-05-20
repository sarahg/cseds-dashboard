import React from "react"

const TicketList = (props) => {
    console.log(props.tickets)

    return <h3 key={props.index}>{props.name}</h3>
}

export default TicketList