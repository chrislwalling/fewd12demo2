 
 $(document).ready(function() {
 	$(window).load(function() {
    $('.flexslider').flexslider(
    	{slideshowSpeed: 7500});
  });

 	$('.hamburger').on('click', function() {
        $('.navigation').slideToggle();
    });

    $(".videoone").fancybox({
		maxWidth	: 600,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});
      createStoryJS({
                    type:       'timeline',
                    width:      '800',
                    height:     '600',
                    source:     'https://docs.google.com/spreadsheet/ccc?key=0AvLITtEVwP7cdEhQN0FDOVUtenlmOXBScTBBNWVzZ3c',
                    embed_id:   'my-timeline'
                });

    setTimeout(function(){
    odometer.innerHTML = 100000;
    }, 1000);

}); 
           