// sidebar.js
import React from 'react';
import ReactDOM from 'react-dom';
import { slide as Menu } from 'react-burger-menu';
import axios from 'axios';

class SideBar extends React.Component {

constructor() {
    super();
    this.state = {data: []};
    this.getData = this.getData.bind(this);
}

componentDidMount() {
    this.getData(this, 'All');
}

componentWillReceiveProps(nextProps) {
    this.getData(this, 'All');
}

getData(ev, name){
    axios.get('/getAll?name='+name)
      .then(function(response) {
        ev.setState({data: response.data});
      });
}

render(){
  return (
	  <div>
    <Menu>
	  {
              this.state.data.map(function(exp){
                return  <a className="menu-item" href="/">{exp.name}</a>
              })
            }
    </Menu>
	  </div>
  );
}
}

export default SideBar;
