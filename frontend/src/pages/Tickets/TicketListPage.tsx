import React, { useEffect, useState } from "react";
import api from "../../services/api"; // Verifique o caminho correto para o serviço de API
import TicketInfo from "./TicketInfo";

const TicketListPage = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const response = await api.get("/tickets");
      setTickets(response.data.tickets);
    };

    fetchTickets();
  }, []);

  return (
    <div>
      <h2>Lista de Tickets</h2>
      {tickets.map(ticket => (
        <TicketInfo key={ticket.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketListPage;
