$(document).ready(function (e) {
    $('#root').load('src/views/indexHome.html', function (data) {
        $(this).html(data);
    });
});
