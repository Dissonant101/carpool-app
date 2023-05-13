import { NavLink } from 'react-router-dom';

/**
 * Navigation bar component.
 */
const Navbar = () => {
  return (
    <div>
      <nav>
        <div>
          <ul>
            <li>
              <div>
                <NavLink to="/">Home</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
