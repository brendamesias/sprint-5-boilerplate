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
        var creatingItem = `
          <div id='item' class="row valign-wrapper topic">
            <div class="col s4 offset-s2 center-align container-topics">
                <span class="topic-content">${data[i].content}</span>
                <br />
                <span>escrito por: </span>
                <span class="name">${data[i].author_name}</span>
            </div>
            <div class="col s5 left-align container-num-answers">
              <span class="num-answers">${data[i].responses_count} respuestas</span>
            </div>
          </div>
        `;

        $('#items').append(creatingItem);
      }
    });


  // ADD
  $('#enviarInfo').submit(function(e) {
    e.preventDefault();
    console.log($('#icon_prefix').val())
    console.log($('#icon_prefix2').val())

    $.ajax({
      url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics',
      type: 'POST',
      ContentType: 'application/json',
      data: {
        author_name: $('#icon_prefix').val(),
        content: $('#icon_prefix2').val(),
      }
    })
      .done(function(data) {
        console.log(data);
      })
  })


});
