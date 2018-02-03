
const AJAX_REQUESTS = {
  apiAUTH: {
    "appId": "42c3ed7c94fed042291633945f78fc083d80d18a",
    "restAPIKey": "890ad4e875072efc3ea94f238b1f19d96047e3e6"
  },

  sendData: function (message, callback) => {
    $.ajax({
      type: "POST",
      beforeSend: function(request){
        request.setRequestHeader("appId", apiAUTH.appId);
        request.setRequestHeader("restAPIKey", apiAUTH.restAPIKey);
      },
      url: "http://parse.sfs.hackreactor.com/chatterbox/classes/messages",
      contentType: 'application/json'
    }).done(function(data) {
      callback();
      
    });

   
  },

  getData: function (callback) => {
     $.ajax({
      type: "GET",
      beforeSend: function(request){
        request.setRequestHeader("appId", apiAUTH.appId);
        request.setRequestHeader("restAPIKey", apiAUTH.restAPIKey);
      },
      url: "http://parse.sfs.hackreactor.com/chatterbox/classes/messages",
      contentType: 'application/json'
    }).done(function(data) {
      callback(data);
      
    });

  }
};

export default AJAX_REQUESTS;