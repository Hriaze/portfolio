document.getElementById("resize-bar").addEventListener('drag', function (e){
  e = e || window.event;

  var pageX = e.pageX;
  var newWidth = pageX-45;

  document.getElementById('control-img').style.width = newWidth.toString().concat("px");

  var newHeight = (document.getElementById("streaming-cam").offsetHeight).toString().concat("px");
  document.getElementById('resize-bar').style.height = newHeight;
  document.getElementById('streaming-interactive').style.height = newHeight;

  var rightWidth = (document.getElementById("streaming").offsetWidth)-(document.getElementById("control-img").offsetWidth)-12;

  document.getElementById('streaming-interactive').style.width = rightWidth.toString().concat('px');

  document.getElementById('streaming-tab-row').style.width = rightWidth.toString().concat('px');

  console.log(document.getElementById("streaming").offsetWidth, newWidth, rightWidth);
});

window.addEventListener('load', function(){
  var resize_bar_height = (document.getElementById("streaming-cam").offsetHeight).toString().concat("px");

  document.getElementById('resize-bar').style.height = resize_bar_height;

  document.getElementById('streaming-interactive').style.height = resize_bar_height;

  var rightWidth = (document.getElementById("streaming").offsetWidth)-(document.getElementById("control-img").offsetWidth)-12;

  document.getElementById('streaming-interactive').style.width = rightWidth.toString().concat('px');

});
