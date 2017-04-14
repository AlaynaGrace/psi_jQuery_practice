/*
  Write code to make the number on the DOM countdown each second.
  Only one number should be displayed on the DOM at a time.

  HINT: look into javascript's setInterval() function.


  BONUS 1: Add a button for the user to reset the timer.
  BONUS 2: Make something cool happen using a jQuery animation when the timer gets to zero.
*/
$(document).ready(function(){
  var counter = $('.count');
  var imageArray = ["https://cdn.meme.am/instances/55130291.jpg","https://cdn.meme.am/cache/instances/folder514/65272514.jpg",
"http://i3.kym-cdn.com/photos/images/facebook/000/638/746/c3d.png","http://i2.kym-cdn.com/photos/images/facebook/000/330/923/d5e.jpg",
"http://i1.kym-cdn.com/photos/images/original/000/402/782/1d4.gif","http://66.media.tumblr.com/tumblr_mah2otRzdq1rn8uag.png",
"https://img0.etsystatic.com/066/0/11075589/il_570xN.780650538_bi6w.jpg","https://cdn.meme.am/cache/instances/folder170/53402170.jpg",
"http://www.clipartkid.com/images/42/protected-gambar-stiker-2-star-great-job-YOccIf-clipart.jpg","https://balancebest.co.uk/33107-thickbox_default/you-did-it-shooting-star-shape-p35-pkt.jpg",
"https://i.ytimg.com/vi/GPk-ugQrMf8/hqdefault.jpg"];
  setInterval(function(){
    if(parseInt(counter.text()) !== 0){
      //$('.imgDiv').empty();
      counter.text(parseInt(counter.text())-1);
    }
    else{
      counter.text(0);
    var rand = Math.floor(Math.random() * imageArray.length);
    $('.imgDiv').empty();
    $('.imgDiv').append("<img src='"+imageArray[rand]+"'>");
    }
  },1000);

  $('.reset').on('click',function(){
    $('.imgDiv').empty();
    counter.text(10);
  });
});
