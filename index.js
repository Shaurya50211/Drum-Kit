for (i = 0; i < document.querySelectorAll("button").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML
        drumSwitch(buttonInnerHTML)

    })
}

document.addEventListener("keydown", function(e) {
    drumSwitch(e.key)
})

function drumSwitch(event) {
    switch (event) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play()
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play()
            break;

        case "s":
            var tom1 = new Audio('sounds/tom-3.mp3');
            tom1.play()
            break;

        case "d":
            var tom2 = new Audio('sounds/tom-4.mp3');
            tom2.play()
            break;

        case "j":
            var tom1 = new Audio('sounds/snare.mp3');
            tom1.play()
            break;

        case "k":
            var tom2 = new Audio('sounds/crash.mp3');
            tom2.play()
            break;

        case "l":
            var tom1 = new Audio('sounds/kick-bass.mp3');
            tom1.play()
            break;

        default: console.log(buttonInnerHTML)
    }
}