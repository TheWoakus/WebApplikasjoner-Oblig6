import React, { useState } from 'react';

const Modal = ({ visible, handleClose, handleAdd }) => {
  const modalVisibility = visible
    ? 'modal display-block'
    : 'modal display-none';

  const maxCharCount = 50;
  const [charCount, setCharCount] = useState(maxCharCount);

  const updateCharCount = (e) => {
    setCharCount(maxCharCount - e.target.value.length);
  };

  const createCard = () => {
    const tittle = document.getElementById('mTitle');
    const descc = document.getElementById('mDescription');

    const obj = { title: tittle.value, desc: descc.value };
    handleAdd(obj);
    handleClose();
  };

  return (
    <div className={modalVisibility}>
      <div className="modal-box">
        <div className="modal-header">
          <h2>New Todo</h2>
          <span className="close" onClick={handleClose}>
            &times;
          </span>
        </div>

        <div className="modal-content">
          <label htmlFor="mTitle">Tittle</label>
          <br />
          <input type="text" id="mTitle" name="mTitle" />
          <br />

          <label htmlFor="mDescription">
            Description{' '}
            <span className="mLeft">
              (<span id="charLeft">{charCount}</span> characters left)
            </span>
          </label>
          <br />
          <input
            type="text"
            id="mDescription"
            name="mDescription"
            onChange={updateCharCount}
            maxLength={maxCharCount}
          />

          <button className="mButton" id="modalCreate" onClick={createCard}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
