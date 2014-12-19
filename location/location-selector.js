$.fn.locationSelector = function () {
	this.addClass("kolesov-location-selector");
	$(this).append("<ul class='kolesov-location-selector-states'></ul>");
	$(this).append("<div class='kolesov-location-selector-data'></div>");
	
	$.ajax({
		url: "states.json",
		dataType: "json",
		success: function (data){
			$(data.states).each(function () {
				var li = "<li data-id='"+this.id+"'>"+this.name+"<i class='kolesov-location-selector-states-icon'></i></li>";
				$("ul.kolesov-location-selector-states").append(li);
			});
			
			$("ul.kolesov-location-selector-states li").click(function() {
				$(".kolesov-location-selector-data").css("height", $("ul.kolesov-location-selector-states").outerHeight());
			
				$("ul.kolesov-location-selector-states li").removeClass("active-element");
				$(this).addClass("active-element");
				
				$(".kolesov-location-selector-data").html("<div class='kolesov-location-loader'></div>");
				
				var rootLi = $(this);
				$.ajax({
					url: "regions.php?state="+$(rootLi).data('id'),
					dataType: "json",
					success: function (data) {
						$(".kolesov-location-selector-data").html("<ul class='kolesov-location-selector-regions'></ul>");
						$(".kolesov-location-selector-data").prepend("<input type='checkbox'>All</input>");
						$(data.regions).each(function () {
							var li = "<li data-id='"+this.id+"'><input type='checkbox'>"+this.name+"</input></li>";
							$(".kolesov-location-selector-data ul").append(li);
						});
						$(".kolesov-location-selector-data ul li").bind( "click", function() {
							$(this).unbind("click");
							var rootLi = $(this);
							
							$(rootLi).append("<div class='kolesov-location-loader'></div>");
							$.ajax({
								url: "localities.php?region="+$(rootLi).data('id'),
								dataType: "json",
								success: function (data) {
									$(rootLi).find(".kolesov-location-loader").hide();
									$(rootLi).append("<ul class='kolesov-location-selector-localities'></ul>");
									$(data.localities).each(function () {
										var li = "<li><input value='"+this.postcode+"' type='checkbox' /><span>["+this.postcode+"] "+this.name+"</span></li>";
										$(rootLi).find("ul").append(li);
									});
								}
							});
						});
					}
				});
			});
		}
	});
	
	$(".kolesov-location-selector-data").on('click', 'input', function (event) {
		var value = $(this).is(':checked')
		$(this).parent().find("input").prop( "checked", value );
	});
};
