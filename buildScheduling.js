Meteor.startup(function() {
/**
 * inventory 
 *     available : { 
 *        key: quantity
 *     }
 *     missing_for : {
 *        key : needed_for
 *           { key_for_missing : quantity }
 *     missing : 
 *           { key_for_missing : quantity }
 *        
 */

buildit = function(inventory, schedule) {
    var copied = JSON.parse(JSON.stringify(inventory));
    if ( !('available' in inventory) ) {
        inventory.available = {};
    }
    if ( !('missing' in inventory) ) {
        inventory.missing = {};
    }
    if ( !('missing_for' in inventory) ) {
        inventory.missing_for = {};
    }
    var quantity_needed = this.depends[key];
    if ( !(key in inventory.available) ) {
        inventory.available[key] = 0;
    }

    if ( inventory.available[key] < quantity_needed ) {
        quantity_missing = quantity_needed - inventory.available[key];
        if ( !(this.key in inventory.missing_for)) {
            inventory.missing_for[this.key] = {};
        }
        if ( !(key in inventory.missing_for[this.key])) {
            inventory.missing_for[this.key][key] = quantity_missing;
        } else {
            inventory.missing_for[this.key][key] += quantity_missing;
        }
        if ( !(key in inventory.missing)) {
            inventory.missing[key] = quantity_missing;
        } else {
            inventory.missing[key] += quantity_missing;
        }
        // look for a building that can build it.
        for(var building in Buildings) {
            if(key in building.builds ) {
                while(inventory.available[key] < quantity_needed ) {
                    // if set then the item is not a root item
                    buildit.call(building.builds[key], inventory);
                }
                // we only decrement available if the item could be built.
                inventory.available[key] -= quantity_needed;
            }
        }
    } else {
        inventory.available[key] -= quantity_needed;
    }
    if ( this.key in inventory.available ) {
        inventory.available[this.key]++;
    } else {
        inventory.available[this.key] = 1;
    }
    return inventory;
}

});
