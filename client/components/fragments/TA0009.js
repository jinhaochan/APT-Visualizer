// sidebar.js
import React from 'react';
import ReactDOM from 'react-dom';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class TA0009 extends React.Component {

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
            TA0009 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Collection</h4>
          <p>
	  Collection consists of techniques used to identify and gather information, such as sensitive files, from a target network prior to exfiltration. 
	  
	  This category also covers locations on a system or network where the adversary may look for information to exfiltrate.
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

export default TA0009;
