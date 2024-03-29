import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Metronome from './Metronome';
import * as serviceWorker from './serviceWorker';
import './index.css'

ReactDOM.render(<Metronome />, document.getElementById('root'));

// If you want your Metronome to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
