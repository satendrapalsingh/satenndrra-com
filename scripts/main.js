// main javscript code

// typewriter.js function reference: https://safi.me.uk/typewriterjs/

$(function(){

    var typedBig= document.getElementById('typed-big');   // typewriter output for big screens
    var typedSmall= document.getElementById('typed-small');   // typewriter output for big screens

    
    var typewriter = new Typewriter(typedBig, {
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
    
    var typewriter = new Typewriter(typedSmall, {
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




