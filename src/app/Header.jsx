import React from 'react';

const Header = () => (
  <div class="header">
    <div class="App-logo">
      <img src="spicinemas.png" alt="Unable to load..."></img>
    </div>
    <div class="App-header-text"><h1>Just Cinemas</h1></div>
    <div class="btn-group movie-group">
      <button type="button" class="btn">NOW RUNNING</button>
      <button type="button" class="btn">COMING SOON</button>
    </div>
  </div >
);

Header.defaultProps = {};

export default Header;
 