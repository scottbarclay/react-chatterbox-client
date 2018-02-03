import React from 'react'
import Chat from './Chat.jsx';
const Chatbox = (props) => {
  return props.chatsData.map(message=>{
    return(
      <Chat username={message.username} message={message.text}/>
    );
  });
  


};

export default Chatbox;


// <Chat username={message.username} message={message.text}/>