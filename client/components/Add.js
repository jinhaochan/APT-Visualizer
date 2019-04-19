//client/components/Add.js
import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');
class Add extends React.Component {
constructor() {
      super();
this.state = {
        description: '',
        name: '',
        alises: '',
        targets: '',
        associated_malware: '',
        vectors: '',
        messageFromServer: '',
        modalIsOpen: false
      }
      this.onClick = this.onClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.insertNewAPT = this.insertNewAPT.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
}
openModal() {
      this.setState({
        modalIsOpen: true
      });
    }
closeModal() {
      this.setState({
        modalIsOpen: false,
        description: '',
        name: '',
        aliases: '',
        targets: '',
        associated_malware: '',
        vectors: '',
        messageFromServer: ''
      });
    }
onClick(e) {
      this.insertNewAPT(this);
    }

insertNewAPT(e) {
      axios.post('/insert',
        querystring.stringify({
          desc: e.state.description,
          name: e.state.name,
          aliases: e.state.aliases,
          targets: e.state.targets,
          associated_malware: e.state.associated_malware,
          vectors: e.state.vectors
        }), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function(response) {
        e.setState({
          messageFromServer: response.data
        });
      });
    }

handleTextChange(e) {
      if (e.target.name == "description") {
        this.setState({
          description: e.target.value
        });
      }
      if (e.target.name == "name") {
        this.setState({
          name: e.target.value
        });
      }
      if (e.target.name == "aliases") {
        this.setState({
          aliases: e.target.value
        });
      }
      if (e.target.name == "targets") {
        this.setState({
          targets: e.target.value
        });
      }
      if (e.target.name == "associated_malware") {
        this.setState({
          associated_malware: e.target.value
        });
      }
      if (e.target.name == "vectors") {
        this.setState({
          vectors: e.target.value
        });
      }
}

render() {
   if(this.state.messageFromServer == ''){
      return (
        <div>
      <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add APT"
       className="Modal">
<Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
       <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
      </Link><br/>
<fieldset>
       <label for="name">APT Name:</label><input type="text" id="name" name="name" value={this.state.name} onChange={this.handleTextChange}></input>

      <label for="aliases">Aliases:</label><input type="text" id="aliases" name="aliases" value={this.state.aliases} onChange={this.handleTextChange}></input>

       <label for="description">Description:</label><input type="text" id="description" name="description" value={this.state.description} onChange={this.handleTextChange}></input>

       <label for="targets">Targets:</label><input type="text" id="targets" name="targets" value={this.state.targets} onChange={this.handleTextChange}></input>

       <label for="associated_malware">Associated Malware:</label><input type="text" id="associated_malware" name="associated_malware" value={this.state.associated_malware} onChange={this.handleTextChange}></input>

       <label for="vectors">Attack Vectors:</label><input type="text" id="vectors" name="vectors" value={this.state.vectors} onChange={this.handleTextChange}></input>

      </fieldset>
<div className='button-center'>
        <br/>
        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add New APT</Button>
       </div>
          </Modal>
        </div>
      )
   }
   else{
    return (
     <div>
       <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
       <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Add APT"
        className="Modal">
<div className='button-center'>
        <h3>{this.state.messageFromServer}</h3>
        <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
         <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
        </Link>
       </div>
      </Modal>
       </div>
     )
    }
   }
}
export default Add;
