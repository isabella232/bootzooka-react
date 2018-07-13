import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () =>
  <div className="NotFound">
      <h1>Ooops!</h1>
      <h2>You shouldn't be here for sure :)</h2>
      <div>
          Please choose one of the locations below:
      </div>
      <ul>
          <li><Link to="/">Home page</Link></li>
          <li><a href="http://softwaremill.com">SoftwareMill - our company Home Page</a></li>
          <li><a href="https://github.com/softwaremill/bootzooka-react/">SML Bootzooka-react on GitHub</a></li>
      </ul>
  </div>;

export default NotFound;
