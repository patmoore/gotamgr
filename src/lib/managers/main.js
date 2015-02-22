/**
 * Now start up all the functions that have complex dependencies
 */
Meteor.startup(function(){
    ManagerType.prototype.executeStartupFunctions();
});
