//client/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';

import SideBar from './sidebar';

export default class App extends React.Component {

render() {
    return (
      <div id="App">
      <SideBar />
      <div id="page-wrap">
	    <h1>Visualize APTs</h1>
        <h2>Select APT from the side bar</h2>
      </div>
    </div>
    );
}
}
