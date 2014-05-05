Router.configure({
    layoutTemplate: 'mainLayout',
});
Router.map(function() {
    this.route('buildableList', {
        path : '/'
    });
    this.route('planByBuildings', {
        path: '/executePlan'
    });
    // NOTE: must be very last route defined.
    this.route('error404', {
        path: '*',
        where: 'server',
        action: function () {
            this.response.writeHead(404, {'Content-Type': 'application/json'});
            this.response.write(JSON.stringify({
                error: 404,
                message: 'not found'
            }));
            this.response.end();
        }

    });
});
