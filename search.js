$(window).on('load', function(){
    $('#search').bind('keyup', function() {
        let value = $(this).val().toLowerCase();
        $('#table-body tr').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        })
    })
});