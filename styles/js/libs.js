var max_width = 1426;
var min_width = 775;
var header_width = 800;
var slider_width = 488;
var margin_left = 374;
var new_width = 0;

function resize_block(){
	var width = $(window).width();
	if(width < max_width && width > min_width){
		new_width = (width/2)-(header_width/2)+(slider_width-margin_left);
		$(".slider-box .r-bg").width(new_width);
	}else if(width < min_width && width > slider_width){
		new_width = ((width-slider_width)/2)+(slider_width-margin_left);
		$(".slider-box .r-bg").width(new_width);
	}
}

function update_brand(){
	$(".brand-box a img").each(function(){
		var width = $(this).width()/2;
		var height = $(this).height()/2;
		$(this).attr("style", "margin-top:-" + height + "px;margin-left:-" + width + "px;");
	});
}


$(document).ready(function(){
	resize_block();
	//update_brand();
	$(window).resize(function(){
		resize_block();
	//	update_brand();
	});
	$(".slider-ctrl.left").click();
	
	if($(".slider").length>0){
		$(".slider").carouFredSel({
			direction: "right",
			width: "100%",
			height: "variable",
			items: {
				visible: 1,
				minimum: 2,
				width: "100%",
				height: "100%"
			},
			scroll: {
				items: 1,
				fx: "crossfade",
				duration: 500,
				pauseOnHover: true
			},
			auto: 5000,
			prev: {
				button: ".slider-cont a.left",
				key: "left"
			},
			next: {
				button: ".slider-cont a.right",
				key: "right"
			}
		});
	}

});