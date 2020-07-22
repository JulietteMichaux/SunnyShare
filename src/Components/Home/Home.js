import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import { Button } from 'react-materialize';

function Home() {

  // a decommenter quand localStorage linké aux pages du jeu
  // localStorage.removeItem('Solar_myCurrentScore');

  return (
    <div className='backgroundHome'>
      <h1 className='title'>SOLAR ENERGY GAME!</h1>
      <p className='text'>Le jeu pour apprendre sur l'économie d'énergie tout en s'amusant!  </p>
      <div>
        <Link to='/house'>
          <Button className='start' waves='light' node='a'>Commencer</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;