import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './react-i18next-config';
import ReactDOMServer from 'react-dom/server';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
