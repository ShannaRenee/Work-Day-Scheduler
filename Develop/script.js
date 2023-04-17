$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

$('[id^="hour-"]').each(function ( i ) {
  var item = localStorage.getItem($(this).attr('id'));
  $(this).children('textarea').text(item);
})

$('[id^="hour-"]').each(function ( i ) {
  if ($(this).attr('id') === dayjs().format('[hour-]h')) {
    $(this).toggleClass('present');
    $('.present ~ div').toggleClass('future');
    $('.present').prevAll().toggleClass('past');
  }
})

$('button').on('click', function () {
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('textarea').val());
  })