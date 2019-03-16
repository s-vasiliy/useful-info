$(function() {


    // Header
		    $('section').each(function() {
		        var sectionName = $(this).find('> h3:first-of-type').html();
		        var sectionClass = $(this).attr('class');
		        $('.header ul').append('<li><a data-slide=".' + sectionClass + '" href="#">' + sectionName + '</a></li>');
		    });


			// Show active state
			var section = $('section');
			var links = $('.header ul li');
			$(window).on('load scroll', function() {
				var currentPosition = $(this).scrollTop();
				var headerHeight = $('.header').height();
				links.removeClass('current');
	        	section.removeClass('currentsection');
				section.each(function() {
			        var top = $(this).offset().top - headerHeight,
			            bottom = top + $(this).height();
			        if (currentPosition >= top && currentPosition <= bottom) {
			        	var thisClass = $(this).attr('class');
			        	$('a[data-slide=".' + thisClass + '"]').parent().addClass('current');
			        	$(this).addClass('currentsection');
			    	}
				}); 
			});

			


    // Data slide
			$('*[data-slide]').on('click', function(){
				var slideTarget = $(this).data('slide');
				var headerHeight = $('.header').height();
			    $('html, body').animate({
			        scrollTop: $(slideTarget).offset().top - headerHeight
			    }, 1000);
				return false;
			});




    // Upload input file value
		    $('.upload input[type="file"]').change(function() {
		        var uploadfilename = $(this).val();
		        $(this).parent().find('input[type="text"]').attr('value', uploadfilename);
		    });

			


    // Tabs
			$('.tab_select li:first-child, .tab_content:first-of-type').addClass('active');
			$('.tab_select li').on('click', function(){
				$(this).parent().find('li').removeClass('active').each(function(){
					var tabsTarget = $(this).attr('data-tab');
					$(tabsTarget).removeClass('active');
				});
				$(this).addClass('active');
				var tabTarget = $(this).attr('data-tab');
				$(tabTarget).addClass('active');
				return false;
			});




    // Accordion
			$(".accordion dl dt:first-of-type").addClass('active');
			$(".accordion dl dt").on('click', function(){
				$(this).toggleClass('active').next('dd').slideToggle();
			});

			
			
			
    // Dropdown
			$('*[data-dropdown]').on('click', function(){
				var datatarget = $(this).data('dropdown');
				$(datatarget).toggle();
		        $('html').click(function(){
		        	$(datatarget).hide();
		        });
		        $(datatarget).click(function(e){
		        	e.stopPropagation();
		        });
				return false;
			});
			
     
     
    
    // Tooltip
			$('.tooltip').each(function(){
				var title = $(this).attr('data-tooltip-title');
				$(this).prepend("<i class='tooltip_content'>" + title + "</i>");
				var tooltip_width = $(this).find("> i").outerWidth();
				$(this).find("> i").css("margin-left", "-" + tooltip_width/2 + "px");
			});
			
     
     
    
    // Show/hide input value
			$('input[type="text"], input[type="password"], input[type="email"]').each(function(){
				var valtxt = $(this).attr('value');
				$(this).focus(function() { if ($(this).val() == valtxt) {$(this).val('');} });
				$(this).blur(function() { if ($(this).val() == '') {$(this).val(valtxt);} });
			});
			$("textarea").focus(function() {if (this.value === this.defaultValue) {this.value = '';}}).blur(function() {if (this.value === '') {this.value = this.defaultValue;}});


}); 