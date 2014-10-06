/**
 * universal navigation bar for all su pages.
 * to use just make sure the page key starts with a 'su_' ( or the value in the routePrefix setting) and has no required keys
 *
 * route.options.navigationAlias
 * When defining route, displayName is used as the menu item and glyphiconClass
 */
_.extend(Template.su_navbar, {
    routes: function() {
        var routeController = Router.current(true);
        if ( routeController == null) {
            return;
        }
        var route = routeController.route;
        var currentNavigationAlias = route.options.navigationAlias;

        var preliminaryPageNames = _.keys(Router.routes);
        var routes = _.filter(Router.routes, function(route) {
            // only display page in the toplevel navigation if the route has the same navigationAlias
            if ( currentNavigationAlias === route.options.navigationAlias
                || (_.isArray(route.options.navigationAliases) && _.contains(route.options.navigationAliases, currentNavigationAlias))) {
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
                    return allNonoptionalsFound;
                }
            }
            return false;
        });
        return routes;
    },
    data: function() {
        var routeController = Router.current(true);
        if ( routeController == null){
            return void(0);
        } else {
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