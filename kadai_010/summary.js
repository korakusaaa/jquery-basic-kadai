$(function(){
    $('#change-color').on('click', function(){
        $('#target').css('color', 'orange');
    });
    $('#change-text').on('click', function(){
        $('#target').text('Have a good day!');
    });
    $('#fade-out').on('click', function(){
        $('#target').fadeOut();
    });
    $('#fade-in').on('click', function(){
        $('#target').fadeIn();
    });
});