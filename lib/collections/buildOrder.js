/**
 *
 * dependentBuildOrder : what is dependent on this BuildOrder being built
 * componentBuildTime : time(seconds) from the scheduled end time (X) (which is unknown).
 * So the last item to be built has componentBuildTime of 0 (i.e. X-0)
 * X is max(componentBuildTime) + buildTime of the item with the max(minEndTIme)
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
                enumerable : true,
                writable: true,
                value: 0
            },
            /**
             * The minimum time needed for the missing components to be built before this BuildOrder can
             * be executed.
             */
            componentBuildTime : {
                enumerable : true,
                "get" : function() {
                    debugger;
                    var componentBuildTime = 0;
//                    var componentBuildTime = _.reduce(this.componentBuildOrders, function(sum, componentBuildOrder) {
//                       return sum + componentBuildOrder.totalBuildTime;
//                    });
                    if ( this.componentBuildOrders) {
                        for(var i = 0; i < this.componentBuildOrders.length; i++) {
                            componentBuildTime += this.componentBuildOrders[i].totalBuildTime;
                        }
                    }
                    return componentBuildTime;
                },
            },
            /**
             * Starting minumum time for the BuildOrders of components.
             */
            totalBuildTime : {
                enumerable : true,
                "get" : function() {
                    if ( this.componentBuildOrders !== null ) {
                        return this.componentBuildTime + this.buildTime;
                    } else {
                        return this.buildTime;
                    }
                },
            }
        }
    ],
    'buildOrder'
);

