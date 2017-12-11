//script for scroll indicator
/*function progress(scroll_top) {
    var el = document.getElementById("line_red");
    var max = document.getElementById("line").offsetHeight;
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    var height = el.offsetHeight;
    var newHeight = (((scroll_top+winHeight)/docHeight)*max)-8;
    el.style.height = newHeight + 'px';
}
var interval = 50;
var timer = window.setInterval(function(){
  var scroll_top = $(document).scrollTop();
progress(scroll_top);
if (yourCodeHasBeenExecuted === true) {
  window.clearInterval(timer);
}
}, interval);*/

//carousel script
$('.carousel-sync').on('slide.bs.carousel', function(ev) {
	var dir = ev.direction == 'right' ? 'prev' : 'next';
  $('.carousel-sync').not('.sliding').addClass('sliding').carousel(dir);
});
$('.carousel-sync').on('slid.bs.carousel', function(ev) {
  $('.carousel-sync').removeClass('sliding');
});

//script for parallax
    document.getElementById('button-1').checked = true;
    
    document.getElementById('stap1').onclick = function () {
      document.getElementById('button-2').checked = true;
      document.getElementById('button-1').checked = false;
    };
    document.getElementById('stap2').onclick = function () {
      document.getElementById('button-1').checked = true;
      document.getElementById('button-3').checked = false;
    };
    document.getElementById('stap3').onclick = function () {
      document.getElementById('button-1').checked = true;
      document.getElementById('button-3').checked = false;
    };

//script for Qr code reader from https://codepen.io/SitePoint/pen/WEbVzd/
function openQRCamera(node) {
  var reader = new FileReader();
  reader.onload = function() {
    node.value = "";
    qrcode.callback = function(res) {
      if(res instanceof Error) {
        alert("No QR code found. Please make sure the QR code is within the camera's frame and try again.");
      } else {
        node.parentNode.previousElementSibling.value = res;
      }
    };
    qrcode.decode(reader.result);
  };
  reader.readAsDataURL(node.files[0]);
}

function showQRIntro() {
  return confirm("Use your camera to take a picture of a QR code.");
}
