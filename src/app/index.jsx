import React from 'react';
import {render} from 'react-dom';
import Login from './Components/Login.jsx';
import exampleData from './data/exampleData.js';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      message: '',
      text: '',
      data: this.props.data
      
    }
    this.loginSubmit = this.loginSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  loginSubmit () {
    
    this.setState({username: this.state.text});
    console.log(this.state.username);

  }

  onChange (input) {
    this.setState({text: input});

  }

  render () {
    return (
      <div>
        <Login onChange = {this.onChange} loginSubmit={this.loginSubmit}/>
      </div>
    );
  }
}



render(<App data={exampleData}/>, document.getElementById('app'));