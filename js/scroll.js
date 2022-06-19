window.addEventListener("scroll", headerdown(), headerup());

function headerdown() {
    window.addEventListener("scroll", function() {
        let headerdown = this.document.querySelector("header");
        headerdown.classList.toggle("headerdown", window.scrollY > 0);
    })
}

function headerup() {
    window.addEventListener("scroll", function() {
        let headerup = this.document.querySelector("header");
        headerup.classList.toggle("headerup", window.scrollY == 0);
    })
}

let counter = 1;

function setcounter(x) {
    counter = x;
}
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 7000);