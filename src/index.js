import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Theapp from './TheApp';
import $ from 'jquery';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Theapp />, document.getElementById('root'));
registerServiceWorker();

$(document).ready(function() {
  $('.ms-core-overlay').removeClass('ms-core-overlay').addClass('backinblack');
});
