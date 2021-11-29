import React, { Component } from "react";
import axios from "axios";
import Collapsible from "./collapsible";

export default function TicketList() {
  const [ticketList, setTickeList] = React.useState([]);
  const [error, setError] = React.useState([]);
  const [page, setPage] = React.useState(0);
  React.useEffect(() => {
    console.log("@@@Testing...");
    axios
      .get("http://localhost:3000/tickets")

      .then((response) => {
        console.log("inside");
        console.log(response.data);
        setTickeList(response.data.tickets);
        setError(null);
        //console.log(response.data)
      })
      .catch((err) => {
        console.log("inside catch");
        setError(err);
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>List of Tickets</h1>

      <h4>Click on Tickets to view/hide details</h4>

      {error ? (
        <p> Currently, API is unavailable</p>
      ) : ticketList.length == 0 ? (
        <p>No Tickets to display</p>
      ) : (
        ticketList
          .slice(page * 25, Math.min(page * 25 + 25, ticketList.length))
          .map((ticket, i) => (
            <Collapsible ticket={ticket}>
              <p>Assignee_Id : {ticket.assignee_id}</p>
              <p>Subject : {ticket.subject}</p>
              <p>Description : {ticket.description}</p>
              <p>Tags : {ticket.tags}</p>
            </Collapsible>
          ))
      )}
      <button
        onClick={() => {
          setPage(page + 1);
        }}
        disabled={ticketList.length <= (page + 1) * 25}
      >
        Next
      </button>
    </div>
  );
}
