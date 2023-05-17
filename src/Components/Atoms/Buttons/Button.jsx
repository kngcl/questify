import React from 'react';

// eslint-disable-next-line
export default function Button({ height, title, width, onClick, className }) {
  return (
    <div>
      <button
        className={className}
        style={{ padding: height, width }}
        type="submit"
        onClick={onClick}
      >
        {title}
      </button>
    </div>
  );
}
