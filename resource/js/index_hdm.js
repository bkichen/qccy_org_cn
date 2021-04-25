// JavaScript Document

jQuery(function() {
	
jQuery('.hdm1>h3>a').mouseover(function() { TabSelect(".hdm1>h3>a", ".hdm1>div.content", "current", jQuery(this)) });
jQuery('.hdm1>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm2>h3>a').mouseover(function() { TabSelect(".hdm2>h3>a", ".hdm2>div>div.content", "current", jQuery(this)) });
jQuery('.hdm2>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm3>h3>a').mouseover(function() { TabSelect(".hdm3>h3>a", ".hdm3>div.content", "current", jQuery(this)) });
jQuery('.hdm3>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm4>h3>a').mouseover(function() { TabSelect(".hdm4>h3>a", ".hdm4>div.content", "current", jQuery(this)) });
jQuery('.hdm4>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm5>h3>a').mouseover(function() { TabSelect(".hdm5>h3>a", ".hdm5>div.content", "current", jQuery(this)) });
jQuery('.hdm5>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm6>div>h3>a').mouseover(function() { TabSelect(".hdm6>div>h3>a", ".hdm6>div>div.content", "current", jQuery(this)) });
jQuery('.hdm6>div>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm7>div>h3>a').mouseover(function() { TabSelect(".hdm7>div>h3>a", ".hdm7>div>div.content", "current", jQuery(this)) });
jQuery('.hdm7>div>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm8>div>h3>a').mouseover(function() { TabSelect(".hdm8>div>h3>a", ".hdm8>div>div.content", "current", jQuery(this)) });
jQuery('.hdm8>div>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm9>div>h3>a').mouseover(function() { TabSelect(".hdm9>div>h3>a", ".hdm9>div>div.content", "current", jQuery(this)) });
jQuery('.hdm9>div>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm10>div>h3>a').mouseover(function() { TabSelect(".hdm10>div>h3>a", ".hdm10>div>div.content", "current", jQuery(this)) });
jQuery('.hdm10>div>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm11>div>h3>a').mouseover(function() { TabSelect(".hdm11>div>h3>a", ".hdm11>div>div.content", "current", jQuery(this)) });
jQuery('.hdm11>div>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm12>div>h3>a').mouseover(function() { TabSelect(".hdm12>div>h3>a", ".hdm12>div>div.content", "current", jQuery(this)) });
jQuery('.hdm12>div>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm13>h3>a').mouseover(function() { TabSelect(".hdm13>h3>a", ".hdm13>dl.content", "current", jQuery(this)) });
jQuery('.hdm13>h3>a').eq(0).trigger("mouseover");

//jQuery('.hdm14>h3>a').mouseover(function() { TabSelect(".hdm14>h3>a", ".hdm14>div.content", "current", jQuery(this)) });
//jQuery('.hdm14>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm15>h3>a').mouseover(function() { TabSelect(".hdm15>h3>a", ".hdm15>div.content", "current", jQuery(this)) });
jQuery('.hdm15>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm16>h4>a').mouseover(function() { TabSelect(".hdm16>h4>a", ".hdm16>div.content", "current", jQuery(this)) });
jQuery('.hdm16>h4>a').eq(0).trigger("mouseover");
jQuery('.hdm17>h3>a').mouseover(function() { TabSelect(".hdm17>h3>a", ".hdm17>div.content", "current", jQuery(this)) });
jQuery('.hdm17>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm18>h3>a').mouseover(function() { TabSelect(".hdm18>h3>a", ".hdm18>div.content", "current", jQuery(this)) });
jQuery('.hdm18>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm19>h3>a').mouseover(function() { TabSelect(".hdm19>h3>a", ".hdm19>div.content", "current", jQuery(this)) });
jQuery('.hdm19>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm20>h3>a').mouseover(function() { TabSelect(".hdm20>h3>a", ".hdm20>div.content", "current", jQuery(this)) });
jQuery('.hdm20>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm21>h3>a').mouseover(function() { TabSelect(".hdm21>h3>a", ".hdm21>div.content", "current", jQuery(this)) });
jQuery('.hdm21>h3>a').eq(0).trigger("mouseover");
jQuery('.hdm22>h3>a').mouseover(function() { TabSelect(".hdm22>h3>a", ".hdm22>div.content", "current", jQuery(this)) });
jQuery('.hdm22>h3>a').eq(0).trigger("mouseover");



//点击效果
//jQuery('#duice').click(function(){
//			jQuery('.wthpop').show();
//		})
//		jQuery('.wthpop>p>span').click(function(){
//			jQuery('.wthpop').hide()
//		})

});

//tab function
function TabSelect(tab,con,addClass,obj) {
    var jQuery_self = obj;
    var jQuery_nav = jQuery(tab);

    jQuery_nav.removeClass(addClass),
	jQuery_self.addClass(addClass);

    var jQuery_index = jQuery_nav.index(jQuery_self);
    var jQuery_con = jQuery(con);
    jQuery_con.hide(),
	jQuery_con.eq(jQuery_index).show();
}