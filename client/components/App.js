//client/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';

import SideBar from './sidebar';
import MitreTable from './mitretable';

export default class App extends React.Component {

render() {
    return (
      <div id="App">
      <SideBar />
      <div id="page-wrap">
	    <h1>EXTERMITRE </h1>
        <h3>Select an APT from the side bar</h3>


      </div>
      <MitreTable />
    </div>
    );
}
}
