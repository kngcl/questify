/* eslint-disable react/prop-types */
import React from 'react';

function Header({ title, paragraph }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{paragraph}</p>
    </div>
  );
}

export default Header;
