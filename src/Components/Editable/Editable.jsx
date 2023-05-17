/* eslint-disable  */
import React, { useState } from 'react';
import { X } from 'react-feather';
import './Editable.css';

function Editable(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [inputValue, setInputValue] = useState(props.default || '');
  return (
    <div className="editable">
      {showEdit ? (
        <form
          className={`editable-edit ${props.editClass || ''} `}
          onSubmit={(e) => {
            e.preventDefault();
            if (props.onSubmit) props.onSubmit(inputValue);
            setShowEdit(false);
            setInputValue('');
          }}
        >
          <X onClick={() => setShowEdit(false)} />
          <input
            autoFocus
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            defaultValue={props.text}
            placeholder={props.placeholder || 'Enter item'}
          />
          <div className="editable-edit-footer">
            <button type="submit">{props.buttonText || 'Add'}</button>
          </div>
        </form>
      ) : (
        <p
          className={`editable-display ${props.displayClass || ''}`}
          onClick={() => setShowEdit(true)}
        >
          {props.text || 'Add item'}
        </p>
      )}
    </div>
  );
}

export default Editable;
