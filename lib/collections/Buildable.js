/**
 * key: (used to connect to other buildables)
 * depends: [ other keys ] 
 */
Buildable_Db = new Meteor.Collection("buildable");

/**
 * should extend buildables (in future? )
 * 
 * {
 *  supplies: (minutes)
 *  priority: ( maybe not needed )
 * }
 */
Builders_Db = new Meteor.Collection("builders");
