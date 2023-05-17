/* eslint-disable react/prop-types */
import React from 'react';
import '../Atoms.css';

export default function Input({ type, value, placeholder, className }) {
  return (
    <div>
      <input
        className={className}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
}
