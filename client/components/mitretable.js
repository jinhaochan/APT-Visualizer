// sidebar.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class MitreTable extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { headerData: [],
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

          {
  	    this.state.headerData.map(function(exp) {
 		  let id = exp.external_references[0].external_id;
		  return [
			  <div>
			  <Modal
		        size="lg"
		        aria-labelledby="contained-modal-title-vcenter"
		        centered
			show={this.state[id]} 
		        >
		        <Modal.Header>
		          <Modal.Title id="contained-modal-title-vcenter">
			  {id}
		          </Modal.Title>
		        </Modal.Header>
		        <Modal.Body>
		          <h4>Initial Access</h4>
		          <p>
		          The initial access tactic represents the vectors adversaries use to gain an initial foothold within a network.
		          </p>
		        </Modal.Body>
		        <Modal.Footer>
			  <Button onClick={() => this.hideModal(id)}>Close</Button>
		        </Modal.Footer>
		      </Modal>
			</div>
	            ]
	    }, this)
	  }

          {
  	    this.state.mitreData.map(exp => {
		  exp.map(data => {
			  let id = data.external_references[0].external_id;
			  return [
				  <div>
                          <Modal
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        show={this.state[id]}
                        >
                        <Modal.Header>
                          <Modal.Title id="contained-modal-title-vcenter">
                          {id}
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <h4>Initial Access</h4>
                          <p>
                          The initial access tactic represents the vectors adversaries use to gain an initial foothold within a network.
                          </p>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button onClick={() => this.hideModal(id)}>Close</Button>
                        </Modal.Footer>
                      </Modal>
                        </div>
		            ]

	    }, this)
	  }, this)

		 }

          <Table striped bordered class="table-hide">
          <thead bgcolor="#d3d3d3">
          <tr>
              {
              this.state.headerData.map(function(exp){
                  return [

                          <th><a class="matrix-tactics-url" href="#" onClick={() => this.showModal(exp.external_references[0].external_id)}>{exp.name}</a></th>
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
				return data != 0 ?
		        <td><a class="technique-mapping" href="#" onClick={() => this.showModal(data.external_references[0].external_id)}>{data.name}</a></td>
				:
					<td style={{border:'none', visibility:'hidden'}}></td>
				}, this)
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
