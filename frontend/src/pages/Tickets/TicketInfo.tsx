import React from "react";

const TicketInfo = ({ ticket }) => {
  return (
    <div className="ticket-info">
      <h3>{ticket.title}</h3>
      <p>Iniciado em: {new Date(ticket.createdAt).toLocaleString()}</p>
      {ticket.closedAt && (
        <p>Finalizado em: {new Date(ticket.closedAt).toLocaleString()}</p>
      )}
    </div>
  );
};

export default TicketInfo;
