const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema( {
   
    gameTitle: {
        type: String,
        required: [true, 'Please add the game name!'],
        unique: true,
    },
    gameGenre: {
        type: String
    },
    releaseDate: {
        type: Number,
    },

    company: {
        type: String,
        required: [true, 'Please add the company name!'],
    },
    
});



module.exports = mongoose.model('games', gameSchema); 