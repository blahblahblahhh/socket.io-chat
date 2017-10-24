$(function() {
  var socket = io();
  $('form').submit(function() {
    var msg = $('#m').val();
    var usr = $('#n').val();
    socket.emit('chat message', msg, usr);
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg, usr) {
    $('#messages').append($('<li>').html('<b>' + usr + ':</b> ' + msg));
    window.scrollTo(0, document.body.scrollHeight);
  });
});

$(document).ready(function() {

  console.log('loaded');

  $('#new').on('click', function(e) {
    $('.login').hide();
  });

  $('#n').on('keypress', function(e) {
    if (e.which === 13) {
      $('.login').hide();
    }
  });

});
