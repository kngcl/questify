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

export default function deleteTask({ setDeleteTask }) {
  return (
    <form className="backshadow">
      <div className="custom_modal">
        <div className="delete_icon" onClick={() => setDeleteTask(false)}>
          x
        </div>
        <p className="currencyAdd">Confirm</p>
        <div className="deposit">
          <div className="title_task title_delete">
            <p>Are you sure you want to delete??</p>
          </div>
        </div>
        <div className="btn_task">
          <div className="addButton">
            <Button title="Cancel" className="pool2" />
          </div>
          <div className="addButton">
            <button type="submit" className="pool pool2">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
