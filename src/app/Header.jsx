import React from 'react';

const Header = () => (
  <div >
    <h1>Just Cinemas</h1>
    <button type="button" class="btn active">NOW RUNNING</button>
    <button type="button" class="btn">COMING SOON</button>
  </div >
);

Header.defaultProps = {};

export default Header;
 