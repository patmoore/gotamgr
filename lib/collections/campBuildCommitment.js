/**
 * What a player has committed to building for a specific camp.
 * @type {*}
 */
CampBuildCommitment = DbObjectType.createSubClass('campBuildCommitment',
    [
        'playerId',
        'campId',
        'allianceId',
        'campLevel',
        // buildable: { commitment: , built: , delivered: ( actually delivered) }
        'buildableData'
    ],
    'campBuildCommitment');
