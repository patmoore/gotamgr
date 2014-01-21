Template.buildableList.helpers({
    allBuildables : function () {
        return Object.keys(Buildables).sort();
    },
    terminalBuildables : function () {
        return Object.keys(Buildables).sort();
    },
});

Template.buildableList.events({
    'change select.showFilter' : function (eventMap) {
        Session.set("show", eventMap.srcElement.value);
    },
    'change select.showOrder' : function(eventMap) {
        Session.set("showOrder", eventMap.srcElement.value);
    },
    'change input.depth' : function(eventMap) {
        var depth = eventMap.srcElement.value;
        Session.set("depth", depth);
    }
});

