Meteor.startup(function(){
    Deps.autorun(function(){
        var inventory = Session.get("inventory");
        var want = Session.get("want");
        var depth = Session.get("depth");
        var inventory_used = BuildScheduler.needCalculate(want, inventory, depth);
        Session.set("inventory_used", inventory_used);
    });
});