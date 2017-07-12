import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './kickoff/scss/kickoff.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
