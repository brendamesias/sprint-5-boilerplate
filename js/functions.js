// /**
//  * @param String name
//  * @return String
//  */
// function getParameterByName(name) {
//   name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\[');
//   var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
//     results = regex.exec(location.search);
//   return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
// }
$(document).ready(function() {
  // definiendo variables
  var topicContent = $('.topic-content').val;
  console.log(topicContent);

  $.ajax({
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
    ContentType: 'application/json',
    statusCode: {
      404: function() {
        alert('página no encontrada');
      },
      200: function() {
        console.log('wiiiiiiii <3');
      }
    }
  })
    .done(function(data) {
      for (var i = 0; i < 100; i++) {
        console.log(data[i]);;
      }
    });
});
