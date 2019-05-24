// sidebar.js
import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class TA0003 extends React.Component {

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
            TA0003 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Persistence</h4>
          <p>
	  Persistence is any access, action, or configuration change to a system that gives an adversary a persistent presence on that system. 

	  Usually, services and accesses are lost when an interruption happens in the system. Such interruptions include system reboot and loss of credentials
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

export default TA0003;
