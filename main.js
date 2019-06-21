var app = new Vue ({
  el: '#app',
  data: {
    juegos : {}
  }
});

app.juegos = games;

function mostrar(mes){
  if ($(".juego").hasClass('d-yes')){
    $(".juego").addClass('d-none');
  }
  $("."+mes.id+"").addClass('d-yes').removeClass('d-none');
}