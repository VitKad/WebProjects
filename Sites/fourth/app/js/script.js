

$(document).ready(function(){
	$('.help__toggle').click(function(){
        
			if ($(this).parent().children('.help__item-inner').is(':hidden')) {
                $(this).addClass('help__toggle--active');
				
			} else {
                $(this).removeClass('help__toggle--active');   
			}							
		
            if ($(this).parent().children('.help__item-inner').is(':hidden')) {
                $(this).parent().children('.help__item-title').addClass('help__item-title--active');
				
			} else {
                $(this).parent().children('.help__item-title').removeClass('help__item-title--active');   
			}	
       
        $(this).parent().children('.help__item-inner').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
               
				$('.help__toggle').removeClass('open');
			} else {
        
				
                $('.help__toggle').addClass('open');
			}							
		});

    
		return false;

        
	});
});