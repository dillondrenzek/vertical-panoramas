import React from 'react';
import ReactDOM from 'react-dom';
import PanoList from './PanoList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PanoList />, div);
});
