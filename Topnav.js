function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "animated fadeIn delay-2s topnav" || x.className === "topnav" ) {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }