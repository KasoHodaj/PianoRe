var btnLength = document.querySelectorAll(".piece").length;

for (var i = 0; i < btnLength; i++) {
    document.querySelectorAll(".piece")[i].addEventListener("click", function(){
        var buttonInnerHtml = this.innerHTML;
        audioPlay(buttonInnerHtml);  
    });
}

document.addEventListener('keypress', function (event) {
    audioPlay(event.key);
    
});

function audioPlay(key){
    switch (key) {
        case "1":
            var audio1 = new Audio('Sound/1.mp3');
            audio1.play();
            break;
        case "2":
            var audio2 = new Audio('Sound/2.mp3');
            audio2.play();
            break;
        case "3":
            audio3 = new Audio('Sound/3.mp3');
            audio3.play();
            break;
        case "4":
            audio4 = new Audio('Sound/4.mp3');
            audio4.play();
            break;
        default:
            console.log(buttonInnerHtml);
    }
}

