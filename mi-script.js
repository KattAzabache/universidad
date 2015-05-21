$(document).ready(function() {
	$("..icon").click(function(event){
	event.preventDefault();
		$("dentro-ojo").toggleClass("hidden");
    	$(".icon").toggleClass("hidden");
	});
/*$(".icon").click(function() {
   $(".icon").toggleClass("hidden");
   $(".dentro-ojos").toggleClass("hidden")
});*/