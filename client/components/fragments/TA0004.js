// sidebar.js
import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class TA0004 extends React.Component {

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
            TA0004 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Privilege Escalation</h4>
          <p>
	  Privilege escalation is the result of actions that allows an adversary to obtain a higher level of permissions on a system or network.

	  Certain tools or actions require a higher level of privilege to work and are likely necessary at many points throughout an operation.

	  Adversaries can enter a system with unprivileged access and must take advantage of a system weakness to obtain local administrator or SYSTEM/root level privileges.
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

export default TA0004;
