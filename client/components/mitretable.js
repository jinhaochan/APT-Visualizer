// sidebar.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Modal from 'react-modal';

import TA0001 from './TA0001' 
import TA0002 from './TA0002' 

class MitreTable extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = { TA0001: false,
	           TA0002: false,
	           headerData: []
                 };

    this.getHeaderData = this.getHeaderData.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);

  }

componentDidMount() {
    this.getHeaderData(this, 'All');
}

componentWillReceiveProps(nextProps) {
    this.getHeaderData(this, 'All');
}

getHeaderData(ev, name){
    axios.get('/getHeader')
      .then(function(response) {
        ev.setState({headerData: response.data});
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
                      <tr><td ><a class="technique-mapping" id="v-Drive-by Compromise-initial access-tab" href="/techniques/T1189">Drive-by Compromise</a></td>
                     </tr>
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
