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
    const { id } = req.params;
    const game = await Game.findById(id);
    res.status(200)
    .json({
        data: game,
        status: "success",
        message: `${req.method} - Games Id request made`,
    });
};

const createGames = async (req, res) => {
    const {game} = req.body;
        const newGame = await Game.create(game); 
        res.status(200)
        .json({
            data: newGame,
            status: 'success',
            message: `${req.method} - Games request made`,
        });
    } 

const updateGames = async (req, res) => {
        const { id } = req.params;
        const game = await Game.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200)
        .json({
            data: game,
            status: "success",
            message: `${req.method} - Games request made`,
        });
};

const deleteGames = async (req, res) => {
    const { id } = req.params;
    await Game.findByIdAndDelete(id);
    res.status(200)
       .json({
            id,
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