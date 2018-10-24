$(document).ready(function () {
    $("#content").load("lorem.html");
});

function openBooks(author) {
    document.cookie = "name=" + author;
}