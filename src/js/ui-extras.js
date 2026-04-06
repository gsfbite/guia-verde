// src/js/ui-extras.js
const btnBackToTop = document.getElementById("btn-back-to-top");

window.onscroll = function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btnBackToTop.style.display = "block";
    } else {
        btnBackToTop.style.display = "none";
    }
};

btnBackToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});