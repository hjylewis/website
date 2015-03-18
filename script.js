$(".head-hover").hover(
	function () {
		var id = $( this ).attr("id") + '-expand';
		 $( "#"+id ).animate({width: 'toggle'}).css('overflow', 'visible');
		// $( "#"+id ).attr("hidden", false)
		console.log("in");
	}, function () {
		var id = $( this ).attr("id") + '-expand';
		 $( "#"+id ).animate({width: 'toggle', opacity: 'toggle'}).css('overflow', 'visible');
		// $( "#"+id ).attr("hidden", true)
		console.log("out");
	});