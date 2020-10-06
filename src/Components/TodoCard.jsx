import React from 'react';

const TodoCard = ({ title, desc, handleDelete, handleComplete }) => (
  <div className="todo-card">
    <h2>{title}</h2>
    <p>{desc}</p>
    <div className="todo-button-box">
      <button className="todo-card-delete" onClick={handleDelete}>
        Delete
      </button>
      <button className="todo-card-complete" onClick={handleComplete}>
        Complete
      </button>
    </div>
  </div>
);

export default TodoCard;
