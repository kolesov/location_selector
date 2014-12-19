$.fn.navigationMenu = function () {
	this.addClass("kolesov-navmenu");
	$(this).wrap("<div class='kolesov-navmenu-container'></div>");
	$(this).find('li').each(function() 
	{ 
	       $(this).addClass("kolesov-navmenu-item"); 
	       $(this).wrapInner("<span class='kolesov-navmenu-itemtext'></span>")
		      .wrapInner("<div class='kolesov-navmenu-itembutton'></div>");
	       $(this).find(".kolesov-navmenu-itembutton").prepend("<i class='kolesov-navmenu-itemicon'></i>");
		
		if ($(this).data("menuform") !== undefined)
		{
			var form = $(this).data("menuform");
			$(form).addClass("kolesov-navmenu-form");
			$(form).appendTo(".kolesov-navmenu-container");
			$(form).hide();
		}
		$(this).hover(function() {
		    $(".kolesov-navmenu-form").hide();
		    $($(this).data("menuform")).css("left", $(this).width());
		    $($(this).data("menuform")).css("top", $(this).position().top);
		    $($(this).data("menuform")).show();
		});
	});	
};
