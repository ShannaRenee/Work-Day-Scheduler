// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  $('button').on('click', function() {
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('textarea').val());

  })



$('[id^="hour-"]').each(function ( i ) {
  var item = localStorage.getItem($(this).attr('id'));
  $(this).children('textarea').text(item);
})
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // TODO: Add code to display the current date in the header of the page.
});
 