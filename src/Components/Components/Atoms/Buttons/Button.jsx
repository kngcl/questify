import React from 'react';

// eslint-disable-next-line
export default function Button({ height, title, width, className, colors }) {
  return (
    <div>
      <button
        className={className}
        style={{ padding: height, width, backgroundColor: colors }}
        type="submit"
      >
        {title}
      </button>
    </div>
  );
}
