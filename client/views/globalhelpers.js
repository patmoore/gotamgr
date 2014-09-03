/**
 * When you determine that a helper is universal. Move the definition into this array to have the function get registered
 * automatically.
 *
 * Global helpers are overridden by a templates
 */
_.each({
    isSelected: function(option, arr) {
        if (arr) {
            if (typeof(arr) === 'string' || typeof(arr) === 'number') {
                if (option == arr) {
                    return { selected : "selected"};
                }
            } else {
                for (var i in arr) {
                    if (option == arr[i]) {
                        return { selected : "selected"};
                    }
                }
            }
        }
        return null;
    },

    radioChecked: function(value, target, isDefault) {
        if ((!target && isDefault === true) || target == value) {
            return { checked: 'checked'};
        }
        return null;
    },
    /**
     * {{#each arrayify myobject}}
     *
     * @param obj
     * @returns {Array|*}
     */
    arrayify: function(obj){
        var result = [];
        for (var key in obj) {
            result.push({key:key,value:obj[key]});
        }
        return result;
    }
}, function(func, helperKey) {
    UI.registerHelper(helperKey, func);
});

getRouterParams = function() {
    var router = Router.current(true);
    if ( router && router.params) {
        var paramsObj = _.object(_.map(Object.keys(router.params), function(e) {
            return [e, router.params[e]];
        }));
        return paramsObj;
    } else {
        return {};
    }
};

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
     * watch all elements labeled as input fields (they have a data-inputfield)
     * use getChangedInputFieldData() on a saveChanges handler.
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
 * get the values of fields that have a data-inputfield that have changed
 * TODO: would like to not make this so global.
 * @param template
 */
getChangedInputFieldData = function(template) {
    var changeMap = {};
    ($ || template.$)('.userChanged[data-inputfield]').each(function(index, element) {
        var $element = $(element);
        var key = $element.data('inputfield');
        if ( !key ) {
            key = $element.attr('name');
        }
        changeMap[key] = $element.val();
    });
    return changeMap;
}

getInputFieldData = function(template) {
    var changeMap = {};
    ($ || template.$)('[data-inputfield]').each(function(index, element) {
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
 * @param template
 */
setInputFieldData = function(template, source) {
    var changeMap = {};
    ($ || template.$)('[data-inputfield]').each(function(index, element) {
        var $element = $(element);
        var key = $element.data('inputfield');
        if ( !key ) {
            key = $element.attr('name');
        }
        if (_.has(source, key)) {
            $element.val(source[key]);
        }
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
        ($ || template.$)('.userChanged[data-inputfield]').each(function(index, element) {
            var $element = $(element);
            $element.removeClass('userChanged');
        });
    }
}

Meteor.startup(function() {
    var filtered = _.filter(Template, function(template, templateName) {
        if ( template && _.has(Template, templateName)
            // private properties
            && templateName.substr(0,2) != '__'
            // explicitly always filter 'prototype'
            && templateName != 'prototype'
            // templates that do not follow the naming convention we use of '<directory>_<template>' - templates that other packages provide
            && templateName.indexOf('_', 2) > 2
            // filter properties that probably really are not templates
            && typeof template.events === 'function'
            ) {
            return true;
        } else {
            return false;
        }
    });
    _.each(filtered, function(template, templateName) {
        try {
            // skip the names that are really supplied by the iron-router/blaze layout code
            template.events(DefaultEventHandlers);
        }catch(e) {
            console.log("problems with setting event on: " +templateName);
        }
    });
});
