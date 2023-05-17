import { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './Styles.css';
import Input from '../../Components/Atoms/Inputs/Input';
import Header from '../../Components/Atoms/Headings/Header';
import Button from '../../Components/Atoms/Buttons/Button';
import Footerdesign from './Footerdesign';
import { confirmUser, register } from '../../Api/auth';
import PageLoader from './PageLoader/PageLoader';
import { saveToken } from '../../utils';

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [error] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  /*  setInterval(() => {
    setIsLoading(true);
  }, 3000); */

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = new FormData(e.currentTarget);
    const values = Object.fromEntries(user.entries());
    register(values).then(({ data: { token } }) => saveToken(token));
    if (searchParams.get('token')) {
      await confirmUser(searchParams.get('token'));
      navigate('/dashboard');

      setIsLoading(false);
    } else {
      navigate('/create-first-team');
    }
  };

  return (
    <div className="headz">
      <form onSubmit={handleSubmit}>
        <Header title="Sign up" />
        <p>Sign up and start managing your oraganization</p>
        <p>{isLoading ? <PageLoader /> : ''}</p>
        <Input type="text" placeholder="Username" name="name" required />
        <Input
          type="email"
          placeholder="Email Address"
          name="emailAddress"
          required
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        {error && <p className="error">{error}</p>}
        <Link className="titlez" to="/login">
          <p className="signz">Have an account? login</p>
        </Link>
        <Button type="submit" title="Sign up" className="signUp" />
      </form>
      <Footerdesign />
    </div>
  );
}
