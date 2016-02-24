// When click on page...
$(document).mousedown(function (e) {
	var clicked_image = false;

	if (!$("#text_container").is(e.target) && $("#text_container").has(e.target).length === 0){
		$(".image-hover").each(function() {
			if (!$( this ).is(e.target) && $( this ).has(e.target).length === 0){
				dehighlight_image( this );

			} else {
				$( this ).parent().attr("clicked",true)
				$( "#text_container" ).css("background-color","#C4C4C4");


				var id = $( this ).attr('id');
				highlight_image( this )
				clicked_image = true;
				switch (id) {
					case 'Github':
						$("#text_body").html("<a href='https://github.com/hjylewis'>github.com/hjylewis</a>");
						break;
					case 'Email':
						$("#text_body").html("<a href='mailto:hlewis@uchicago.edu'>hlewis@uchicago.edu</a>");
						break;
					case 'Portfolio':
						$("#text_body").html("<a href='http://toadfish.xyz/'>Toadfish</a><br /><a href='http://issue-graph.markitx.com/'>Issue Graph</a><br /><a href='http://blog.publicgood.com/post/127266095525/henrys-last-stand'>Blog Post</a>");
						break;
				}
			}
		})
		if (!clicked_image) {
			$( "#image_container" ).attr("clicked",false)
			$( "#text_container" ).css("background-color","");
			clear_text();
		}
	}
});

// Cool name hover
$(".name-hover").hover(
	function () {
		var id = $( this ).attr("id") + '-expand';
		$( "#"+id ).stop().animate({width: 'toggle', opacity: 'toggle'}).css('overflow', 'visible');
	}, function () {
		var id = $( this ).attr("id") + '-expand';
		$( "#"+id ).stop().animate({width: 'toggle', opacity: 'toggle'}).css('overflow', 'visible');
	});

// When icon is hovered, add 'hovered' class and change Title text
$(".image-hover").hover(
	function () {
		if ($( this ).parent().attr("clicked") == 'false') {
			highlight_image( this );
		}
	}, function () {
		if ($( this ).parent().attr("clicked") == 'false') {
			dehighlight_image( this );
			clear_text();
		}
	});

function highlight_image (obj) {
	var text = $( obj ).attr('id');
	$( obj ).addClass("hovered");
	$("#text_container").find("h2").text(text);
}

function dehighlight_image (obj) {
	$( obj ).removeClass("hovered");
}

function clear_text () {
	$("#text_container").find("h2").text("");
	$("#text_body").text("");
}