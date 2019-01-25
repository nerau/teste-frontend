$(function(){
	$(".nav").on("click", function(e){
		if ($(e.target).parent(".menu-toggle").length > 0 || $(e.target).hasClass("menu-toggle")) {
			$(".nav").toggleClass("mobile-nav-active");
		};
		if ($(e.target).parent(".nav .search").length > 0 || $(e.target).hasClass("search")) $(".nav").toggleClass("search-bar-active")
	});
})