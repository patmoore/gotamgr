Meteor.startup(function(){
    _.extend(DisruptorBeamManagerType.prototype, {
        getPlayerData: function() {
            var thatManager = this.thatManager;
            HTTP.get(thatManager.playerDataUrl,{}, function(error, result){
                debugger;
                //if ( error ) {
                //    thatManager.error(thatManager.playerDataUrl, error);
                //} else {
                    thatManager.updatePlayerData();
                //}
            });
        }
    });
});