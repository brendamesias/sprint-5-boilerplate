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
  var datos;

  console.log(datos)
    var contenidoEncontrado,
        palabraNueva;
    $('#input_text').on('input', function(e) {
      for(dato in datos) {
        var dat = datos[dato];
        if($('#input_text').val().length > 0 ) {
          if($('#input_text').val().toLowerCase().includes(dat.content.toLowerCase())) {
            console.log(dat)
          }
        }
      }
    })

  $.ajax({
    url: 'https://examen-laboratoria-sprint-5.herokuapp.com/topics',
    type: 'GET',
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
      datos = data.slice(0, 50);
      for (var i = 0; i < 50; i++) {
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
