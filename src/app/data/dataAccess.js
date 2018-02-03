const apiAUTH =  {
    "appId": "42c3ed7c94fed042291633945f78fc083d80d18a",
    "restAPIKey": "890ad4e875072efc3ea94f238b1f19d96047e3e6"
}

const sendData = (message, callback) => {
  $.ajax({
    type: "POST",
    beforeSend: function(request){
      request.setRequestHeader("appId", apiAUTH.appId);
      request.setRequestHeader("restAPIKey", apiAUTH.restAPIKey);
    },
    url: "http://parse.sfs.hackreactor.com/chatterbox/classes/messages",
    contentType: 'application/json'
    data: JSON.stringify({username: message.username, text: message.message, roomname: message.roomname})
  }).done(function(data) {
    callback();
    
  });
};
 

const getData = (callback) => {
     $.ajax({
      type: "GET",
      beforeSend: function(request){
        request.setRequestHeader("appId", apiAUTH.appId);
        request.setRequestHeader("restAPIKey", apiAUTH.restAPIKey);
      },
      url: "http://parse.sfs.hackreactor.com/chatterbox/classes/messages",
      contentType: 'application/json',
      data: data
    }).done(function(data) {
      console.log(data, "This is data ......");
      callback(data);
      
    });

  }
};

export {sendData, getData};