import React from 'react';

export default function PopUp() {
  return props.trigger ? (
    <div className="popUp">
      <div className="Popup-inner">
        <button className="closeButton" onClick={() => props.setTrigger(false)}>
          close
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ''
  );
}
