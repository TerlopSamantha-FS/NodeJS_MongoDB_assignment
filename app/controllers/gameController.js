const Game = require('../models/games');

const getGames = async (req, res) => {
    const game = await Game.find();
    res.status(200)
    .json({
        data: game,
        status: "success",
        message: `${req.method} - games request made`,
     }); 
    
};

const getGamesById = async (req, res) => {
    const gamesId = req.params.gamesId;
    const game = await Game.findById();
    res.status(200)
    .json({
        gamesId,
        status: "success",
        message: `${req.method} - Games Id request made`,
    });
};

const createGames = async (req, res) => {
    const gameData = req.body.game;
    try {
        const newGame = await Game.create(gameData); 
        res.status(200).json({
            data: newGame,
            status: 'success',
            message: `${req.method} - Games POST`,
        });
    } catch (error) {
        // Handle any errors that occur during the creation process
        res.status(500).json({
            status: 'error',
            message: 'An error occurred while creating the game.',
            error: error.message,
        });
    }
};

const updateGames = async (req, res) => {
        const gamesId = req.params.gamesId;
        res.status(200)
        .json({
            gamesId,
            status: "success",
            message: `${req.method} - Games PATCH`,
        });
}


const deleteGames = async (req, res) => {
    const gamesId = req.params.gamesId;
    res.status(200)
       .json({
            gamesId,
            message: `${req.method} - Games DELETE`,
            id: gamesId
        });
};

module.exports = {
    getGames,
    getGamesById,
    createGames,
    updateGames,
    deleteGames,
};