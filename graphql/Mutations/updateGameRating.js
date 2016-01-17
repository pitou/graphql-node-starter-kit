var type = require('graphql/type');
var Game = require('../types').Game;

module.exports.updateGameRating = {
    name: 'UpdateGameRating',
    type: Game,
    args: {
        rating: { type: new type.GraphQLNonNull(type.GraphQLInt) },
    },
    resolve: function() {
    }
};
