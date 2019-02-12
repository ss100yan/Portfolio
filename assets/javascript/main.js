$(document).ready(function() {
   
    $('.sidenav').sidenav();

    $("#container2").hide();
    $("#container3").hide();
       
    
    $(".Portfolio").click(function(){
    $("#container").hide();
    $("#container2").hide();
    $("#container3").show();
  });
  
  $(".About").click(function(){
    $("#container").show();
    $("#container2").hide();
    $("#container3").hide();
  });
  $(".Contact").click(function(){
    $("#container2").show();
    $("#container").hide();
    $("#container3").hide();
  });
});