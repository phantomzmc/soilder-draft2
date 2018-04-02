import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import Emoji from 'react-emoji-render';

WebFont.load({
  google: {
    families: ['Kanit', 'sans-serif']
  }
});


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
