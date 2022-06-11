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