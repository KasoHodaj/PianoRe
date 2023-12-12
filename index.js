var btnLength = document.querySelectorAll(".piece").length;
var isPlaying = false;
for (var i = 0; i < btnLength; i++) {
    document.querySelectorAll(".piece")[i].addEventListener("click", function () {
        var buttonInnerHtml = this.innerHTML;
        
        if(!isPlaying){
            audioPlay(buttonInnerHtml);
            buttonAnimation(buttonInnerHtml);
        }        
    });
}
 


function audioPlay(key) {
    
    switch (key) {
        case "one":
            var audio1 = new Audio('Sound/1.mp3');
            audio1.play();
            isPlaying = true;
            break;
        case "two":
            var audio2 = new Audio('Sound/2.mp3');
            audio2.play();
            isPlaying = true;
            break;
        case "three":
            var audio3 = new Audio('Sound/3.mp3'); // Declare 'audio3' using 'var'
            audio3.play();
            isPlaying = true;
            break;
        case "four":
            var audio4 = new Audio('Sound/4.mp3'); // Declare 'audio4' using 'var'
            audio4.play();
            isPlaying = true;
            break;
        default:
            console.log("Unhandled key: " + key);
    }
}

function buttonAnimation(key) {
    var AB = document.querySelector("." + key);
    AB.classList.add("pressed");

   
}
