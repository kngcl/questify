import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getInvitee } from '../../Api/auth';
import Button from '../../Components/Atoms/Buttons/Button';
import Footerdesign from './Footerdesign';
import './Styles.css';

export default function InvitePage() {
  const { token } = useParams();
  const [invitee, setInvitee] = useState();
  const nav = useNavigate();

  useEffect(() => {
    getInvitee(token).then(async (data) => {
      await setInvitee(data.data);
    });
  }, []);

  const handleNav = () => {
    if (!invitee?.user) {
      nav(`/signup?token=${token}`);
    } else {
      nav(`/login?token=${token}`);
    }
  };

  return (
    <div className="invite">
      <h1>Welcome {invitee?.email}</h1>
      <h2>You have been invited to join {invitee?.project.title} workspace</h2>
      <p>Click the link to accept the invite</p>
      <Button title="Accept" onClick={handleNav} />
      <Footerdesign />
    </div>
  );
}
