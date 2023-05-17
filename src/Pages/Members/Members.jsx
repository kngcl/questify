import './Member.css';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Button from '../../Components/Atoms/Buttons/Button';
import { getMembers } from '../../Api/auth';
import PageLoader from '../Templates/PageLoader/PageLoader';
import AuthGuard from '../../Components/services/AuthGuard';

function Members() {
  const [members, setMembers] = useState();
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    setIsloading(true);
    getMembers().then(({ data }) => {
      setMembers(data);
      setIsloading(false);
    });
  }, []);

  return (
    <div className="memberContainer">
      <p>{isloading ? <PageLoader /> : ''}</p>
      <div className="button">
        <Button title="Add member" />
      </div>

      <div className=" scroll">
        {members?.map((member) => {
          return (
            <div className="member" key={member.id}>
              <div className="memberField">
                <h3 className="h3">{member.name}</h3>
                <p>UserName</p>
              </div>
              <div className="memberField">
                {member.is_admin ? <h3>admin</h3> : <h3>user</h3>}
                <p>Status</p>
              </div>
              <div className="memberFieldBtn">
                <button type="button" className="manageElt">
                  <FaEdit />
                </button>
                <hr />
                <button type="button" className="manageElt">
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AuthGuard(Members);
