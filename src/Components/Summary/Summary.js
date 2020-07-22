import React from 'react';
import { Link } from 'react-router-dom';

import bathroom from '../../assets/img/summary/bathroom.jpg';
import buanderie from '../../assets/img/summary/buanderie.jpg';
import bureau from '../../assets/img/summary/bureau.jpg';
import cuisine from '../../assets/img/summary/cuisine.jpg';
import bedroom from '../../assets/img/summary/bedroom.jpg';
import salon from '../../assets/img/summary/salon.jpg';

import './Summary.css';

const Summary = () => {
  return(
    <div class='sum'>
      <Link to='/house/result'>
        <a href='to' className='btn-floating btn-large yellow darken-1 pulse button-kitchen1'>
          <i class='material-icons'>wb_sunny</i>
        </a>
        </Link>
      <div class='container container-summary'>

          <div class='row top-row'>
            <img src={bureau} alt='salon'/>
          </div> 
          
          <div class='row row-middle'>
            <div className='col s12 m6'>
              <Link to='/house/bedroom'>
                <img src={bedroom} alt='salon'/>
              </Link>
            </div>
            <div className='col s12 m6'>
            <Link to='/house/bathroom'>
            <img src={bathroom} alt='salon' />
            </Link>
            </div>
            <div className='col s12 m6'>
            <Link to='/house/livingroom'>
            <img src={salon} alt='salon' />
            </Link>
            </div>
            <div className='col s12 m6'>
            <Link to='/house/kitchen'>
            <img src={cuisine} alt='salon' />
            </Link>
            </div>
          </div>
          <div className='row bottom-row'>
            <img src={buanderie} alt='salon' />
          </div>
        </div>
      <div className='sumGrid'>
      </div>
    </div>
  )
};

export default Summary;