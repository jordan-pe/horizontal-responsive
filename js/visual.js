// ATTEMPTS TO access svg data via object tag  

// document.addEventListener("DOMContentLoaded", function(event) {

//prlx_lyr_4.id = "prlx_lyr_4";

// var uvmIcon=document.querySelector("#uvmIcon");
// var htmlDocument= uvmIcon.contentDocument;



// window.onload=function() {


// Get the Object by ID
//   var a = document.getElementById("uvmIcon");
// Get the SVG document inside the Object tag
//  var svgDoc = a.contentDocument;
// Get one of the SVG items by ID;
//   var svgItem = svgDoc.getElementById("prlx_lyr_4");
// Set the colour to something else
// svgItem.setAttribute("fill", "lime");



  function parallax(){

    var prlx_lyr_1 = document.getElementById('ufo1');
    var prlx_lyr_2 = document.getElementById('mountainTwo');  // mountain
    var prlx_lyr_3 = document.getElementById('prlx_lyr_3');
    var prlx_lyr_4 = document.getElementById('prlx_lyr_4');
    var prlx_lyr_5 = document.getElementById('testArea');
  //var prlx_lyr_6 = document.getElementById('fadeBuild');

    var prlx_lyr_7 = document.getElementById('dragon');
    var prlx_lyr_8 = document.getElementById('gitIcon');

    prlx_lyr_1.style.left = -(window.pageXOffset/30)+'%';
    prlx_lyr_2.style.marginBottom = -(window.pageXOffset/600)+'%';
    prlx_lyr_3.style.marginBottom = -(window.pageXOffset/-95)+'%';
    prlx_lyr_4.style.strokeDashoffset = -(window.pageXOffset/-20);

    prlx_lyr_5.style.marginBottom = -(window.pageXOffset/-90)+'%',   // move envelope up
              prlx_lyr_5.style.left = -(window.pageXOffset/50)+'%', // move object left
              prlx_lyr_5.style.zIndex = +(window.pageXOffset/10),
              prlx_lyr_5.style.opacity = +(window.pageXOffset/350);// value within 0-1 range 


  //prlx_lyr_6.style.opacity = +(window.pageXOffset/350);
    prlx_lyr_7.style.left = +(window.pageXOffset/150)+'%';
    prlx_lyr_8.style.left= -(window.pageXOffset/50)+'%';


      }

      window.addEventListener("scroll", parallax, false);

      var curYPos = 0,
      curXPos = 0,
      curDown = false;





