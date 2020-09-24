import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import ProjectList from '../../components/project/ProjectList';

import './Home.css';

const Home = () => {
  const { userData } = useContext(UserContext);
  return (
    <div className="container">
      {userData.user ? (
        <div>
          <h1>Welcome {userData.user.displayName}</h1>
          <ProjectList />
        </div>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link>
        </>
      )}
    </div>
  );
}

export default Home;
