(function($)
{
	$.fn.animateThis = function(effect)
	{
		var _this = this;

		$(window).on("scroll", function()
		{
			var scrolled = $(window).scrollTop();

			if((scrolled + $(window).height()) >= _this.offset().top + 100)
			{
				_this.addClass(effect);
				_this.addClass("animated");
			}
		});
	};
}(jQuery));