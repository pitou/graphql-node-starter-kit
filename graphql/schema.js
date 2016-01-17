var type = require('graphql/type');

var queries = require('./queries');
var mutations = require('./mutations');

module.exports = new type.GraphQLSchema({

    query: new type.GraphQLObjectType({
        name: 'RootQueryType',
        fields: function() {
            return {
                companies: queries.companies,
                games: queries.games,
            };
        },
    }),
    mutation: new type.GraphQLObjectType({
        name: 'RootMutationType',
        fields: function() {
            return {
                updateGameRating: mutations.updateGameRating,
            };
        },
    })
});
