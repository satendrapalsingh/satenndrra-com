// main javascript code //


$(function(){

    var typed= document.getElementById('typed');   // typewriter output for big screens

    
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
    
    var typewriter = new Typewriter(typedSmall, {
        loop: true,
        blinkSpeed: 10,
        typingSpeed: 200
    });

        typewriter
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

$(function(){
    
// filterizr.js function reference: http://yiotis.net/filterizr/    
    var filterizd = $('.filtr-container').filterizr({
    //options object
    });
            
});
