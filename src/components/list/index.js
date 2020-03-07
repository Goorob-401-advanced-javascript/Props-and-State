/* eslint-disable no-unused-vars */
import React from 'react';
import { If } from '../if/index.js';

export default props => (
  <React.Fragment>
    <ul className="list">{props.children}</ul>
  </React.Fragment>
);