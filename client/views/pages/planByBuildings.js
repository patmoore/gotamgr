
var buildingKey = null;
Template.planByBuildings.helpers({
    buildings: function() {
        debugger;
        return _.keys(Buildings).sort();
    },
    buildingName: function() {
        // HACK
        buildingKey = this;
        return Buildings[this].name;
    },
    buildingBuildOrders: function() {
        var currentPlayer = PlayerManager.currentPlayer();

    }
});