// main javscript code

// typewriter.js function reference: https://safi.me.uk/typewriterjs/

$(function(){

    var typed = document.getElementById('typed');
    
    var typewriter = new Typewriter(typed, {
        loop: true,
        blinkSpeed: 10,
        typingSpeed: 200
    });

        typewriter
            .typeString("Essential Tech Skills for Entrepreneurs")
            .pauseFor(2500)
            .deleteChars(13)
            .typeString('Solopreneurs')
            .pauseFor(2500)
            .deleteChars(12)
            .typeString("Startup-Founders")
            .start();

});




