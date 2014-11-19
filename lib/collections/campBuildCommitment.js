/**
 * What a player has committed to building for a specific camp.
 * @type {*}
 */
CampBuildCommitment = DbObjectType.create({
    typeName: 'campBuildCommitment',
    properties: [
        'playerId',
        'campId',
        'allianceId',
        'campLevel',
        // storable: { commitment: , built: , delivered: ( actually delivered) }
        'storableData'
    ],
    databaseTableName: 'campBuildCommitment'
});
