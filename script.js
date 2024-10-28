$(document).ready(function() {
  $('.muscle-diagram img').hover(function() {
      $(this).siblings('.description').text('Targeted Workout: ' + ($(this).attr('alt') === 'Squat Diagram' ? 'Barbell or Dumbbell Squats' : 'Bench Press'));
  }, function() {
      $(this).siblings('.description').text('Hover over a muscle to see workout to do');
  });  

  $('.accordion h3').click(function() {
      $(this).next('.content').slideToggle();
      $(this).toggleClass('active');
  });
});
