import { BiUserCircle } from 'react-icons/bi';
import { AiFillCalendar, AiOutlineTable } from 'react-icons/ai';
import { FaTasks } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import css from './Sidebar.module.css';
import logo from './logoz-Photo.png.png';

function Sidebar() {
  return (
    <div className={css.container}>
      <img alt="logo" src={logo} className={css.logo} />
      <div className={css.menu}>
        <NavLink to="profile" className={css.item} title="Dashboard">
          <BiUserCircle size={30} />
        </NavLink>
        <NavLink to="board" className={css.item} title="Board">
          <FaTasks size={30} />
        </NavLink>
        <NavLink to="list" className={css.item} title="Calendar">
          <AiFillCalendar size={30} />
        </NavLink>

        <NavLink to="members" className={css.item} title="Users">
          <AiOutlineTable size={30} />
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
