import React from "react";

const TicketCard = ({ ticket, groupby }) => {
  const MAX_TITLE_LENGTH = 50;

  return (
    <div className="ticket-card">
      {/* Ticket ID and optional user avatar */}
      <div className="ticket-id">
        {ticket.id}
        {groupby !== "user" && (
          <div style={{ position: "relative" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXya5dYpQIt18Xt5urcD3rbGfm777xVoI8Q&s"
              alt="User Avatar"
              style={{
                height: "20px",
                width: "20px",
                borderRadius: "50%",
              }}
            />
          </div>
        )}
      </div>

      {/* Ticket Title */}
      <h4 className="ticket-title">
        {ticket.title.length > MAX_TITLE_LENGTH
          ? ticket.title.substring(0, MAX_TITLE_LENGTH) + "..."
          : ticket.title}
      </h4>

      {/* Ticket Tag */}
      <div
        className="ticket-tag-container"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          className="ticket-tag"
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "5px",
            padding: "2px",
            fontSize: "12px",
            boxShadow: "0px 0px 0.6px 0px #000000",
          }}
        >
          <div
            className="tag-dot"
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: "#555",
              borderRadius: "50%",
              marginRight: "5px",
            }}
          />
          {ticket.tag}
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
