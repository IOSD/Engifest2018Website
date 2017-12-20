$(document).ready(function () {


    $('#mySidenav a').on('click' , function () {
        var q  = '#btn' + this.innerText ;
        console.log(q);
        closeNav();
        document.querySelector( q ).click();
    });

    $('.tab-pane h1').on('click' , function () {
        console.log('Trigger');
        this.parentNode.querySelector('.left a').click();
    });

    function openNav() {
        document.getElementById("mySidenav").style.width = "25vw";
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    $('.right').on('click' , function(){
        openNav() ;
        console.log('Trigger')
    });

    $('.closebtn').on('click' , function(){
        closeNav() ;
    });

    $('#go-left').on('click' , function(){
        console.log('Trigger');
        var active, prev;
        var element = document.querySelector('.gallery-nav');
        active = element.querySelector('.gallery-nav__item--current');

        prev =  active.previousElementSibling;
        prev.click() ;
    });

    $('#go-right').on('click' , function(){
        console.log('Trigger');
        var active, next;
        var element = document.querySelector('.gallery-nav');
        active = element.querySelector('.gallery-nav__item--current');

        next =  active.nextElementSibling;
        console.log('Next : '  , next);
        next.click() ;
    });

    $("#btnArt").animatedModal({
        modalTarget: 'eventsArt',
        animatedIn: 'zoomIn',
        animatedOut: 'bounceOut',
        color: '#cccccc'
    });


    $("#btnart_and_furious").animatedModal({
        modalTarget: 'art_and_furious',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btn3d_art").animatedModal({
        modalTarget: '3d_art',
        animatedIn: 'bounceInUp',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });
    // music
    $("#btnMusic").animatedModal({
        modalTarget: 'eventsMusic',
        animatedIn: 'zoomIn',
        animatedOut: 'bounceOut',
        color:'#cccccc'
    });

    $("#btnengi_idol").animatedModal({
        modalTarget: 'engi_idol',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btnvocalicious").animatedModal({
        modalTarget: 'vocalicious',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btnballendeers").animatedModal({
        modalTarget: 'ballendeers',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btnvrind").animatedModal({
        modalTarget: 'vrind',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btntows_a_show").animatedModal({
        modalTarget: 'tows_a_show',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btnacoustic_alchemy").animatedModal({
        modalTarget: 'acoustic_alchemy',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });
    // end music

    // start dance
    $("#btnDance").animatedModal({
        modalTarget: 'eventsDance',
        animatedIn: 'zoomIn',
        animatedOut: 'bounceOut',
        color:'#cccccc'
    });

    $("#btnspandan").animatedModal({
        modalTarget: 'spandan',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btnanushthaan").animatedModal({
        modalTarget: 'anushthaan',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btnswitch_the_funk_up").animatedModal({
        modalTarget: 'switch_the_funk_up',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });
    // dance end

    // start drama
    $("#btnDrama").animatedModal({
        modalTarget: 'eventsDrama',
        animatedIn: 'zoomIn',
        animatedOut: 'bounceOut',
        color:'#cccccc'
    });

    $("#btnnukkad").animatedModal({
        modalTarget: 'nukkad',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btnnatya").animatedModal({
        modalTarget: 'natya',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    // end drama

    // start literary
    $("#btnLiterary").animatedModal({
        modalTarget: 'eventsLiterary',
        animatedIn: 'zoomIn',
        animatedOut: 'bounceOut',
        color:'#cccccc'
    });

    $("#btnwar_of_words").animatedModal({
        modalTarget: 'war_of_words',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });
    $("#btncreative_writing").animatedModal({
        modalTarget: 'creative_writing',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });
    $("#btnmixed_bag").animatedModal({
        modalTarget: 'mixed_bag',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btnkavyanjana").animatedModal({
        modalTarget: 'kavyanjana',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btnjust_a_minute").animatedModal({
        modalTarget: 'just_a_minute',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });
    $("#btndrishtikon").animatedModal({
        modalTarget: 'drishtikon',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });
    //  end literary

    // eventsPro_Shows

    $("#btnProShows").animatedModal({
        modalTarget: 'eventsProShows',
        animatedIn: 'zoomIn',
        animatedOut: 'bounceOut',
        color:'#cccccc'
    });

    // pro shows end

    // fashion start
    $("#btnFashion").animatedModal({
        modalTarget: 'eventsFashion',
        animatedIn: 'zoomIn',
        animatedOut: 'bounceOut',
        color:'#cccccc'
    });

    $("#btnparidhan").animatedModal({
        modalTarget: 'paridhan',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btncampus_princess").animatedModal({
        modalTarget: 'campus_princess',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    // fashion end

    // misc start
    $("#btnMisc").animatedModal({
        modalTarget: 'eventsMisc',
        animatedIn: 'zoomIn',
        animatedOut: 'bounceOut',
        color:'#cccccc'
    });

    $("#btnshakedown").animatedModal({
        modalTarget: 'shakedown',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });

    $("#btnkaleidoscope").animatedModal({
        modalTarget: 'kaleidoscope',
        animatedIn: 'lightSpeedIn',
        animatedOut: 'bounceOutDown',
        color: '#cccccc'
    });


    $("#btnInformal").animatedModal({
        modalTarget: 'eventsInformal',
        animatedIn: 'zoomIn',
        animatedOut: 'bounceOut',
        color:'#cccccc'
    });

})



$(document).ready(function () {

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    };

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */
                $('#go-right').click()

            } else {
                /* right swipe */
                $('#go-left').click()
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };
});
