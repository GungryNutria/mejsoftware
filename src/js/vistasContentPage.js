$(document).ready(function (e) {
    $('#section_header').load('src/views/_section_header.html', function(data) {
        $(this).html(data);
    })
});
$(document).ready(function (e) {
    $('#botonArriba').load('src/widget/BotonInicio.html', function(data) {
        $(this).html(data);
    })
});