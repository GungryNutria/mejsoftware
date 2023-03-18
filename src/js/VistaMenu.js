$(document).ready(function (e) {
    $('#section_menu').load('src/views/templates/section_menu.html', function(data) {
        $(this).html(data);
    })
});