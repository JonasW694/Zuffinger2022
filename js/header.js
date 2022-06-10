function header() {
    window.addEventListener("scroll", function() {
        var header = this.document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    })
}
window.addEventListener("scroll", header());