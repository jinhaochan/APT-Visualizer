// sidebar.js
import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import logo from '../assets/TA0001.gif'

class TA0001 extends React.Component {

render(){
  return (
	  <div>


	  <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            TA0001 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Initial Access</h4>
          <p>
	  The initial access tactic represents the vectors adversaries use to gain an initial foothold within a network.
          </p>
	  <img src={logo} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
	  </div>
  );
}
}

export default TA0001;
