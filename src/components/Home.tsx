import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {

  const { loginWithRedirect } = useAuth0();

  return <section id='homepage-section'>
    <div className='left-shifted-title'>
      <h1>Welcome to Carpool!</h1>
      <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, natus suscipit necessitatibus cumque voluptate, eum eligendi quam tenetur.</h4>
 
      <button onClick={() => loginWithRedirect()} className='get-started-btn'>Get Started</button>

    </div>
  </section>;
};

export default Home;
