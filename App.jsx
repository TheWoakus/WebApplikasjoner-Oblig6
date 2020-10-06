import React, { useState } from 'react';
import Modal from './src/Components/Modal';
import Navbar from './src/Components/Navbar';
import TodoButton from './src/Components/TodoButton';
import TodoCardList from './src/Components/TodoCardList';
import CompletedList from './src/Components/CompletedList';

const initialTodoCards = [
  { key: 1, title: 'Hello', desc: 'World1' },
  { key: 2, title: 'Hello', desc: 'World2' },
];

const App = () => {
  let beginningKey = 3;

  const [modalVisible, setModalVisible] = useState(false);

  const [todoCards, setTodoCards] = useState(initialTodoCards);

  const [completedCards, setCompletedCards] = useState([]);

  const [filteredList, setFilteredList] = useState(completedCards);

  function addCard({ title, desc }) {
    const tempList = todoCards.concat({
      key: beginningKey,
      title,
      desc,
    });

    beginningKey += 1;
    setTodoCards(tempList);
  }

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  function deleteCard(key) {
    const tempList = todoCards.filter((item) => item.key !== key);

    setTodoCards(tempList);
  }

  function completeCard(key) {
    const tempItem = todoCards.filter((item) => item.key === key);

    deleteCard(key);
    const tempList = completedCards.concat(tempItem[0]);
    setCompletedCards(tempList);
    setFilteredList(tempList);
  }

  function setFilter(filter) {
    const tempList = completedCards.filter((item) =>
      item.title.includes(filter)
    );

    setFilteredList(tempList);
  }

  return (
    <>
      <Navbar />
      <Modal
        visible={modalVisible}
        handleClose={toggleModal}
        handleAdd={addCard}
      />
      <TodoButton buttonFunction={toggleModal} />
      <TodoCardList
        cardList={todoCards}
        handleDelete={deleteCard}
        handleComplete={completeCard}
      />
      <CompletedList completedCards={filteredList} searchSettings={setFilter} />
    </>
  );
};

export default App;
