/**
 *
 * dependentBuildOrder : what is dependent on this BuildOrder being built
 * leadTime : time(seconds) from the scheduled end time (X) (which is unknown).
 * So the last item to be built has leadTime of 0 (i.e. X-0)
 * X is max(leadTime) + duration of the item with the max(minEndTIme)
 * duration (seconds)
 * @constructor
 */
BuildOrder = DbObjectType.createSubClass(function(dependentBuildOrder, duration) {
    this.duration = duration;
    this.dependentBuildOrder = dependentBuildOrder;
}, 'buildOrder', [
    'duration',
    'dependentBuildOrder'
]);


Object.defineProperties(BuildOrder.prototype, {

    /**
     * The backwards minimum time that this BuildOrder must be completed
     *
     */
    leadTime : {
        "enumerable" : true,
        "get" : function() {
            if ( this.dependentBuildOrder === null) {
                return 0;
            } else {
                return this.dependentBuildOrder.componentLeadTime;
            }
        },
    },
    /**
     * Starting minumum time for the BuildOrders of components.
     */
    componentLeadTime : {
        "enumerable" : true,
        "get" : function() {
            if ( this.dependentBuildOrder !== null ) {
                return this.leadTime + this.duration;
            } else {
                return this.duration;
            }
        },
    }
});
