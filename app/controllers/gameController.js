const Game = require('../models/games');

const getGames = async (req, res) => {
    const games = await Game.find();
    res.status(200)
        .json({
            data: games,
            status: "success",
            message: `${req.method} - game request made`,
        }); 
    
};

const getGamesById = async (req, res) => {
    const { gamesId } = req.params;
    const games = await Game.findById(gamesId);
    res.status(200)
    .json({
        data: games,
        status: "success",
        message: `${req.method} - Games Id request made`,
    });
};

const createGames = async (req, res) => {
    const { game } = req.body;
        const newGame = await Game.create(game); 
        res.status(200)
        .json({
            data: newGame,
            status: 'success',
            message: `${req.method} - Games request made`,
        });
    } 

const updateGames = async (req, res) => {
        const { gamesId } = req.params;
        const games = await Game.findByIdAndUpdate(gamesId, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200)
        .json({
            data: games,
            status: "success",
            message: `${req.method} - Games request made`,
        });
};

const deleteGames = async (req, res) => {
    const { gamesId } = req.params;
    await Game.findByIdAndDelete(gamesId);
    res.status(200)
       .json({
            gamesId,
            status: "success",
            message: `${req.method} - Games request made`,
        });
};

module.exports = {
    getGames,
    getGamesById,
    createGames,
    updateGames,
    deleteGames,
};