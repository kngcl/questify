/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './Modal.css';
import './Transfer.css';
import Button from '../../../Atoms/Buttons/Button';

export default function ModalAddCurrency({ setAddcurrency }) {
  return (
    <form className="backshadow">
      <div className="custom_modal">
        <div className="delete_icon" onClick={() => setAddcurrency(false)}>
          x
        </div>
        <p className="currencyAdd">Edit Task</p>
        <div className="deposit">
          <div className="title_task">
            <label htmlFor="amount">Task Name: </label>
          </div>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="title_text"
            />
          </div>
        </div>
        <div className="addButton">
          <Button title="Confirm Edit" /* className="pool pool2" */ />
        </div>
      </div>
    </form>
  );
}
