
getRouterParams = function(key) {
    var router = Router.current(true);
    var paramsObj;
    if ( router && router.params) {
        paramsObj = _.object(_.map(Object.keys(router.params), function(e) {
            return [e, router.params[e]];
        }));
    } else {
        paramsObj= {};
    }
    return key?paramsObj[key]:paramsObj;
};

getRouteName = function() {
    return Router.current().route.name;
};
getTemplateData = function(key) {
    if ( key ) {
        return Template.instance().data[key];
    } else {
        return Template.instance().data;
    }
};
/**
 * When you determine that a helper is universal. Move the definition into this array to have the function get registered
 * automatically.
 *
 * Global helpers are overridden by a templates
 */
_.each({
    /**
     * Insert {{debugTemplateHere}} in a template.
     */
    debugTemplateHere: function() {
        debugger;
    },

    // If you want to use a template with multiple routes, use this check as e.g.
    // {{#if currentRouteNameEquals 'customer_foo'}}
    // stuff
    // {{/if}}
    // {{#if currentRouteNameEquals 'su_foo'}}
    // other stuff
    // {{/if}}
    // or something similar
    currentRouteNameEquals: function(targetRouteName) {
        var currentRouteName = Router.current().route.name;
        return targetRouteName == currentRouteName;
    },
    routeName: getRouteName,
    routeParams: getRouterParams,
    templateData: getTemplateData,

    /**
     * in <select> html use:
     * <option value="{{this.dbCode}}" {{isSelected this.dbCode selectedChallengeEntryStatus}}>
     *
     *     to set the selected option
     * @param option
     * @param currentlySelected
     * @returns { selected : "selected"} or null
     */
    isSelected: function(option, currentlySelected) {
        if (currentlySelected) {
            if (typeof(currentlySelected) === 'string' || typeof(currentlySelected) === 'number') {
                if (option == currentlySelected) {
                    return { selected : "selected"};
                }
            } else {
                for (var i in currentlySelected) {
                    if (option == currentlySelected[i]) {
                        return { selected : "selected"};
                    }
                }
            }
        }
        return null;
    },

    /**
     * Used to check the currently selected radio:
     *
     * <input type="radio" value="{{RewardType.usd.dbCode}}" data-toggle="radio" data-inputfield name="rewardRewardType"
     *  {{radioChecked RewardType.usd rewardType true}}> {{RewardType.usd.displayName}}
     *
     * @param value
     * @param target
     * @param isDefault
     * @returns {*}
     */
    radioChecked: function(value, target, isDefault) {
        if ((target == null && isDefault === true) || target == value) {
            return { checked: 'checked'};
        }
        return null;
    },

    // radioChecked(null, null, false) => checked b/c null == null
    radioCheckedByDefault: function() {
        return { checked: 'checked'};
    },

    /**
     * {{#each arrayify myobject}}
     *
     * @param obj
     * @returns {Array|*}
     */
    arrayify: function(obj){
        var result = [];
        var index = 0;
        for (var key in obj) {
            result.push({key:key,value:obj[key],index:index++});
        }
        return result;
    }
}, function(func, helperKey) {
    Template.registerHelper(helperKey, func);
});

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

// You'd think this would be simple.
var isRadioChecked = function(element) {
    return element.checked || $(element).attr('checked');
};

/**
 * Name separated with '.' (use _.deep() )
 * @param jQuerySelected
 * @returns {{}}
 * @private
 */
var _getInputFieldData = function(jQuerySelected) {
    var changeMap = {};
    jQuerySelected.each(function(index, element) {
        var $element = $(element);
        var key = $element.data('inputfield');
        if (!key) {
            key = $element.attr('name');
        }
        var elemValue = $element.val();
        var elemType = $element.attr('type');
        var type = $element.data('type') || elemType;

        if ((elemType === 'radio' || elemType==='checkbox') && !isRadioChecked(element)) {
            return;
        }

        var value;
        if ( type === 'number' ) {
            value = Number(elemValue);
        } else if ( type === 'boolean') {
            value = elemValue === 'true';
        } else {
            value = elemValue;
        }
        _.deep(changeMap, key, value);
    });
    return changeMap;
}
/**
 * get the values of fields that have a data-inputfield that have changed
 * TODO: would like to not make this so global.
 * @param template
 */
getChangedInputFieldData = function(template) {
    if (template == null) {
        template = Template.instance();
    }
    var changeMap = template?
        _getInputFieldData(template.$('.userChanged[data-inputfield]')):
        _getInputFieldData($('.userChanged[data-inputfield]'));
    return changeMap;
}

getInputFieldData = function(template) {
    if (template == null) {
        template = Template.instance();
    }
    //TODO: doesn't work for radio buttons, always return the last value
    var changeMap = template?
    _getInputFieldData(template.$('[data-inputfield]')):
        _getInputFieldData($('[data-inputfield]'));
    return changeMap;
}

/**
 * TODO: would like to not make this so global.
 * @param template
 */
// this doesn't work properly for fancy selects. see
// http://silviomoreto.github.io/bootstrap-select/
setInputFieldData = function(template, source) {
    if (template == null) {
        template = Template.instance();
    }
    function settingFn(index, element) {
        var $element = $(element);
        var key = $element.data('inputfield');
        if ( !key ) {
            key = $element.attr('name');
        }
        var value = _.deep(source, key);
        if (value) {
            // TODO: How to handle radio selections?
            $element.val(value);
        }
    }

    if ( template ) {
        template.$('[data-inputfield]').each(settingFn);
    } else {
        $('[data-inputfield]').each(settingFn);
    }
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
    var filtered = {};
    _.each(_.keys(Template), function(templateName) {
        var template = Template[templateName];
        if ( template && _.has(Template, templateName)
            // private properties
            && templateName.substr(0,2) != '__'
            // explicitly always filter 'prototype'
            && templateName != 'prototype'
            // templates that do not follow the naming convention we use of '<directory>_<template>' - templates that other packages provide
            && templateName.indexOf('_', 2) > 1
            // filter properties that probably really are not templates
            && typeof template.events === 'function'
            ) {
            filtered[templateName] = template;
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
