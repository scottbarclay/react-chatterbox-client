

const apiAUTH =  {
    "appId": "42c3ed7c94fed042291633945f78fc083d80d18a",
    "restAPIKey": "890ad4e875072efc3ea94f238b1f19d96047e3e6"
}

const sendData = (message, callback) => {
  console.log(message);
  $.ajax({
    'type': "POST",
    'headers': {
      'X-Parse-Application-Id': apiAUTH.appId,
      'X-Parse-REST-API-Key': apiAUTH.restAPIKey,
    },
    'url': "http://parse.sfs.hackreactor.com/chatterbox/classes/messages",
    'contentType': 'application/json',
    'data': JSON.stringify({username: message.username, text: message.message, roomname: message.roomname})
  }).done(function(data) {
    console.log(data)
   callback();
    
  }).fail(function(data){
    console.log("No data")
  });

};
 

const getData = (callback) => {
     $.ajax({
      'type': "GET",
      'headers': {
        'X-Parse-Application-Id': apiAUTH.appId,
        'X-Parse-REST-API-Key': apiAUTH.restAPIKey,
      },
      'url': "http://parse.sfs.hackreactor.com/chatterbox/classes/messages",
      'contentType': 'application/json',
      
    }).done(function(data) {
      console.log(data, "This is data ......");
      callback(data);
      
    }).fail(function(data){
      console.log("No data");
    });;

};

export {sendData, getData};