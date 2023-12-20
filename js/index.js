const navbar = $('#navbar');
let cont = 1;

$('#menu').click((e) => {
    let src = $(e.target);

    navbar.css({ 'opacity': 1 })

    if (src.attr('src').split('-')[1] === 'hamburger.svg') {

        src.attr('src', './images/icon-close.svg');

        $(src).parent().append('<div id="block" class="header_container_block"></div>');

        navbar.slideDown();

    } else {

        src.attr('src', './images/icon-hamburger.svg');

        $('#block').remove();

        navbar.slideUp();

    };


});

setInterval(() => {

    var sizeWindows = 2;

    var porcentMove = 100;

    if (window.innerWidth < 768) {

        sizeWindows = 2;

    } else if ((window.innerWidth < 993)) {

        sizeWindows = 0;

    } else {

        porcentMove = 34;

        sizeWindows = 0;
    };

    slide(sizeWindows, porcentMove);

}, 6000);

function slide(sizeWindows, porcentMove) {

    if (parseInt($('#coments').children().css('right')) > (parseInt(window.innerWidth) * parseInt(sizeWindows))) {

        $('#coments').children().animate({ right: 0 }, 1000);

        cont = 0;
    };

    $('#coments').children().animate({ right: cont * porcentMove + '%' }, { duration: 1000 });

    cont++

};

$('#invitemsg').change((e)=>{ 

    removemsgerror(e);

})

$('#btnfooterform').click(function(e){

    e.preventDefault()

    const valformfooter = $('#invitemsg').val()

    if (valformfooter.length < 10){

        AddmsgError();

        return
    }

    if ( valformfooter.slice(valformfooter.length-10, valformfooter.length) !== '@gmail.com') {

        AddmsgError();

        return

    }

    for (let i = 0; i < valformfooter.length; i++) {

        if (valformfooter[i] === ' ') {

            AddmsgError();

            return
        }
        
    }

    removemsgerror($('#invitemsg'));

    $('#invitemsg').val('');

})

function AddmsgError() {
    $('#invitemsg').addClass('inputboxerror');

    $('#formfooter').append('<span class="footermsgerror">Please insert a valid email</span>');
}

function removemsgerror(e) {
    $(e.target).removeClass('inputboxerror');

    $('.footermsgerror').remove();
}
