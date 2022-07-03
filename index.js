function myFunction() {
    var x = document.getElementById("myAudio").autoplay;
    document.getElementById("demo").innerHTML = x;
  }
  var source = "The_most_Soothing_Happy_Birthday_Piano_Cover_Good_morning_to_youMP3.mp3"
var audio = document.createElement("audio");
audio.load()
audio.addEventListener("load", function() {
  audio.play();
}, true);
audio.src = source;
