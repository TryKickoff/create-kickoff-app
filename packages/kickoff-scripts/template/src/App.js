import React, { Component } from 'react';
import { Grid, Column } from '@kickoff/react-components';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Grid gutter='gutter' stack='mid'>
          <Column span={3}>
            <img src='http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg' alt='' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </Column>
          <Column span={3}>
            <img src='http://farm5.staticflickr.com/4094/4850604091_63fca411ab_z.jpg' alt='' />
          </Column>
          <Column span={3}>
            <img src='http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg' alt='' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </Column>
          <Column span={3}>
            <img src='http://farm5.staticflickr.com/4119/4851237770_cfac73865d_z.jpg' alt='' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </Column>
        </Grid>
      </div>
    );
  }
}

export default App;
