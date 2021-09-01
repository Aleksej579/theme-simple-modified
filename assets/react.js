$(document).ready(function () {

    $('#ex1').modal({
        fadeDuration: 250,
        fadeDelay: 0.80
    });

    function sayHi() {
        $.modal.close();
    }

    setTimeout(sayHi, 10000);

    $({ Counter: 0 }).animate({
        Counter: $('.Single').text()
    }, {
        duration: 62000,
        easing: 'swing',
        step: function () {
            $('.Single').text(Math.ceil(this.Counter));
        }
    });


});