// HACK PATM 16 may 2014: Sadly UI.body.events() does not work to add these event handlers. :-(
DefaultEventHandlers = {
/**
 * Note: That data-route-data must use " around the json keys and elements ' will not work
 * <button data-route='route_name' data-route-data='{"customerProjectId":"{{id}}"}'>
 * @type {{click button[data-route]: 'click button[data-route]'}}
 */
    'click button[data-route]' : function(event) {
        var route = $(event.currentTarget).data('route');
        // automatically converts to JSON if possible.
        var routeData = $(event.currentTarget).data('route-data');
        if ( typeof routeData == 'string' ) {
            // routeData was not converted to a JSON object
            // trigger the error
            JSON.parse(routeData);
        }
        Router.go(route, routeData);
    },
    /**
     * watch all elements labeled as input fields (they have a data-whalepath)
     * use getWhalePathData() on a saveChanges handler.
     * @param event
     */
    'change [data-inputfield]' : function(event) {
        var $currentTarget = $(event.currentTarget);
        $currentTarget.addClass('userChanged');
        // enable the save button
        $('.saveChanges').removeAttr('disabled');
    }
};

/**
 * TODO: would like to not make this so global.
 * @param template
 */
getChangedInputFieldData = function(template) {
    var changeMap = {};
    template.$('.userChanged[data-inputfield]').each(function(index, element) {
        var $element = $(element);
        var key = $element.data('inputfield');
        if ( !key ) {
            key = $element.attr('name');
        }
        changeMap[key] = $element.val();
    });
    return changeMap;
}

/**
 * TODO: would like to not make this so global.
 * On successful save clear the userChanged class
 * use clearChangedInputFieldData.bind(null, template) to generate callback function for Meteor.call
 * @param template
 */
clearChangedInputFieldData = function(template, error, data) {
    if ( !error ) {
        template.$('.userChanged[data-inputfield]').each(function(index, element) {
            var $element = $(element);
            $element.removeClass('userChanged');
        });
    }
}

// HACK should be better way of adding to all templates.
Meteor.startup(function() {
    _.each(
        [
            'buildableList'
        ],
        function(templateName) {
            Template[templateName].events(DefaultEventHandlers);
        }
    );
});
