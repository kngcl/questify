/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Type } from 'react-feather';

import Editable from '../../../Editable/Editable';
import './Cardinfo.css';
import Modals from '../../Modal/Modal';

function Cardinfo(props) {
  const { title /* tasks */ } = props.card;

  return (
    <Modals onClose={() => props.onClose()}>
      <div className="cardinfo">
        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Type />
            Title
          </div>
          <div className="cardinfo-box-body">
            <Editable
              text={title}
              default={title}
              placeholder="Enter title"
              buttonText="Set Title"
            />
          </div>
        </div>

        {/* <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <List />
            Description
          </div>
          <div className="cardinfo-box-body">
            <Editable
              text={desc}
              default={desc}
              placeholder="Enter Description"
              buttonText="Set Description"
            />
          </div>
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <Calendar />
            Date
          </div>
          <input
            type="date"
            defaultValue={
              date ? new Date(date).toISOString().substring(0, 10) : ''
            }
          />
        </div>

        <div className="cardinfo-box">
          <div className="cardinfo-box-title">
            <UserPlus />
            Assignees
          </div>
          <div className="cardinfo-box-body">
            <Editable
              text="Enter assigness"
              placeholder="Enter assignees"
              buttonText="Add assignees"
            />
          </div>
        </div> */}
      </div>
    </Modals>
  );
}

export default Cardinfo;
