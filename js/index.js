const navbar = $('#navbar');
var cont = 0;

var activenexpre = true;

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

$(window).resize(()=>{
    cont = -1;
    
    activenexpre = false;

    slide(3);
});

setInterval(() => {
    if (Boolean(activenexpre)) {

        slide(3);


    } else {

        setInterval(() => { activenexpre = true; }, 20000);

    };

}, 16000);

function slide(btnnexpprev) {

    var sizeWindows = 2;

    var porcentMove = 100;

    if (window.innerWidth < 768) {

        sizeWindows = 2;

    } else if ((window.innerWidth < 993)) {

        sizeWindows = 0;

    } else {

        porcentMove = 33;

        sizeWindows = 0;
    };

    if (parseInt($('#coments').children().css('right')) > (parseInt(window.innerWidth) * parseInt(sizeWindows)) && parseInt(btnnexpprev) === 3) {

        $('#coments').children().animate({ right: 0 }, 1000);

        cont = -1;
    };

    if (parseInt(btnnexpprev) === 0 || parseInt(btnnexpprev) === 3) {

        cont++;

    } else if (parseInt(btnnexpprev) === 1) {

        cont--;

    };

    if (window.innerWidth < 768 && cont > 3) {

        cont = 3

    } else if (window.innerWidth > 768 && cont > 2) {

        cont = 2

    } else if  (window.innerWidth > 993 && cont > 1){

        cont = 1

    } else if (cont < 0) {

        cont = 0

    }

    $('#coments').children().animate({ right: cont * parseInt(porcentMove) + '%' }, { duration: 1000 });

    switchbtnnextprev(cont, sizeWindows);

};

$('#invitemsg').change((e) => {

    removemsgerror(e);

})

$('#btnfooterform').click(function (e) {

    e.preventDefault()

    const valformfooter = $('#invitemsg').val()

    if (valformfooter.length < 10) {

        AddmsgError();

        return
    }

    if (valformfooter.slice(valformfooter.length - 10, valformfooter.length) !== '@gmail.com') {

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

function switchbtnnextprev(contnew, sizeWindows) {
    if (parseInt(contnew) === 0) {

        $('#nextpreright').hide(500);

    } else {

        $('#nextpreright').show(500);

    }

    if ((parseInt(sizeWindows) === 0 && contnew === 1) || (parseInt(sizeWindows) === 2 && contnew === 3)) {

        $('#nextpreleft').hide(500);

    } else {

        $('#nextpreleft').show(500);

    }
}

$('#btnsnextprev').click((e) => {

    if (e.target.tagName === 'NAV') {

        return

    }

    activenexpre = false;

    if (e.target.tagName === 'BUTTON') {

        if (e.target.id === 'nextpreleft') {

            slide(0)

        } else if (e.target.id === 'nextpreright') {

            slide(1)

        }

        return

    }


    if ($(e.target).parents('button')[0].id === 'nextpreleft') {

        slide(0)

    } else if ($(e.target).parents('button')[0].id === 'nextpreright') {

        slide(1)

    }

})

function AddmsgError() {
    $('#invitemsg').addClass('inputboxerror');

    $('#formfooter').append('<span class="footermsgerror">Please insert a valid email</span>');
}

function removemsgerror(e) {
    $(e.target).removeClass('inputboxerror');

    $('.footermsgerror').remove();
}
