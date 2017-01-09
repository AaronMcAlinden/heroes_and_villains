$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();
	
	
	
	
	
	if(wScroll > $('.logo').offset().top)	{
		
		$('.wrap1').each(function(){
			
			$('.wrap1').addClass('is-showing');
			
		});
	}
	
	
	
	if(wScroll > $('.wrap1').offset().top)	{
		
		$('.wrap2').each(function(){
			
			$('.wrap2').addClass('is-showing');
			
		});
	}
	
	
	if(wScroll > $('.show').offset().top)	{
		
		$('.wrap3').each(function(){
			
			$('.wrap3').addClass('is-showing');
			
		});
	}
	
	
	if(wScroll > $('.adler_head').offset().top)	{
		
		$('.wrap4').each(function(){
			
			$('.wrap4').addClass('is-showing');
			
		});
	}
	
	
	if(wScroll > $('.outro').offset().top)	{
		
		$('.wrap5').each(function(){
			
			$('.wrap5').addClass('is-showing');
			
		});
	}
	
	
	
	
	
});



