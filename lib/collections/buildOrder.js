/**
 *
 * dependentBuildOrder : what is dependent on this BuildOrder being built
 * leadTime : time(seconds) from the scheduled end time (X) (which is unknown).
 * So the last item to be built has leadTime of 0 (i.e. X-0)
 * X is max(leadTime) + buildTime of the item with the max(minEndTIme)
 * buildTime (seconds)
 * @constructor
 */
BuildOrder = DbObjectType.createSubClass('buildOrder',
    [
        'buildable',
        'building',
        'dependentBuildOrder',
        'componentBuildOrders',
        {
            buildTime: {
                "enumerable" : true,
                writable: true,
                value: 0
            },
            /**
             * The minimum time needed for the missing components to be built.
             *
             */
            leadTime : {
                "enumerable" : true,
                "get" : function() {
                    if ( this.dependentBuildOrder == null) {
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
                        return this.leadTime + this.buildTime;
                    } else {
                        return this.buildTime;
                    }
                },
            }
        }
    ],
    'buildOrder'
);

