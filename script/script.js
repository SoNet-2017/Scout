var larg = 250 ;

console.log(screen.width);

/* Set the width of the side navigation to 20% and the left margin of the page content to 20% and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = larg + "px";
    /*document.getElementById("main").style.marginLeft = "250px";*/
    document.getElementById("banner").style.marginLeft = larg + "px";
    document.getElementById("banner").style.width = screen.width - larg + "px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    /* document.getElementById("main").style.margin = "0"; */
    document.getElementById("banner").style.marginLeft = "0";
    document.getElementById("banner").style.width = screen.width + "px";
    document.body.style.backgroundColor = "white";
}

