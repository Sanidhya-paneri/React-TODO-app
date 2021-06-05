import React from "react";

export const Todotask = ({ todotasks, onDelete, strikeUnstrike }) => {
  return (
    <div id="list-wrapper">
      <div className="task-wrapper flex-wrapper">
        <div onClick={()=>strikeUnstrike(todotasks)} style={{ flex: 8 }}>
          {todotasks.completed === false ? (
            <span>{todotasks.title}</span>
          ) : (
            <strike>{todotasks.title}</strike>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <button
            className="btn btn-sm btn-outline-dark delete"
            onClick={() => onDelete(todotasks)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
