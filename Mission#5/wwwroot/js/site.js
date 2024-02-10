// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#calculate-btn').click(function () {
        // Get the number of hours from the input field
        var hours = parseInt($('#hours').val());

        // Validate if the input is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert('Please enter a positive number for the number of hours.');
            return;
        }

        // Calculate the total
        var hourlyRate = 33; // Default hourly rate
        var total = hours * hourlyRate;

        // Display the total in the output field
        $('#total').val('$' + total.toFixed(2));
    });
});

