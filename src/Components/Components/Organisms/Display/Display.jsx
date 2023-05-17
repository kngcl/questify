import React from 'react';
import LeftSide from '../../Molecules/LeftSide/LeftSide';
import RightSide from '../../Molecules/RightSide/RightSide';
import './Display.css';

export default function Display() {
  return (
    <div className="display">
      <LeftSide />
      <RightSide />
    </div>
  );
}
