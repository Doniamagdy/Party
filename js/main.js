
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}


$(document).ready(function(){
    $("#f_p").click(function(){
      $("#first").toggle();
  
    });
  });

  $(document).ready(function(){
    $("#s_p").click(function(){
      $("#second").toggle();
  
    });
  });

  $(document).ready(function(){
    $("#t_p").click(function(){
      $("#third").toggle();
  
    });
  });

  $(document).ready(function(){
    $("#fo_p").click(function(){
      $("#fourth").toggle();
  
    });
  });

  function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
      let endTime = new Date("25 October 2023 9:56:00 GMT+01:00");			
        endTime = (Date.parse(endTime) / 1000);
  
        let  now = new Date();
        now = (Date.parse(now) / 1000);
  
        let  timeLeft = endTime - now;
  
        let  days = Math.floor(timeLeft / 86400); 
        let  hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        let  minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        let  seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
    
        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }
  
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");		
  
    }
  
    setInterval(function() { makeTimer(); }, 1000);

    

    $(function(){
       var maxlength = 100;
       $("#description").keyup(function(){
        var currentlength = $(this).val().length;
        var remaining = maxlength-currentlength;
        $("#written").html(currentlength+" written");
        $("#remaining").html(remaining+" remaining");
       });
     });

