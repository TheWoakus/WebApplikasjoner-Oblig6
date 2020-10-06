import React from 'react';

const TodoButton = ({ buttonFunction }) => (
  <button className="todo-button" onClick={buttonFunction}>
    + Todo
  </button>
);

export default TodoButton;
