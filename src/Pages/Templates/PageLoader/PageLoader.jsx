import React from 'react';
import './Pageloader.css';

export default function PageLoader() {
  return (
    <div id="root">
      <div className="loader-wrapper">
        <div className="loader" />
        <p className="loader_title">Loading....</p>
      </div>
    </div>
  );
}
