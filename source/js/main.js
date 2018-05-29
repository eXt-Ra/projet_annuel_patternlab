import 'jquery-ui'
import noUiSlider from 'nouislider'

$(document).ready(function() {
    $('.dropdown').click(function (){
        $( this ).toggleClass( "is-active" );
    });
    // $( "#slider-range" ).slider({
    // const slider = document.getElementById('slider-range');
    // noUiSlider.create(slider, {
    //     start: [20, 80],
    //     connect: true,
    //     range: {
    //         'min': 0,
    //         'max': 100
    //     }
    // });

    var keypressSlider = document.getElementById('slider-range');
    var input0 = $('#input-with-keypress-0');
    var input1 = $('#input-with-keypress-1');
    var inputs = [input0, input1];

    noUiSlider.create(keypressSlider, {
        start: [20, 80],
        connect: true,
        range: {
            'min': 0,
            'max': 200
        }
    });

    // keypressSlider.noUiSlider.on('update', function( values, handle ) {
    //     inputs[handle].text(values[handle] + " €");
    // });

    var keypressSlider = document.getElementById('slider-range-avis');
    var input0 = $('#input-with-keypress-0-avis');
    var input1 = $('#input-with-keypress-1-avis');
    var inputs = [input0, input1];

    noUiSlider.create(keypressSlider, {
        start: [1, 10],
        connect: true,
        range: {
            'min': 1,
            'max': 10
        }
    });

    // keypressSlider.noUiSlider.on('update', function( values, handle ) {
    //     inputs[handle].text(values[handle]);
    // });
});



