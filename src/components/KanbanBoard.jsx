import React from "react";
import KanbanColumn from "./KanbanColumn.jsx";

const KanbanBoard = ({ groupedData, groupby }) => {
    return (
        <div className="kanban-board" style={{
            paddingLeft: "40px",
        }}>
            {Object.keys(groupedData).map((group) => (
                <KanbanColumn key={group} title={group} tickets={groupedData[group]} groupby={groupby} />
            ))}
        </div>
    );
};

export default KanbanBoard;
