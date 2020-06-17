import React from 'react';
import ReactDOM from 'react-dom';
// import HelloWorld from './state-drills/HelloWorld';
// import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun';
// import App from './App';
import './index.css';

ReactDOM.render(<RouletteGun bulletInChamber={6} />, document.getElementById('root'));