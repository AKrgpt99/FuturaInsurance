$(document).ready(function () {
    $("#header").load("./views/header.html");
    $("#footer").load("./views/footer.html");

    if (sessionStorage.length === 0 && history.length === 1) {
        sessionStorage.setItem("url", "home.html");
        sessionStorage.setItem("title", "Home");
    }

    history.replaceState(
        sessionStorage.getItem("url"),
        sessionStorage.getItem("title"),
        $controllers_root + sessionStorage.getItem("url")
    );

    $("#content").load($templates_up + history.state);
    $("title").html(sessionStorage.getItem("title") + " • Futura Insurance");
});