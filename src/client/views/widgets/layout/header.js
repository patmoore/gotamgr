Template.header.rendered = function(context, options) {
    var $toggle = $('#toggle').removeClass('toggle-checked');

    $toggle.click(function() {
        if ($toggle.hasClass('toggle-checked')) {
            $toggle.removeClass('toggle-checked');
        } else {
            $toggle.addClass('toggle-checked');
        }
    });
}
