import React from 'react';
import boy from '../../../assets/images/boy.png';
import Heading from '../../Atoms/Headings/Heading';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import element from '../../../assets/images/element.png';
import vector from '../../../assets/images/vector.png';
import './RightSide.css';

export default function RightSide() {
  return (
    <div>
      <div className="boyz">
        <img className="male" src={boy} alt="male" />
        <div className="textz">
          <Heading
            title="Stay organized and connected"
            size="35px"
            width="90%"
          />
          <Paragraph
            title="Bring your team's work together in one shared space. Choose the project view that suits your style, and collaborate no matter where you are."
            size="20px"
            width="100%"
          />
        </div>
      </div>
      <div className="vectorz">
        <img className="elements" src={element} alt="elements" />
        <img className="dot" src={vector} alt="dot-line" />
      </div>
    </div>
  );
}
