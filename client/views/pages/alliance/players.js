Template.alliance_players.helpers({
   players : function() {
       var allianceId = Router.current(true).params.allianceId;
       var handle = AllianceManager.alliancePlayersHandle(allianceId);
       var results = handle.findFetch();
       return results;
   }
});