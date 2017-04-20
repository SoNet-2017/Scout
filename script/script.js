var mq = window.matchMedia( "(min-width: 720px)" );


if (mq.matches) {
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
    function openNav() {
        document.getElementById("mySidenav").style.width = "20%";
        document.getElementById("main").style.marginLeft = "20%";
        document.getElementById("banner").style.marginLeft = "20%";

        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.margin = "0 auto";
        document.getElementById("banner").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }

} else {
    // window width is less than 500px
}



