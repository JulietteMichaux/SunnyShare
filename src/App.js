import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import M from '../node_modules/materialize-css/dist/js/materialize.js'; 

import Home from './Components/Home/Home';
import Summary from './Components/Summary/Summary';
import Kitchen  from './Components/Kitchen/Kitchen';
import LivingRoom from './Components/LivingRoom/LivingRoom';
import Bathroom from './Components/Bathroom/Bathroom';
import ChildrenBedroom from './Components/ChildrenBedroom/ChildrenBedroom';
import Result from './Components/Result/Result.js';

function App() {

  const initM = () => {
    M.AutoInit();
  }; initM();

  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/house" component={Summary} />
      <Route exact path='/house/kitchen' component={Kitchen} />
      <Route exact path='/house/livingroom' component={LivingRoom} />
      <Route exact path='/house/bathroom' component={Bathroom} />
      <Route exact path='/house/bedroom' component={ChildrenBedroom} />
      <Route exact path='/house/result' component={Result} />
    </div>
  );
  
}

export default App;