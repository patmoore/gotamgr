Router.map(function() {
    this.route('su_alliances', {
        path : '/su/alliances',
        layoutTemplate: 'mainLayout',
        onWait: [
        ],
        navigationAlias: 'su'
    });
});
