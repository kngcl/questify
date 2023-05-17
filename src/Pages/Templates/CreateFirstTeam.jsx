/* eslint-disable */
import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quest from './quest.svg';
import Header from '../../Components/Atoms/Headings/Header';
import Input from '../../Components/Atoms/Inputs/Input';
import Button from '../../Components/Atoms/Buttons/Button';
import { saveProject } from '../../Api/auth';
import './CreateFirst.css';

import Footerdesign from './Footerdesign';
import PageLoader from './PageLoader/PageLoader';

function CreateFirstTeam() {
  const [isloading, setIsloading] = useState(false);
  const [members, setMembers] = useState([]);
  const [projects, setProjects] = useState();
  const navi = useNavigate();

  const handleChange = (e) => {
    const project = e.target.value;
    setProjects(project);
  };

  const handleInvite = (e) => {
    e.preventDefault();
    const data = e.target.email.value;
    const invite = [...members];
    invite.push({ email: data });
    setMembers(invite);
    e.target.email.value = '';
  };

  const createWorkPlace = async () => {
    try {
      setIsloading(true);
      await saveProject({ project: projects, members });
      navi('/dashboard/board');
    } catch (e) {
      console.error(e);
    } finally {
      setIsloading(false);
      navi('/dashboard/board');
    }

    console.log({ project: projects, members });
  };

  function deleteInvitation(id) {
    const filter = members.filter((elements) => {
      return elements !== id;
    });
    setMembers(filter);
  }

  return (
    <div className=''>
      <div className="creatz">
        <p>{isloading ? <PageLoader /> : ''}</p>
        <div>
          <img className="imagez" alt="" src={quest} />
        </div>
        <div className="infoz">
          <Header title="Welcome to Questify" />
          <h2 className="create">
            let's create your workspace. A space for teams to collaborate,
            organize, and share project boards.
          </h2>
          <div className="detailz">
            <p className="inputx">Name your workspace</p>
            <Input
              type="text"
              placeholder="Questify Workspace"
              name="project"
              onChange={handleChange}
              className="input2"
            />
            <p>You can also edit this name in your work space</p>

            <div className="form_control">
              <p className="inputx">Who's on your team? </p>
              <form className="addTeam" onSubmit={handleInvite}>
                <Input
                  type="text"
                  placeholder="Enter as many email address as you want..."
                  name="email"
                  className="input2"
                />
                <div className="btn_email">
                  <Button
                    type="submit"
                    title="Add"
                    width="80px"
                    height="27.5px"
                    className="Add"
                  />
                </div>
              </form>
            </div>

            <div className="team">
              {members?.map((team, i) => {
                return (
                  <div key={i} className="teamMember invitations">
                    <p>&#x2713;</p>
                    <p> {team.email} </p>
                    <p onClick={() => deleteInvitation(team)} className="cross">
                      &#x2717;
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="btn_create_workspace">
            <p>
              Invite your team members so they can see what you are working on.
            </p>
            <div className="createWork">
              <Button
                type="submit"
                title="Create your workspace"
                onClick={createWorkPlace}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateFirstTeam;
