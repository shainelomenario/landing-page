/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

document.addEventListener('DOMContentLoaded', function () {
    var fullName = document.getElementById('typewriter-swe');

    var typewriter = new Typewriter(fullName, {
        loop: true,   // Loop through the entire sequence
        delay: 75     // Adjust typing speed if needed
    });

    typewriter
        .typeString('Software Engineer')
        .pauseFor(2500)
        .deleteChars(21) 
        .pauseFor(500)
        .typeString('AI Engineer')
        .pauseFor(2500)
        .start();
        
});

// Show or hide the "Back to Top" button
window.onscroll = function() {
    var backToTopButton = document.getElementById("back-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};

// Scroll back to the top when the button is clicked with smooth scrolling
document.getElementById("back-to-top").onclick = function(event) {
    event.preventDefault();
    smoothScrollToTop(600); // Duration in milliseconds
};

// Function for smooth scrolling
function smoothScrollToTop(duration) {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    function scrollStep(currentTime) {
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, startPosition * (1 - easeInOutQuad(progress)));

        if (timeElapsed < duration) {
            requestAnimationFrame(scrollStep);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    requestAnimationFrame(scrollStep);
}
