/* Set the width of the side navigation to 20% and the left margin of the page content to 20% and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("banner").style.marginLeft = "250px";

    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.margin = "0";
    document.getElementById("banner").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}


var mqd = window.matchMedia( '@media screen and (max-width: 720px)' );


if (mq.matches) {
    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
    function openNav() {
        document.getElementById("mySidenav").style.width = "90%";
        document.getElementById("main").style.marginLeft = "90%";
        document.getElementById("banner").style.marginLeft = "90%";

        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.margin = "0";
        document.getElementById("banner").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }

} else {

    /* Set the width of the side navigation to 20% and the left margin of the page content to 20% and add a black background color to body */
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
}



