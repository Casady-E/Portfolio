

// Anchor Links
$(document).ready(function(){
var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);
});

//Sticky Navigation
$(document).ready(function() {

  var stickyToggle = function(sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = stickyWrapper.offset().top;
    if (scrollElement.scrollTop() >= stickyTop){
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else{
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function() {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function() {
      stickyToggle(sticky, stickyWrapper, $(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});

//Filter gallery
/*
    Author: Akshay Nagpal (github.com/akshaynagpal)
    License: MIT
*/
$(document).ready(function(){
    // clicking button with class "category-button"
    $(".category-button").click(function(){
        // get the data-filter value of the button
        var filterValue = $(this).attr('data-filter');
        // show all items
        if(filterValue == "all")
        {
            $(".all").show("slow");
        }
        else
        {
            // hide all items
            $(".all").not('.'+filterValue).hide("slow");
            // and then, show only items with selected data-filter value
            $(".all").filter('.'+filterValue).show("slow");
        }
    });
});

// Gallery LoadAll
$(document).ready(function(){
 $('.xtra-gal').addClass('hide');
});

$('.load-all').on('click', function (e) {
    $('.xtra-gal').removeClass("hide");
    $('.load-all-container').remove();
});
/*
function loadAll()
  {
    document.getElementById('.portfolio').classList.remove('.xtra-gal');
}
*/

//GSAP


var Anim = new TimelineMax();
Anim.staggerFrom(".portfolio-item", 0.25, {opacity:0, y:-100}, 0.1);
$(".category-button").click(function(){
Anim.play();
Anim.restart();
});
function allComplete(){
  console.log('all complete');
};



//Modal gallery

$(document).ready(function() {
$('#enlargeImageModal').on('show.bs.modal', function (event) {
  var title = $(event.relatedTarget);
  var galleryTitle = title.data('title');
  var image = $(event.relatedTarget);
  var galleryImage =  image.data('src');
  // $('.portfolio-item .gallery-image').attr('src');


  var modal = $(this);
      modal.find('.modal-title').text(galleryTitle);
      modal.find('.enlargeImageModalSource').attr('src', galleryImage);
		});
});

//Gallery Controls
$('.category-button').click(function(e) {
    $('.category-button').not(this).removeClass('active');
    $(this).toggleClass('active');
    e.preventDefault();
});


// BackToTop

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("return-to-top").style.display = "block";
    } else {
        document.getElementById("return-to-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//Smooth Scrolling



// ScrollReveal
window.sr = ScrollReveal();
sr.reveal('.reveal', { duration: 2000 });
sr.reveal('.about-item', { duration: 500 }, 25);
