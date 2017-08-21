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
            .pauseFor(4000)         
            .typeString("Code it...")
            .pauseFor(4000)
            .deleteChars(10)
            .typeString('Launch it..')
            .pauseFor(4000)
            .deleteChars(11)
            .typeString("Own it.")
            .pauseFor(4000)                        
            .start();

});




