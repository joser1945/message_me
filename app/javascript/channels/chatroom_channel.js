import consumer from "./consumer"

consumer.subscriptions.create("ChatroomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    $('#message-container').append(data.mod_message);
    
    scroll_bottom = $('#message_box').ready(function() {
      if ($('#message_box').length > 0) {
          $('#message_box').scrollTop($('#message_box')[0].scrollHeight);
      };
  });

  }
});
