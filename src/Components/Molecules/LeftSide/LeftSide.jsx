import React from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../Atoms/Headings/Heading';
import Paragraph from '../../Atoms/Paragraph/Paragraph';
import plane from '../../../assets/images/plane.png';
import ellipse from '../../../assets/images/ellipse.png';
import girl from '../../../assets/images/girl.png';
import './LeftSide.css';
import Button from '../../Atoms/Buttons/Button';

export default function Head() {
  return (
    <div>
      <div className="envelopez">
        <img className="circle" src={ellipse} alt="dot" />
        <Heading title="New Home for Collaboration" size="50px" />
        <img className="envlope" src={plane} alt="envelop" />
      </div>
      <div className="para">
        <Paragraph title="The online collaborative whiteboard platform to bring teams together, anytime, anywhere." />
        <div className="butz">
          <Link to="/signup">
            <Button title="Get Started" className="getStarted" />
          </Link>
        </div>
        <Paragraph
          title="Free forever — no credit card required."
          size="13px"
        />
      </div>
      <div className="girl">
        <img src={girl} alt="female" />
      </div>
    </div>
  );
}
