// sidebar.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Modal from 'react-modal';

import TA0001 from './fragments/TA0001' 
import TA0002 from './fragments/TA0002' 

class MitreTable extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { TA0001: false,
	           TA0002: false,
	           headerData: [],
  	         TA0001Data: [],
	           TA0002Data: [],
	           TA0003Data: [],
	           TA0004Data: [],
	           TA0005Data: [],
	           TA0006Data: [],
	           TA0007Data: [],
	           TA0008Data: [],
	           TA0009Data: [],
	           TA0010Data: [],
	           TA0011Data: [],
	           TA0040Data: [],
                 };

    this.getData = this.getData.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

  }

componentDidMount() {
    this.getData(this, 'All');
}

componentWillReceiveProps(nextProps) {
    this.getData(this, 'All');
}

getData(ev, name){

    axios.get('/getHeader')
      .then(function(response) {
        ev.setState({headerData: response.data});
      });

    axios.get('/getInitialAccess')
      .then(function(response) {
        ev.setState({TA0001Data: response.data});
      });

    axios.get('/getExecution')
      .then(function(response) {
        ev.setState({TA0002Data: response.data});
      });

    axios.get('/getPersistence')
      .then(function(response) {
        ev.setState({TA0003Data: response.data});
      });

    axios.get('/getPrivilegeEscalation')
      .then(function(response) {
        ev.setState({TA0004Data: response.data});
      });

    axios.get('/getDefenseEvasion')
      .then(function(response) {
        ev.setState({TA0005Data: response.data});
      });

    axios.get('/getCredentialAccess')
      .then(function(response) {
        ev.setState({TA0006Data: response.data});
      });

    axios.get('/getDiscovery')
      .then(function(response) {
        ev.setState({TA0007Data: response.data});
      });

    axios.get('/getLateralMovement')
      .then(function(response) {
        ev.setState({TA0008Data: response.data});
      });

    axios.get('/getCollection')
      .then(function(response) {
        ev.setState({TA0009Data: response.data});
      });

    axios.get('/getExfiltration')
      .then(function(response) {
        ev.setState({TA0010Data: response.data});
      });

    axios.get('/getCommandControl')
      .then(function(response) {
        ev.setState({TA0011Data: response.data});
      });

    axios.get('/getImpact')
      .then(function(response) {
        ev.setState({TA0040Data: response.data});
      });
}

showModal(mitreID){
	this.setState({ [mitreID]: true });
}

hideModal(mitreID){
	this.setState({ [mitreID]: false });
}

render(){
  return (
	  <div>

          <TA0001
          show={this.state.TA0001}
          onHide={() => this.hideModal("TA0001")}
          />
          <TA0002
          show={this.state.TA0002}
          onHide={() => this.hideModal("TA0002")}
          />

          {
              this.state.headerData.map(function(exp){
                return [

                    <div class="inlineblock">
                      <Table striped bordered >
                      <thead bgcolor="#d3d3d3">
                      <tr>
                          <th ><a class="matrix-tactics-url" href="#" onClick={() => this.showModal(exp.ID)}>{exp.name}</a></th>
                      </tr>
                      </thead>
                      <tbody>
			{ this.state[exp.ID + "Data"].map(function(data){
				return [
                      <tr><td ><a class="technique-mapping" href="#" >{data.name}</a></td>
                     </tr>
				] }, this)}
                     </tbody>
                     </Table>
                   </div>
		]
              }, this)
          }
	  </div>
  );
}
}

export default MitreTable;
