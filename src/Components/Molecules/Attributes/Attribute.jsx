import React from 'react';
import { Link } from 'react-router-dom';
import './Attribute.css';
import Button from '../../Atoms/Buttons/Button';
import logo from './logoz.png';

export default function Attribute() {
  return (
    <div className="attributes">
      <img className="logoz" alt="" src={logo} />
      <Link to="/signup">
        <Button title="Sign up" width="80px" />
      </Link>
      <Link to="/login">
        <Button title="login" width="80px" />
      </Link>
    </div>
  );
}
