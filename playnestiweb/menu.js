$(function(){
	
	$("header .fa-bars").click(function(){
		
		$("header .container .container-nav").toggle();
		
	});
	
	$(window).on('resize', function(){
		var win = $(this);
		if (win.outerWidth() > 960) {
			
			$("header .container .container-nav").css("display", "block");
			
		};
		
		if (win.outerWidth() < 960) {
			
			$("header .container .container-nav").css("display", "none");
			
		};
		
	});
	
});