import React from 'react';
import CompletedItem from './CompletedItem';
import Search from './Search';

const CompletedList = ({ completedCards, searchSettings }) => (
  <div className="todo-history">
    <div className="history-header">
      <h2>Completed todos</h2>
      <div className="history-checkbox">
        <Search searchSettings={searchSettings} />
      </div>
    </div>

    <table className="history-table" id="todoTable">
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Description</th>
        <th>Completed date</th>
      </tr>
      {completedCards.map((card) => (
        <CompletedItem key={card.key} title={card.title} desc={card.desc} />
      ))}
    </table>
  </div>
);

export default CompletedList;
