var collVps = document.getElementsByClassName("vpsCollapsible");
var i;

for (i = 0; i < collVps.length; i++) {
  collVps[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var collVpa = document.getElementsByClassName("vpaCollapsible");
var i;

for (i = 0; i < collVpa.length; i++) {
  collVpa[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var collReviews = document.getElementsByClassName("reviewsCollapsible");
var i;

for (i = 0; i < collReviews.length; i++) {
  collReviews[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// Get the modal
var modalVps = document.getElementById('myModalVps');

// Get the image and insert it inside the modal
var imgVps = document.getElementById('vpShelter');
var modalImgVps = document.getElementById("modalImgVpShelter");
imgVps.onclick = function(){
    modalVps.style.display = "block";
    modalImgVps.src = this.src;
}

// Get the <span> element that closes the modal
var spanVps = document.getElementsByClassName("closeVps")[0];

// When the user clicks on <span> (x), close the modal
spanVps.onclick = function() { 
  modalVps.style.display = "none";
}

// Get the modal
var modalVpa = document.getElementById('myModalVpa');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgVpa = document.getElementById('vpAmok');
var modalImgVpa = document.getElementById("modalImgVpAmok");
imgVpa.onclick = function(){
    modalVpa.style.display = "block";
    modalImgVpa.src = this.src;
}

// Get the <span> element that closes the modal
var spanVpa = document.getElementsByClassName("closeVpa")[0];

// When the user clicks on <span> (x), close the modal
spanVpa.onclick = function() { 
  modalVpa.style.display = "none";
}

// Get the modal
var modalReviews = document.getElementById('myModalReviews');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgReviews = document.getElementById('reviewsImg');
var modalImgReviews = document.getElementById("modalImgReviews");
imgReviews.onclick = function(){
    modalReviews.style.display = "block";
    modalImgReviews.src = this.src;
}

// Get the <span> element that closes the modal
var spanReviews = document.getElementsByClassName("closeReviews")[0];

// When the user clicks on <span> (x), close the modal
spanReviews.onclick = function() { 
  modalReviews.style.display = "none";
}

// Activate Carousel
$("#myCarousel").carousel();

// Enable Carousel Indicators
$(".item").click(function(){
    $("#myCarousel").carousel(1);
});

// Enable Carousel Controls
$(".left").click(function(){
    $("#myCarousel").carousel("prev");
});