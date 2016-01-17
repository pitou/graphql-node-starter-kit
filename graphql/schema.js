var type = require('graphql/type');

var queries = require('./queries');

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
});
