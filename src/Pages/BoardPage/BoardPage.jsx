/* eslint-disable */
import React, { useEffect, useState } from 'react';
import './BoardPage.css';
import Board from '../../Components/Components/Board/Board';
import Heading from '../../Components/Atoms/Headings/Heading';
import Editable from '../../Components/Editable/Editable';
import {
  deleteColumn,
  getColumns,
  getCurrentUsers,
  saveColumn,
} from '../../Api/auth';

function BoardPage() {
  const [boards, setBoards] = useState([]);
  const [user, setUser] = useState();
  const [target, setTarget] = useState({
    cid: '',
    bid: '',
  });
  useEffect(() => {
    getColumns().then(setBoards);
    getCurrentUsers().then(setUser);
  }, []);
  console.log(boards);
  console.log(user);

  const addCard = (title, bid) => {
    const card = {
      title,
      /*       lables: '',
      date: '',
      desc: '', */
    };
    const index = boards.findIndex((item) => item.id === bid);
    if (index < 0) return;

    let tempBoards = boards[index];
    /*     tempBoards.cards.push(card); */
    console.log(card);
    /*     setBoards(tempBoards); */
    saveColumn({ ...tempBoards, cards: [card] }).then(({ data }) => {
      setBoards((value) =>
        value.map((board, i) => {
          if (index === i) {
            /* return data; */
            return {
              ...data,
              cards: [...tempBoards.cards, card],
            };
          }

          return board;
        })
      );
      /* let temp = [...boards];
      temp[index].db_id = data.id;
      setBoards(temp); */
      console.log(boards);
    });
  };

  const removeCard = (cid, bid) => {
    const bIndex = boards.findIndex((item) => item.id === bid);
    if (bIndex < 0);

    const cIndex = boards[bIndex].cards.findIndex((item) => item.id === cid);
    if (cIndex < 0);

    const tempBoards = [...boards];
    tempBoards[bIndex].cards.splice(cIndex, 1);
    setBoards(tempBoards);
  };

  const addBoard = (title) => {
    setBoards([...boards, { db_id: null, title, cards: [] }]);
  };

  const removeBoard = (bid) => {
    const tempBoards = boards.filter((item) => {
      return item.id !== bid;
    });

    setBoards(tempBoards);
    console.log(bid, 'okay');

    deleteColumn(bid);
  };

  const handleDragEnd = (cid, bid) => {
    console.log(cid, bid);
    let s_bIndex;
    let s_cIndex;
    let t_bIndex; /* = ev.target.closest('.board').getAttribute('data-index'); */
    let t_cIndex;

    s_bIndex = boards.indexOf((item) => item.id === bid);
    if (s_bIndex < 0)
      s_cIndex = boards[s_bIndex].cards?.indexOf((item) => item.id === cid);
    if (s_cIndex < 0)
      t_bIndex = boards.indexOf((item) => item.id === target.bid);
    if (t_bIndex < 0)
      t_cIndex = boards[t_bIndex].cards?.findIndex(
        (item) => item.id === target.cid
      );
    if (t_cIndex < 0) return;
    const tempBoards = [...boards];
    const tempCard = tempBoards[s_bIndex].cards[s_cIndex];

    tempBoards[s_bIndex].cards.splice(s_cIndex, 1);
    tempBoards[t_bIndex]?.cards?.splice(t_cIndex, 0, tempCard);
    console.log('ffyfjfdtrduytfy', tempCard);
    setBoards(tempBoards);
  };

  const handleDragEnter = (cid, bid) => {
    setTarget({
      cid,
      bid,
    });
  };

  return (
    <div className="board-page">
      <div className="board-page-navbar">
        <Heading title="Questify" size="40px" color="White" />
      </div>
      <div className="board-page-outer">
        <div className="board-page-boards">
          {boards?.map((item, i) => (
            <Board
              key={i}
              board={item}
              removeBoard={removeBoard}
              addCard={addCard}
              removeCard={removeCard}
              handleDragEnd={handleDragEnd}
              handleDragEnter={handleDragEnter}
            />
          ))}
          <div className="board-page-column">
            <Editable
              displayClass="board-page-column-add"
              text="New Column"
              placeholder="Enter column title"
              onSubmit={(value) => {
                addBoard(value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoardPage;
