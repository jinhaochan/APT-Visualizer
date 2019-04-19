//client/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add'

export default class App extends React.Component {

constructor() {
    super();
  this.state = {name:'All', data: []};
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

render() {
    return (
      <div>
        <Add name={this.state.name} />
        <table>
          <thead>
            <tr><th></th><th className='desc-col'>APT Name</th><th className='button-col'>Description</th><th className='button-col'>Aliases</th><th className='button-col'>Targets</th><th className='button-col'>Associated Malware</th><th className='button-col'>Attack Vectors</th></tr>
          </thead>
          <tbody>
            {
              this.state.data.map(function(exp){
                return  <tr><td className='counterCell'></td><td className='desc-col'>{exp.name}</td><td className='button-col'>{exp.description}</td><td className='button-col'>{exp.aliases}</td><td className='button-col'>{exp.targets}</td><td className='desc-col'>{exp.associated_malware}</td><td className='desc-col'>{exp.vectors}</td></tr>
              })
            }
            </tbody>

</table>
      </div>
    );
  }
}
