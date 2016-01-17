var type = require('graphql/type');
var Game = require('../types').Game;

module.exports.games = {
    type: new type.GraphQLList(Game),
    args: {
        id: { type: type.GraphQLInt },
        title: { type: type.GraphQLString },
        platform: { type: type.GraphQLString },
    },
    resolve: function(parent, args, ast) {

        var data = require('../../data/games_data');
        var utils = require('../../utils');

        console.log("Game args: " + JSON.stringify(args));

        return utils.filterData(data, args);
    },
};
