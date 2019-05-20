// sidebar.js
import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import logo from '../assets/TA0002.gif'

class TA0002 extends React.Component {

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
            TA0002 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Execution</h4>
          <p>
	  The execution tactic represents techniques that result in execution of adversary-controlled code on a local or remote system. This tactic is often used in conjunction with initial access as the means of executing code once access is obtained, and lateral movement to expand access to remote systems on a network.
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

export default TA0002;
