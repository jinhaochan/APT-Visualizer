// sidebar.js
import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class TA0008 extends React.Component {

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
            TA0008 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Lateral Movement</h4>
          <p>
	  Lateral movement consists of techniques that enable an adversary to access and control remote systems on a network and could, but does not necessarily, include execution of tools on remote systems.
	  The lateral movement techniques could allow an adversary to gather information from a system without needing additional tools.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
	  </div>
  );
}
}

export default TA0008;
