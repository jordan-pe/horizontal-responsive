

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



        var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
        var prlx_lyr_2 = document.getElementById('mountainTwo');  // mountain
        var prlx_lyr_3 = document.getElementById('prlx_lyr_3');
      //  var prlx_lyr_4 = document.getElementById('prlx_lyr_4');
        var prlx_lyr_5 = document.getElementById('testArea');
//var prlx_lyr_6 = document.getElementById('fadeBuild');



        prlx_lyr_1.style.left = -(window.pageXOffset/30)+'%';
        prlx_lyr_2.style.marginBottom = -(window.pageXOffset/600)+'%';
        prlx_lyr_3.style.marginBottom = -(window.pageXOffset/-95)+'%';
      //  prlx_lyr_4.style.strokeDashoffset = -(window.pageXOffset/-20);
         prlx_lyr_5.style.marginBottom = -(window.pageXOffset/-90)+'%',
         prlx_lyr_5.style.left = -(window.pageXOffset/50)+'%',
          prlx_lyr_5.style.opacity = +(window.pageXOffset/350);
       
    //   prlx_lyr_6.style.opacity = +(window.pageXOffset/350);
        }

        window.addEventListener("scroll", parallax, false);

        var curYPos = 0,
        curXPos = 0,
        curDown = false;

   // console.log("DOM fully loaded and parsed");





// window.addEventListener('mousemove', function(e){ 
//   if(curDown === true){
//     window.scrollTo(document.body.scrollLeft + (curXPos - e.pageX), document.body.scrollTop + (curYPos - e.pageY));
//   }
// });



// window.addEventListener('mousedown', function(e){ curDown = true; curYPos = e.pageY; curXPos = e.pageX; });
// window.addEventListener('mouseup', function(e){ curDown = false; });




//<!-- Preloader -->
    
      //<![CDATA[
        //   $(window).load(function() { // makes sure the whole site is loaded
        //   $('#status').fadeOut(); // will first fade out the loading animation
        //   $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        //   $('body').delay(350).css({'overflow':'visible'});
        // })
      //]]>



//<!-- Scroll button -->
  
        
      // var bodyWidth = $( "body" ).width(), // whole width of the body
      //     wWidth = $( window ).width(),// width of the viewport
      //     arrowButton = $( "#arrow-button" ),
      //     pos = 0;// start position

      // arrowButton.click(function() {
      //   if ( pos <= bodyWidth-wWidth ) {
      //     pos += wWidth+500;// after click add to start position width of the viewport
      //   } else {
      //     pos = 0; 
      //   }

      //   $('body').animate( { scrollLeft: pos }, 1500);
      // });


