import React from 'react';
import './Page404.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Atoms/Buttons/Button';

function Page404() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/dashboard');
  };
  return (
    <div className="errorpage">
      <div className="numz">404</div>
      <div className="paraz">
        <p>Ooops!...Page not found.</p>
      </div>
      <Button title="Go back home" height="20px" onClick={handleClick} />
    </div>
  );
}

export default Page404;
