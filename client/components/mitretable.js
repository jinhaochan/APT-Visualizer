// sidebar.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Modal from 'react-modal';

import TA0001 from './fragments/TA0001' 
import TA0002 from './fragments/TA0002' 

class MitreTable extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { TA0001: false,
	           TA0002: false,
	           headerData: [],
	           mitreData: []
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

let url = 'https://cti-taxii.mitre.org/stix/collections/95ecc380-afe9-11e4-9b6c-751b66dd541e/objects';

fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
	    'Accept': 'application/vnd.oasis.stix+json; version=2.0'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    })
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log(response.json())
  })
  .catch(err => {
    // Do something for an error here
  })

    axios.all([
    axios.get('/getHeader'),
    axios.get('/getInitialAccess'),
    axios.get('/getExecution'),
    axios.get('/getPersistence'),
    axios.get('/getPrivilegeEscalation'),
    axios.get('/getDefenseEvasion'),
    axios.get('/getCredentialAccess'),
    axios.get('/getDiscovery'),
    axios.get('/getLateralMovement'),
    axios.get('/getCollection'),
    axios.get('/getExfiltration'),
    axios.get('/getCommandControl'),
    axios.get('/getImpact')
    ])
    .then(axios.spread((header, access, execution, persistence, escalation
	    , evasion, credential, discovery, lateral, collection, exfiltration
	    , command, impact) => {

                this.setState({headerData: header.data});

                this.setState({
		    mitreData: this.state.mitreData.concat([access.data])
         	});
                this.setState({
		    mitreData: this.state.mitreData.concat([execution.data])
         	});
                this.setState({
		    mitreData: this.state.mitreData.concat([persistence.data])
         	});
                this.setState({
		    mitreData: this.state.mitreData.concat([escalation.data])
         	});
                this.setState({
		    mitreData: this.state.mitreData.concat([evasion.data])
         	});
                this.setState({
		    mitreData: this.state.mitreData.concat([credential.data])
         	});
                this.setState({
		    mitreData: this.state.mitreData.concat([discovery.data])
         	});
                this.setState({
		    mitreData: this.state.mitreData.concat([lateral.data])
         	});
                this.setState({
		    mitreData: this.state.mitreData.concat([collection.data])
         	});
                this.setState({
		    mitreData: this.state.mitreData.concat([exfiltration.data])
         	});
                this.setState({
		    mitreData: this.state.mitreData.concat([command.data])
         	});
                this.setState({
		    mitreData: this.state.mitreData.concat([impact.data])
         	});
      }));

     this.state.mitreData.map((col, i) => this.state.mitreData.map(row => row[i]))

}

showModal(mitreID){
	this.setState({ [mitreID]: true });
}

hideModal(mitreID){
	this.setState({ [mitreID]: false });
}

render(){
  let arr = this.state.mitreData;
  const maxLen = arr.reduce((max, {length}) => Math.max(max, length), 0);

  let transArr = arr.reduce((r, a, i, { length }) => {
        a.forEach((v, j) => {
            r[j] = r[j] || new Array(length).fill('');
            r[j][i] = v;
        });
        return r;
    }, []);

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

          <Table striped bordered >
          <thead bgcolor="#d3d3d3">
          <tr>
              {
              this.state.headerData.map(function(exp){
                  return [

                          <th><a class="matrix-tactics-url" href="#" onClick={() => this.showModal(exp.ID)}>{exp.name}</a></th>
                   ]  
                  }, this)
              }
          </tr>
          </thead>
          <tbody>
	  {
              transArr.map(exp => {
                return [
                      <tr>
			{exp.map(function(data){
				return [
		        <td class="cell"><a class="technique-mapping" href="#" >{data.name}</a></td>
				]}, this)
			}
                     </tr>
		]
              }, this)
	  }
                     </tbody>
                     </Table>
	  </div>
  );
}
}

export default MitreTable;
