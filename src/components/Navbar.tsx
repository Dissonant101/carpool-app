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
        <div className="navbar">
          <NavLink to="/" className="home-btn">
            Home
          </NavLink>
          <NavLink to="/dashboard" className="home-btn">
            Dashboard
          </NavLink>
          <NavLink to="/ride-request" className="home-btn">
            Ride Request
          </NavLink>
          <NavLink to="/ride-search" className="home-btn">
            Ride Search
          </NavLink>
          <LoginButton />
          <LogoutButton />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
