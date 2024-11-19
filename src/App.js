import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/KanbanBoard.jsx";
import Controls from "./components/Controls.jsx";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  // Fetch and process data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        const { tickets, users } = await res.json();
        const updatedTickets = processTickets(tickets, users);
        setTickets(updatedTickets);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      }
    };

    fetchData();
  }, []);

  // Map user details into tickets
  const processTickets = (tickets, users) => {
    const userInfo = users.reduce((acc, user) => {
      acc[user.id] = { name: user.name, available: user.available };
      return acc;
    }, {});

    return tickets.map((ticket) => ({
      ...ticket,
      user: userInfo[ticket.userId]?.name || "Unassigned",
      userAvailable: userInfo[ticket.userId]?.available ?? "Unknown",
    }));
  };

  // Group tickets by a specific attribute
  const groupTickets = (tickets, by) => {
    return tickets.reduce((result, ticket) => {
      const key = ticket[by] || "Unassigned";
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(ticket);
      return result;
    }, {});
  };

  // Sort tickets within each group
  const sortTickets = (grouped, by) => {
    const sorted = {};
    for (const group in grouped) {
      sorted[group] = [...grouped[group]].sort((a, b) => {
        if (by === "priority") return b.priority - a.priority;
        if (by === "title") return a.title.localeCompare(b.title);
        return 0;
      });
    }
    return sorted;
  };

  // Prepare tickets for rendering
  const grouped = groupTickets(tickets, grouping);
  const sorted = sortTickets(grouped, sorting);

  return (
    <div className="app">
      <Controls setGrouping={setGrouping} setSorting={setSorting} />
      <KanbanBoard groupedData={sorted} groupby={grouping} />
    </div>
  );
};

export default App;
