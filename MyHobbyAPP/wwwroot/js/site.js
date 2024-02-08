// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// javascript to do calculations for lessons
$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = parseFloat($('#hours').val());
        var rate = parseFloat($('#rate').val().replace('$', ''));

        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a valid positive number of hours.');
            return;
        }

        var total = hours * rate;
        $('#total').val('$' + total.toFixed(2));
    });
});