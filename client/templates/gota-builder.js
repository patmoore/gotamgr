if (Meteor.isClient) {
Meteor.startup(function() {
  Template.hello.greeting = function () {
    alert("hi");
    return "hi";
    return buildables['shortsword'].buildit({});
  };

  Template.hello.events({
    'click input' : function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}
);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
