/* eslint-disable react/prop-types */
import React from 'react';
import '../Atoms.css';

function Input({
  type,
  value,
  placeholder,
  name,
  onChange,
  className,
  disabled,
  required,
}) {
  return (
    <div>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        name={name}
        required={required}
        onChange={onChange}
        className={className}
        disabled={disabled}
      />
    </div>
  );
}

export default Input;
