$(document).ready(function() {
  $('.muscle-diagram img').hover(function() {
    let workout = '';
    if ($(this).attr('alt') === 'Squat Diagram') {
        workout = 'Targeted Workout: Squats';
    } else if ($(this).attr('alt') === 'Bench Diagram') {
        workout = 'Targeted Workout: Bench Press';
    } else if ($(this).attr('alt') === 'Back Diagram') { 
        workout = 'Targeted Workouts: Lat Pulldown, Cable Row, Rear Delt Flies';
    }
    $('#description').text(workout);
  }, function() {
      $('#description').text('Hover over a muscle to see workouts');
  });  

 
  $('.accordion h3').each(function() {
    $(this).append(' +'); //adds '+' to each header before any toggles
  });
  $('.accordion h3').click(function() {
    $(this).next('.content').slideToggle(); //toggle content visibility

    if($(this).hasClass('active')){
      $(this).html($(this).html().replace('-','+')); //changes - to + when collapsing
    } else {
      $(this).html($(this).html().replace('+','-')); //changes + to - when expanding
    }
    $(this).toggleClass('active'); //toggle active class
  })

});
