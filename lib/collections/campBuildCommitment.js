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
