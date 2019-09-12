$(function(){
  function buildHTML(messages){
    var html = `<div class="message" data-message-id=${message.id}>
         <div class="up-message__user-name">
          ${message.user_name}
         </div>
         <div class="up-message__date">
          ${message.date}
         </div>
         </div>`
    return html;
  }
  `<div class="message" data-message-id=${message.id}>
         <div class="up-message__user-name">
          ${message.user_name}
         </div>
         <div class="up-message__date">
          ${message.date}
         </div>
         </div>`
$('.js-form').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')
  $.ajax({
    url: url,
    type: "POST",
    data: formData,
    dataType: 'json',
    processData: false,
    contentType: false
  })
.done(function(data){
  var html = buildHTML(data);
       $('.messages').append(html);
})
.fail(function(){
  alert('error');
})
})
});