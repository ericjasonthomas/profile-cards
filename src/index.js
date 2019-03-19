import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Theapp from './Theapp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Theapp />, document.getElementById('root'));
registerServiceWorker();
