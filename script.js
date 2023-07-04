
// Get the video

var video = document.getElementById("myVideo");

if (window.innerWidth > window.innerHeight || window.innerWidth > 960) {
    var video = document.getElementById("myVideo");
  } else if(window.matchMedia("(orientation:landscape)").matches) {
    var video = document.getElementById("myVideo2");
}
      else{
        var video = document.getElementById("myVideo2");
      }
  