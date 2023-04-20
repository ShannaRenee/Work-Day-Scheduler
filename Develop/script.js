$('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

$('[id^="hour-"]').each(function ( i ) {
  var item = localStorage.getItem($(this).attr('id'));
  $(this).children('textarea').text(item);
})

$('[id^="hour-"]').each(function ( i ) {
  var rowHour = parseInt($(this).attr('id').split('-')[1]);
  var currentHour = dayjs().hour();

  if (rowHour < currentHour) {
    $(this).removeClass('present');
    $(this).removeClass('future');
    $(this).addClass('past');
  
  } else if (rowHour === currentHour) {
    $(this).removeClass('past')
    $(this).removeClass('future')
    $(this).addClass('present')
    
  } else {
    $(this).removeClass('present')
    $(this).removeClass('past')
    $(this).addClass('future');
  }
})

$('button').on('click', function () {
    localStorage.setItem($(this).parent().attr('id'), $(this).siblings('textarea').val());
  })
