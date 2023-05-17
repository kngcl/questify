/* eslint-disable  */
import React, { useEffect, useState } from 'react';
import { MoreHorizontal } from 'react-feather';
import './Board.css';
import Editable from '../../Editable/Editable';
import Dropdown from '../../Dropdown/Dropdown';
import Card from '../Card/Card';

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [tel, setSet] = useState();

  useEffect(() => {
    setSet(props.board?.cards);
    console.log(tel);
  }, []);

  return (
    <div className="board" >
      <div className="board-top">
        <p className="board-top-title">
          {props.board?.title} <span>{` ${props.board?.cards.length}`}</span>
        </p>
        <div
          className="board-top-more"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <div className="board-dropdown">
                <p onClick={() => props.removeBoard(props.board?.id)}>
                  Delete column
                </p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board-cards">
        {props.board?.cards?.map((item,index) => (
          <Card
            key={index}
            card={item}
            removeCard={props.removeCard}
            boardId={props.board?.id}
            handleDragEnd={props.handleDragEnd}
            handleDragEnter={props.handleDragEnter}
          />
        ))}
        <Editable
          displayClass="board-cards-add"
          text="Add Card"
          placeholder="Enter Card Title"
          onSubmit={(value) => props.addCard(value, props.board?.id)}
        />
      </div>
    </div>
  );
}

export default Board;
