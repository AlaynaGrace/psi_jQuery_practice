/*
  Write code to make the number on the DOM countdown each second.
  Only one number should be displayed on the DOM at a time.

  HINT: look into javascript's setInterval() function.


  BONUS 1: Add a button for the user to reset the timer.
  BONUS 2: Make something cool happen using a jQuery animation when the timer gets to zero.
*/
$(document).ready(function(){
  var counter = $('.count');
  setInterval(function(){
    if(parseInt(counter.text()) !== 0){
      counter.text(parseInt(counter.text())-1);
    }
    else{
      counter.text(0);
    }
  },1000);
  
});
