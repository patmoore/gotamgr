PlayerManager = null;
PlayerManagerType = function() {
    ManagerType.call( this, 'player', [ ] );
}
ManagerType.createSubClass(PlayerManagerType);

Meteor.startup(function() {
    Object.freeze(PlayerManagerType.prototype);
    PlayerManager = new PlayerManagerType();
});