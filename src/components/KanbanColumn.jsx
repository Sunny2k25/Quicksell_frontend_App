import React from "react";
import TicketCard from "./TicketCard.jsx";
import menuIcon from "../assets/3 dot menu.svg";
import addIcon from "../assets/add.svg";

const KanbanColumn = ({ title, tickets, groupby }) => {
    const ticketCount = tickets.length;

    // Priority mapping for better readability
    const priorityLabels = {
        0: "No priority",
        1: "Low",
        2: "Medium",
        3: "High",
        4: "Urgent",
    };

    return (
        <div className="kanban-column">
            <header className="column-header" style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ddd",
            }}>
                <div className="column-title-container">
                    <h3>
                        {groupby === "priority" ? priorityLabels[title] : title}
                        <span className="ticket-count">({ticketCount})</span>
                    </h3>
                </div>
                <div className="column-actions">
                    <img src={addIcon} alt="Add Ticket" className="action-icon" />
                    <img src={menuIcon} alt="Menu" className="action-icon" />
                </div>
            </header>
            <div className="ticket-list">
                {tickets.map((ticket) => (
                    <TicketCard key={ticket.id} ticket={ticket} groupby={groupby} />
                ))}
            </div>
        </div>
    );
};

export default KanbanColumn;
