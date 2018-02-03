import React from 'react';
import {render} from 'react-dom';
import Login from './Components/Login.jsx';
import exampleData from './data/exampleData.js';
import{getData, sendData} from './data/dataAccess.js';
import $ from 'jquery';
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
    this.invoke = this.invoke.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.getMessageData = this.getMessageData.bind(this);
    this.messageSubmit = this.messageSubmit.bind(this);
  }

  loginSubmit () {
    
    this.setState({username: this.state.text});
    

  }

  onInputChange (input) {
    this.setState({text: input});

  }
  
  onMessageChange (input) {
    this.setState({message: input});

  }
  
  getMessageData(data){
    
    this.setState({data: data})
  }
  invoke() {
    getData(this.getMessageData);
  }

  messageSubmit () {
    sendData({username: this.state.username, text: this.state.message, roomname: this.state.roomname}, this.invoke);
  }
// , getData(this.getMessageData)
  render () {
    return (
      <div>
        <Login onInputChange = {this.onInputChange} loginSubmit={this.loginSubmit}/>
      </div>
    );
  }
}



render(<App data={exampleData}/>, document.getElementById('app'));