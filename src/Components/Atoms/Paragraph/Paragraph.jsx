import React from 'react';

// eslint-disable-next-line
export default function Paragraph({ title, color, size, width, height }) {
  return (
    <div>
      <p style={{ color, fontSize: size, width, height }}>{title}</p>
    </div>
  );
}
