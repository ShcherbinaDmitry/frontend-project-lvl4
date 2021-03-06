// @ts-check

import 'core-js/stable/index.js';
import 'regenerator-runtime/runtime.js';
import React from 'react';
import { render } from 'react-dom';

import App from './components/app.js';

import '../assets/application.scss';

render(
    <App />,
  document.querySelector('#chat')
);