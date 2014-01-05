Template.buildableList.allBuildables = function () {
    return Object.keys(Buildables).sort();
};

Template.buildableList.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
});

Template.buildableList.buildIt = function(options) {

}
