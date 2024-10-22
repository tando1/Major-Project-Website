$(document).ready(function() {
  $('.muscle-diagram img').hover(function() {
      $('#description').text('Targeted Workout: Squats');
  }, function() {
      $('#description').text('Hover over a muscle to see workouts');
  });

  $('.accordion h3').click(function() {
      $(this).next('.content').slideToggle();
      $(this).toggleClass('active');
  });
});
