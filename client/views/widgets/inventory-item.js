Template.inventoryItem.helpers({
    show : function() {
        var show = Session.get("show");
        switch(show) {
        case "need":
            var inventory_used = Session.get("inventory_used");
            var want = Session.get("want");
            return (typeof(inventory_used[this]) !== "undefined" && inventory_used[this] > 0)
                || (typeof(want[this]) !== "undefined" && want[this] > 0);
        default :
            return true;
        }
    },
    remove_ : function(options) {
        return options.replace('_', ' ', 'g');
    },
    buildings: function(options) {
        var buildingNames = [];
        if ( typeof(Buildables[options].buildings) !== "undefined" ) {
            Buildables[options].buildings.forEach(function(building) {
                buildingNames.push(building.name);
            });
        }
        return buildingNames.sort().join(',');
    },
    buildit: function(options) {
        var inventory_used = Session.get("inventory_used");
        return inventory_used[this];
    }

});
Template.inventoryItem.events({
   'change input[type=text].have' : function() {
       var inventory = Session.get("inventory");
       inventory[this] = +event.srcElement.value;
       Session.set("inventory", inventory);
   },
   'change input[type=text].want' :function() {
       var want = Session.get("want");
       want[this] = +event.srcElement.value;
       if ( want[this] === 0) {
           delete want[this];
       }
       Session.set("want", want);
   }
});