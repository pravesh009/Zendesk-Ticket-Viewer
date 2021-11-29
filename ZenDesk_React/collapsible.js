import React, { useState, useRef } from "react";
import "./collapsible.css";
export default function Collapsible(props) {
  const [isOpen, setISOpen] = useState(false);

  const parentRef = useRef();

  return (
    <div className="collapsible">
      <button className="toggle" onClick={() => setISOpen(!isOpen)}>
        #Ticket : {props.ticket.requester_id}
      </button>
      <div
        className="content-parent"
        ref={parentRef}
        style={
          isOpen
            ? {
                height: parentRef.current.scrollHeight + "px",
              }
            : {
                height: "0px",
              }
        }
      >
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
}
