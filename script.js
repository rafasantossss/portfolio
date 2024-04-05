document.addEventListener("DOMContentLoaded", function() {
    // Add the "visible" class to the body when the page loads
    document.body.classList.add("visible");

    // Remove the "visible" class from the body when the user clicks on a link
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            document.body.classList.remove("visible");
            setTimeout(function() {
                window.location.href = event.target.href;
            }, 500);
            event.preventDefault();
        });
    }
});