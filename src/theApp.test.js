import React from 'react';
import ReactDOM from 'react-dom';
import theApp from './theApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<theApp />, div);
});
