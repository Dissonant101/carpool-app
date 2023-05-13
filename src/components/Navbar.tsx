import { NavLink } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

/**
 * Navigation bar component.
 */
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className='navbar'>
          <NavLink to="/" className='home-btn'>Home</NavLink>
          <LoginButton />
          <LogoutButton />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
