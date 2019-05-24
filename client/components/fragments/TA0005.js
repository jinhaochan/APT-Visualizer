// sidebar.js
import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class TA0005 extends React.Component {

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
            TA0005 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Defense Evasion</h4>
          <p>
	  Defense evasion consists of techniques an adversary may use to evade detection or avoid other defenses.

	  Defense evasion may be considered a set of attributes the adversary applies to all other phases of the operation including privilege escalation, credential access, execution etc.
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

export default TA0005;
