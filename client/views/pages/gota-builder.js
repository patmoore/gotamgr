Template.buildableList.helpers({
    allBuildables : function () {
        return Object.keys(Buildables).sort();
    },
    terminalBuildables : function () {
        return Object.keys(Buildables).sort();
    },
});

Template.buildableList.events({
    'change select.showFilter' : function () {
        Session.set("show", event.srcElement.value);
    },
    'change select.showOrder' : function() {
        Session.set("showOrder", event.srcElement.value);
    },
    'change input.depth' : function() {
        var depth = event.srcElement.value;
        Session.set("depth", depth);
    }
});

