 $(".contentClass").css("min-height",$(window).height());
 // $(".contentField").css("min-height",$(window).height()*0.7); 

 function timeHi(){       
	var nowHour = (new Date()).getHours();
	var sayHi = "";
	if(nowHour>=0 && nowHour<=11) sayHi = "Good Morning, ";
	else if(nowHour>=12 && nowHour<18) sayHi = "Good afternoon, ";
	else sayHi = "Good evening, ";
	return sayHi;
}
//=====================================================================
$(document).ready(function (){
	$("#sayHi").text(timeHi());	
	 $("#education input[type='button']").click(function(){
	 if($(this).val()==="+"){
		$("#education input[type='button']").val('+');
		$("#education input[type='button']").next().next().hide();
		$(this).next().next().show();
		$(this).val('-');
	 }
	 else{
		$(this).next().next().hide();
		$(this).val('+');
	}
 });

   $( "#proj" ).accordion();

	$("#btn_mealPlan").click(function () {
		window.open("https://capstone-1-meal-plan.herokuapp.com");
	}); 

	$("#btn_jeopardy").click(function () {
		window.open("https://guoting1220.github.io/jeopardy/");
	}); 

	$("#btn_tv_maze").click(function () {
		window.open("https://guoting1220.github.io/ajax-tv-maze/");
	}); 

	$("#btn_giphy_party").click(function () {
		window.open("https://guoting1220.github.io/ajax-giphy-party/");
	}); 

	$("#btn_movies_rating").click(function () {
		window.open("https://guoting1220.github.io/movie-rating-app/");
	}); 

	$("#btn_connect_4").click(function () {
		window.open("https://guoting1220.github.io/connect-4-game/");
	}); 

	$("#btn_meme_generator").click(function () {
		window.open("meme-generator/index.html");
	}); 

	$("#btn_memory_game").click(function () {
		window.open("https://guoting1220.github.io/memory_game/");
	}); 
   
   $("#btn_codeplayer").click(function(){
	   window.open("https://guoting1220.github.io/code-player/");
   });   
   
   $("#btn_recreationTester").click(function(){
	   window.open("https://guoting1220.github.io/reaction-tester/");
   });   
   
   $("#slidershow").carousel();
  
//solve the problem: have the menu collapse down after clicking a hyperlink  
    $("#toggle li").click(function() {
          $(".navbar-collapse").collapse('hide');
    });
	
	
	
});

