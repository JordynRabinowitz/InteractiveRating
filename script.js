$("#num1").hover(function(){
  $("#num1").css("background-color","hsl(25, 97%, 53%)");
  $("#num1").css("color", "white");}, function(){  $("#num1").css("background-color","hsl(213, 19%, 25%)");
  $("#num1").css("color","hsl(216, 12%, 54%)");})
$("#num2").hover(function(){  $("#num2").css("background-color","hsl(25, 97%, 53%)");
  $("#num2").css("color", "white");}, function(){  $("#num2").css("background-color","hsl(213, 19%, 25%)");
  $("#num2").css("color","hsl(216, 12%, 54%)");})
$("#num3").hover(function(){  $("#num3").css("background-color","hsl(25, 97%, 53%)");
  $("#num3").css("color", "white");}, function(){  $("#num3").css("background-color","hsl(213, 19%, 25%)");
  $("#num3").css("color","hsl(216, 12%, 54%)");})
$("#num4").hover(function(){  $("#num4").css("background-color","hsl(25, 97%, 53%)");
  $("#num4").css("color", "white");}, function(){  $("#num4").css("background-color","hsl(213, 19%, 25%)");
  $("#num4").css("color","hsl(216, 12%, 54%)");})
$("#num5").hover(function(){  $("#num5").css("background-color","hsl(25, 97%, 53%)");
  $("#num5").css("color", "white");}, function(){  $("#num5").css("background-color","hsl(213, 19%, 25%)");
  $("#num5").css("color","hsl(216, 12%, 54%)");})


$("#select").hide();
$("#thank").hide();
$("#paragraph").hide();
$("#image").hide();
let numSelected = 0;

$("#num1").click(function(){
  $("#num1").css("background-color","hsl(217, 12%, 63%)");
  $("#num1").css("color", "white");

  $("#num2").css("background-color","hsl(213, 19%, 25%)");
  $("#num2").css("color","hsl(216, 12%, 54%)");

  $("#num3").css("background-color","hsl(213, 19%, 25%)");
  $("#num3").css("color","hsl(216, 12%, 54%)");

    $("#num4").css("background-color","hsl(213, 19%, 25%)");
  $("#num4").css("color","hsl(216, 12%, 54%)");

    $("#num5").css("background-color","hsl(213, 19%, 25%)");
  $("#num5").css("color","hsl(216, 12%, 54%)");
 $("#num1").unbind('mouseenter mouseleave');
  
  numSelected = 1;
})

$("#num2").click(function(){
  $("#num2").css("background-color","hsl(217, 12%, 63%)");
  $("#num2").css("color", "white");

  $("#num1").css("background-color","hsl(213, 19%, 25%)");
  $("#num1").css("color","hsl(216, 12%, 54%)");

  $("#num3").css("background-color","hsl(213, 19%, 25%)");
  $("#num3").css("color","hsl(216, 12%, 54%)");

    $("#num4").css("background-color","hsl(213, 19%, 25%)");
  $("#num4").css("color","hsl(216, 12%, 54%)");

    $("#num5").css("background-color","hsl(213, 19%, 25%)");
  $("#num5").css("color","hsl(216, 12%, 54%)");

   $("#num2").unbind('mouseenter mouseleave');
  numSelected = 2;
})

$("#num3").click(function(){
  $("#num3").css("background-color","hsl(217, 12%, 63%)");
  $("#num3").css("color", "white");

  $("#num1").css("background-color","hsl(213, 19%, 25%)");
  $("#num1").css("color","hsl(216, 12%, 54%)");

  $("#num2").css("background-color","hsl(213, 19%, 25%)");
  $("#num2").css("color","hsl(216, 12%, 54%)");

    $("#num4").css("background-color","hsl(213, 19%, 25%)");
  $("#num4").css("color","hsl(216, 12%, 54%)");

    $("#num5").css("background-color","hsl(213, 19%, 25%)");
  $("#num5").css("color","hsl(216, 12%, 54%)");

   $("#num3").unbind('mouseenter mouseleave');
  numSelected = 3;
})

$("#num4").click(function(){
  $("#num4").css("background-color","hsl(217, 12%, 63%)");
  $("#num4").css("color", "white");

  $("#num1").css("background-color","hsl(213, 19%, 25%)");
  $("#num1").css("color","hsl(216, 12%, 54%)");

  $("#num2").css("background-color","hsl(213, 19%, 25%)");
  $("#num2").css("color","hsl(216, 12%, 54%)");

    $("#num3").css("background-color","hsl(213, 19%, 25%)");
  $("#num3").css("color","hsl(216, 12%, 54%)");

    $("#num5").css("background-color","hsl(213, 19%, 25%)");
  $("#num5").css("color","hsl(216, 12%, 54%)");

   $("#num4").unbind('mouseenter mouseleave');
  numSelected = 4;
})

$("#num5").click(function(){
  $("#num5").css("background-color","hsl(217, 12%, 63%)");
  $("#num5").css("color", "white");

  $("#num1").css("background-color","hsl(213, 19%, 25%)");
  $("#num1").css("color","hsl(216, 12%, 54%)");

  $("#num2").css("background-color","hsl(213, 19%, 25%)");
  $("#num2").css("color","hsl(216, 12%, 54%)");

    $("#num4").css("background-color","hsl(213, 19%, 25%)");
  $("#num4").css("color","hsl(216, 12%, 54%)");

    $("#num3").css("background-color","hsl(213, 19%, 25%)");
  $("#num3").css("color","hsl(216, 12%, 54%)");

  $("#num5").unbind('mouseenter mouseleave');
  numSelected = 5;
})

$("#submit-button").click(function(){
$("#star").hide();
$("#how").hide();
$("#bigtext").hide();
$("#num1").hide();
$("#num2").hide();
$("#num3").hide();
$("#num4").hide();
$("#num5").hide();
$("#submit-button").hide();

$("#image").show();
$("#select").text(`You selected ${numSelected} out of 5`);
$("#select").show();
$("#thank").show();
$("#paragraph").css("text-align", "center");
$("#paragraph").show();
})