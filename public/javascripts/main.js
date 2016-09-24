$('.button-collapse').sideNav();


var date = new Date();
var currentMonth = date.getMonth();
var currentDate = date.getDate();
var currentYear = date.getFullYear();
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 200, // Creates a dropdown of 15 years to control year
    max: new Date(currentYear,currentMonth,currentDate),
  });

