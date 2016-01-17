var type = require('graphql/type');
var companiesData = require('../../data/companies_data');
var utils = require('../../utils');

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
            developer: {
                type: require('../types').Company,
                description: 'The developer of the game',
                resolve: function(parent, args, ast) {
                    // parent is the game object
                    args.name = parent.developerName;

                    console.log("Game -> company args: " + JSON.stringify(args));

                    return utils.filterData(companiesData, args)[0];
                }
            },
            publisher: {
                type: require('../types').Company,
                description: 'The publisher of the game',
                resolve: function(parent, args, ast) {
                    // parent is the game object
                    args.name = parent.publisherName;

                    console.log("Game -> company args: " + JSON.stringify(args));

                    return utils.filterData(companiesData, args)[0];
                }
            },
        };
    },
});
