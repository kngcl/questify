/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { useState } from 'react';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import './Styles.css';
import Header from '../../Components/Atoms/Headings/Header';
import Button from '../../Components/Atoms/Buttons/Button';
import Input from '../../Components/Atoms/Inputs/Input';
import Footerdesign from './Footerdesign';
import { confirmUser, login } from '../../Api/auth';
import { saveToken } from '../../utils';
import PageLoader from './PageLoader/PageLoader';

export default function Signin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('token'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { target } = e;
    const user = {
      emailAddress: target.emailAddress.value,
      password: target.password.value,
    };

    try {
      setIsLoading(true);
      const { data } = await login(user.emailAddress, user.password);
      saveToken(data);

      if (searchParams.get('token')) {
        await confirmUser(searchParams.get('token'));
        setIsLoading(false);
      }
      navigate('/dashboard');
    } catch (event) {
      if (event.response.status === 401) {
        setError('Invalid username or password');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="headz">
      <p>{isLoading ? <PageLoader /> : ''}</p>
      <form onSubmit={handleSubmit}>
        <Header title="Login" />
        <p>Login and start managing your oraganization</p>
        <p>{isLoading ? 'Loading...' : ''}</p>
        {error && <p className="error">{error}</p>}
        <Input
          type="email"
          placeholder="Email Address"
          name="emailAddress"
          required
        />
        <Input type="password" placeholder="Password" name="password" />
        <div className="linkz">
          <p>Forgot Password?</p>
          <Link className="titles" to="/signup">
            <p className="accountz">No account? Sign Up</p>
          </Link>
        </div>
        <Button type="submit" title="Login" className="signIn" />
      </form>
      <Footerdesign />
    </div>
  );
}
