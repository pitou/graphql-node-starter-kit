var type = require('graphql/type');

module.exports.Game = new type.GraphQLObjectType({
    name: 'Game',
    description: 'A game object',
    fields: function() {
        return {
            id: {
                type: type.GraphQLInt,
                description: 'The id of a game',
            },
            title: {
                type: type.GraphQLString,
                description: 'The title of a game',
            },
            year: {
                type: type.GraphQLString,
                description: 'The year of production a game',
            },
            platform: {
                type: type.GraphQLString,
                description: 'The platform where the game was made for',
            },
            developers: {
                type: require('../types').Company,
                description: 'The developer of the game',
            },
            publishers: {
                type: require('../types').Company,
                description: 'The publisher of the game',
            },
        };
    },
});
