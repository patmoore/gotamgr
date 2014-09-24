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
        {
            storable: {
                jsonHelper: 'Storables'
            },
            building: {
                jsonHelper: 'Buildings'
            }
        },
        'componentBuildOrders',
        {
            // use case: for silver or common resources wh rce which are built in chunks
            quantity: {
                writable: true,
                value:1
            },
            buildTime: {
                writable: true,
                value: 0
            },
        }
    ],
    null,
    null,
    {
        dependentBuildOrder: {
            writable: true,
            enumerable: true
        },
        buildTimeString: {
            enumerable: true,
            'get': function() {
                var string = formatTime(this.buildTime);
                return string;
            }
        },
        /**
         * The minimum time needed for the missing components to be built before this BuildOrder can
         * be executed.
         * Operates on the assumption that the components of this buildOrder are built simultaneously,
         * so we look for the maximum build time of a given component.
         */
        componentBuildTime : {
            enumerable : true,
            "get" : function() {
                var componentBuildTimes = {};
                var componentBuildTime = 0;
                if ( this.componentBuildOrders) {
                    for(var i = 0; i < this.componentBuildOrders.length; i++) {
                        var buildOrder = this.componentBuildOrders[i];
                        var storable = buildOrder.storable;
                        var buildingKey = storable.buildings ? storable.buildings[0] : null;
                        if ( buildingKey == null) {
                            continue;
                        } else if ( componentBuildTimes[buildingKey] ) {
                            componentBuildTimes[buildingKey] += this.componentBuildOrders[i].totalBuildTime;
                        } else {
                            componentBuildTimes[buildingKey] = this.componentBuildOrders[i].totalBuildTime;
                        }
                    }
                    _.each(componentBuildTimes, function(buildTime) {
                        if ( componentBuildTime < buildTime ) {
                            componentBuildTime = buildTime;
                        }
                    });
                }
                return componentBuildTime;
            },
        },
        componentBuildTimeString: {
            enumerable: true,
            'get': function() {
                var string = formatTime(this.componentBuildTime);
                return string;
            }
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
        },
        totalBuildTimeString: {
            enumerable: true,
            'get': function() {
                var string = formatTime(this.totalBuildTime);
                return string;
            }
        },
        /**
         * This is amount of time BEFORE the topmost BuildOrder that this BuildOrder must be started in order to be built in time.
         *
         *
         * Look at the BuildOrder list that depends on this BuildOrder.
         * ( ie. a trader BO is looking the merchant BO that needs the trader to be built )
         *
         * This means that leadTime is a basic priority. Because, 2 different things are built in same building.
         * We need to order within that building which one to do first
         */
        startTime: {
            enumerable : true,
            "get" : function() {
                if ( this.dependentBuildOrder !== null ) {
                    return this.dependentBuildOrder.startTime + this.buildTime;
                } else {
                    return this.buildTime;
                }
            },
        },
        allBuildOrders: {
            enumerable : true,
            "get" : function() {
                var buildOrders = [];
                if ( this.componentBuildOrders) {
                    _.each(this.componentBuildOrders, function(componentBuildOrder){
                        var cc = componentBuildOrder.allBuildOrders;
                        buildOrders.concat(cc);
                    });
                }
                buildOrders.push(this);
                return buildOrders;
            }
        },
    }
);

formatTime = function(timeInSeconds){
    var seconds = timeInSeconds;
    var secondsPerMinute = 60 ;
    var secondsPerHour = secondsPerMinute * 60 ;
    var secondsPerDay = 24 * secondsPerHour ;
    var days = Math.floor(seconds / secondsPerDay) ;
    seconds -= days * secondsPerDay;
    var hours = Math.floor(seconds / secondsPerHour);
    seconds -= hours * secondsPerHour;
    var minutes = Math.floor(seconds / secondsPerMinute);
    seconds -= minutes * secondsPerMinute;
    var output = "";
    if ( days > 0) {
        output += days+"d";
    }
    if ( hours > 0) {
        output += hours+"h";
    }
    if ( minutes > 0) {
        output += minutes+"m";
    }
    if ( seconds > 0) {
        output += seconds+"s";
    }
    return output;
}

