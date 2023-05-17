/* eslint-disable  */
import React, { useState } from 'react';
import './Card.css';
import { MoreHorizontal } from 'react-feather';
import Dropdown from '../Dropdown/Dropdown';
import Cardinfo from './Cardinfo/Cardinfo';
import geek from './geekman.png.png';

function Card(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <Cardinfo card={props.card} onClose={() => setShowModal(false)} />
      )}
      <div
        className="card"
        draggable
        onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
        onDragEnter={() => props.handleDragEnter(props.card?.id, props.boardId)}
        onClick={() => setShowModal(true)}
      >
        <div className="card-top">
          <div className="card-top-avatar">
            <img alt="avatar" src={geek} />
          </div>
          <div
            className="card-top-more"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <MoreHorizontal />
            {showDropdown && (
              <Dropdown onClose={() => setShowDropdown(false)}>
                <div className="card-dropdown">
                  <p
                    onClick={() =>
                      props.removeCard(props.card?.id, props.boardId)
                    }
                  >
                    Delete task
                  </p>
                </div>
              </Dropdown>
            )}
          </div>
        </div>
        <div className="card-title">{props.card?.title}</div>
      </div>
    </>
  );
}

export default Card;
