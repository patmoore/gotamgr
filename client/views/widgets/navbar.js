/**
 * universal navigation bar for all su pages.
 * to use just make sure the page key starts with a 'su_' ( or the value in the routePrefix setting) and has no required keys
 *
 * route.options.navigationAlias
 * When defining route, displayName is used as the menu item and glyphiconClass
 */
_.extend(Template.su_navbar, {
    routes: function() {
        var routePrefix = this.routePrefix || 'su_';
        var routeController = Router.current(true);
        if ( routeController == null) {
            return;
        }
        var route = routeController.route;
        var currentNavigationAlias = route.options.navigationAlias;

        var preliminaryPageNames = _.filter(_.keys(Router.routes), function(pageKey) { return pageKey.indexOf(routePrefix) === 0; });
        var pageNames = _.filter(preliminaryPageNames, function(pageKey) {
            var route = Router.routes[pageKey];
            // only display page in the toplevel navigation if the route has the same navigationAlias
            if ( currentNavigationAlias === route.options.navigationAlias) {
                // look for any key (used to construct the path) that is not optional - TODO: look for the keys being set. (so we could display)
                var nonoptionals = _.where(route.keys, {optional:false});
                if ( nonoptionals === undefined) {
                    // and there are no keys on the page.
                    return true;
                } else {
                    // or the current routecontroller has all the nonoptional keys defined
                    var allNonoptionalsFound = _.every(nonoptionals, function(nonoptional){
                        return nonoptional.name in routeController.params;
                    });
                    debugger;
                    return allNonoptionalsFound;
                }
            }
            return false;
        });
        return _.map(pageNames,
            function(name){
                return Router.routes[name];
            }
        );
    },
    data: function() {
        var routeController = Router.current(true);
        if ( routeController == null){
            return void(0);
        } else {
            debugger;
            return routeController.params;
        }
    },
    tabActiveClass: function() {
        var current = Router.current(true).route;
        if ( this.name === current.name) {
            return "active";
        } else {
            return "";
        }
    },
    additionalClass: function() {
        return this.options.glyphiconClass || '';
    },
    displayName: function() {
        return this.options.displayName || this.name;
    }
});