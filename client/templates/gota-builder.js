Template.buildableList.helpers({
    allBuildables : function () {
        return Object.keys(Buildables).sort();
    },
    terminalBuildables : function () {
        return Object.keys(Buildables).sort();
    },
});

Template.buildableList.events({
    'click button.showNeed' : function () {
        Session.set("show", "need");
    },
    'click button.showAll' : function () {
        Session.set("show", "all");
    }
});

