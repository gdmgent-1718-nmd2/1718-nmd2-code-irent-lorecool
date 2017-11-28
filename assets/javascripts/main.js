//script for scroll indicator
function checkscroll(scroll_top) {
  var diffrence = 20;

  if (scroll_top >= $('#point01').position().top-diffrence && scroll_top <= $('#point01').position().top+diffrence){
      $('#section-01').addClass("active");
      $('#section-02').removeClass("active");
    $('#section-03').removeClass("active");
      }
  if (scroll_top >= $('#point02').position().top-diffrence-20 && scroll_top <= $('#point02').position().top+diffrence){
    $('#section-01').removeClass("active");
      $('#section-02').addClass("active");
    $('#section-03').removeClass("active");
      
      }
  if (scroll_top >= $('#point03').position().top-diffrence && scroll_top >= $('#point03').position().top+diffrence){
      $('#section-01').removeClass("active");
      $('#section-02').removeClass("active");
    $('#section-03').addClass("active");
      }
}

function progress(scroll_top) {
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
checkscroll(scroll_top);
progress(scroll_top);

if (yourCodeHasBeenExecuted === true) {
  window.clearInterval(timer);
}
}, interval);

//carousel script
document.getElementById('carousel-button-2').checked=true;

document.getElementById('carousel-button-1').onclick = function () {
  document.getElementById('img-left').src="https://picsum.photos/150x150";
  document.getElementById('img-center').src="http://via.placeholder.com/150x150";
  document.getElementById('img-right').src="http://via.placeholder.com/150x150";

  document.getElementById('carousel-button-1').checked=true;
  document.getElementById('carousel-button-2').checked=false;
  document.getElementById('carousel-button-3').checked=false;
};

document.getElementById('carousel-button-2').onclick = function () {
  document.getElementById('img-center').src="https://picsum.photos/150x150";
  document.getElementById('img-left').src="http://via.placeholder.com/150x150";
  document.getElementById('img-right').src="http://via.placeholder.com/150x150";

    document.getElementById('carousel-button-2').checked=true;
    document.getElementById('carousel-button-1').checked=false;
    document.getElementById('carousel-button-3').checked=false;
}; 

  document.getElementById('carousel-button-3').onclick = function () {

    document.getElementById('img-right').src="https://picsum.photos/150x150";
    document.getElementById('img-center').src="http://via.placeholder.com/150x150";
    document.getElementById('img-left').src="http://via.placeholder.com/150x150";
    
      document.getElementById('carousel-button-3').checked=true;
      document.getElementById('carousel-button-1').checked=false;
      document.getElementById('carousel-button-2').checked=false;
    };

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

