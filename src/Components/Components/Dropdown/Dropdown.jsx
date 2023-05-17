/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useRef } from 'react';

function Dropdown(props) {
  const dropdownRef = useRef();

  const handleClick = (e) => {
    if (dropdownRef && !dropdownRef?.current.contains(e?.target)) {
      if (props.onClose) props.onClose();
    }
  };
  useEffect(() => {
    document.getElementById('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
  return (
    <div
      ref={dropdownRef}
      className="dropdown"
      style={{
        position: 'absolute',
        top: '100%',
        right: '0',
      }}
    >
      {props.children}
    </div>
  );
}

export default Dropdown;
