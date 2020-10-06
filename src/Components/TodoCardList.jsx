import React, { useEffect, useState } from 'react';
import TodoCard from './TodoCard';

const TodoCardList = ({ cardList, handleDelete, handleComplete }) => {
  const [show, setShow] = useState('display-none');

  useEffect(() => {
    if (cardList.length === 0) {
      setShow('display-block');
    }

    if (cardList.length === 1) {
      setShow('display-none');
    }
  });

  return (
    <div className="todo-cardlist">
      <h2 className={show}>Jippi! Ingen todos i dag</h2>
      {cardList.map((card) => (
        <TodoCard
          key={card.key}
          title={card.title}
          desc={card.desc}
          handleDelete={() => handleDelete(card.key)}
          handleComplete={() => handleComplete(card.key)}
        />
      ))}
    </div>
  );
};

export default TodoCardList;
