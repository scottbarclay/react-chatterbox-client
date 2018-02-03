import React from 'react';
import {render} from 'react-dom';
import Login from './Components/Login.jsx';
import exampleData from './data/exampleData.js';
import{getData, sendData} from './data/dataAccess.js';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      message: '',
      text: '',
      roomname: 'lobby',
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
  
  onMessageChange (input) {
    this.setState({message: input});

  }
  
  getMessageData(data){
    this.setState({data: data})
  }

  messageSubmit () {
    sendData({username: this.state.username, text: this.state.message, roomname: this.state.roomname})
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