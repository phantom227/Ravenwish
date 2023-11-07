$(function(){   
    var gResearch = $(".gResearchMarker").offset().top;
    var gDesign = $(".gDesignMarker").offset().top;
    var gAnimation = $(".gAnimationMarker").offset().top;
    var sResearch = $(".sResearchMarker").offset().top;
    var sIdeation = $(".sIdeationMarker").offset().top;
    var sPrototyping = $(".sPrototypingMarker").offset().top;
    
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop >= gResearch){
            console.log("item has reached the top");
            document.getElementById('gResearch').style.background = "#FF4131";
            document.getElementById('gResearch').style.color = "white";
            document.getElementById('gDesign').style.background = "white";
            document.getElementById('gDesign').style.color = "#0086F8"
            document.getElementById('gAnimation').style.background = "white";
            document.getElementById('gAnimation').style.color = "#00AF56"
        }
        
        if (scrollTop >= gDesign) {
            console.log("item has reached the top 2");
            document.getElementById('gDesign').style.background = "#0086F8";
            document.getElementById('gDesign').style.color = "white"
            document.getElementById('gResearch').style.background = "white";
            document.getElementById('gResearch').style.color = "#FF4131";
            document.getElementById('gAnimation').style.background = "white";
            document.getElementById('gAnimation').style.color = "#00AF56"
        }

        if (scrollTop >= gAnimation) {
            console.log("item has reached the top 2");
            document.getElementById('gAnimation').style.background = "#00AF56";
            document.getElementById('gAnimation').style.color = "white"
            document.getElementById('gDesign').style.background = "white";
            document.getElementById('gDesign').style.color = "#0086F8"
            document.getElementById('gResearch').style.background = "white";
            document.getElementById('gResearch').style.color = "#FF4131";
        }

        if (scrollTop >= sResearch) {
          console.log("item has reached the top 2");
          document.getElementById('sResearch').style.background = "#023667";
          document.getElementById('sResearch').style.color = "white"
          document.getElementById('sIdeation').style.background = "white";
          document.getElementById('sIdeation').style.color = "#023667"
          document.getElementById('sPrototyping').style.background = "white";
          document.getElementById('sPrototyping').style.color = "#023667";
      }

      if (scrollTop >= sIdeation) {
        console.log("item has reached the top 2");
        document.getElementById('sIdeation').style.background = "#023667";
        document.getElementById('sIdeation').style.color = "white"
        document.getElementById('sResearch').style.background = "white";
        document.getElementById('sResearch').style.color = "#023667"
        document.getElementById('sPrototyping').style.background = "white";
        document.getElementById('sPrototyping').style.color = "#023667";
    }

    if (scrollTop >= sPrototyping) {
      console.log("item has reached the top 2");
      document.getElementById('sPrototyping').style.background = "#023667";
      document.getElementById('sPrototyping').style.color = "white"
      document.getElementById('sResearch').style.background = "white";
      document.getElementById('sResearch').style.color = "#023667"
      document.getElementById('sIdeation').style.background = "white";
      document.getElementById('sIdeation').style.color = "#023667";
  }

    });});


    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
      
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 1000, function(){
         
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          } // End if
        });
      });

      function openNav() {
        document.getElementById("myNav").style.height = "100%";
      }
      
      function closeNav() {
        document.getElementById("myNav").style.height = "0%";
      }

 