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

