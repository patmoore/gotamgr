Template.playerHome.helpers({
    currentPlayer: function() {
        var currentPlayer = PlayerManager.currentPlayerHandle.oneResult();
        debugger;
        return currentPlayer;
    }
});