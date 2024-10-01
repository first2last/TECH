var typed = new Typed(".multiple_text", {
    strings: [
        "IEEE SB | MMMUT",

    ],
    // strings: typed_strings.split(", "),
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


var loader = document.getElementById("preloder");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 7) {
        counter = 1;
    }
}, 5000);

function showMoreContent(eventId) {
    var moreContent = document.getElementById('more-content-' + eventId);
    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'inline';
    } else {
        moreContent.style.display = 'none';
    }
}


