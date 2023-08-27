const Game = require('../models/games');
const mongoose = require('mongoose');

const getGames = async (req, res) => {
    const games = await Game.find();
    res.status(200) 
        .json({
            data: games,
            status: "success",
            message: `${req.method} - game request made`,
        })  
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
    const { gameTitle, gameGenre, releaseDate, company } = req.body;
    try {
        const newGame = await Game.create({
            _id: new mongoose.Types.ObjectId(),
            gameTitle,
            gameGenre,
            releaseDate,
            company,
        });

        return res.status(200).json({
            data: newGame,
            status: 'success',
            message: `${req.method} - Games request made`,
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            status: 'error',
            message: 'An error occurred while creating the game.',
        });
    }
} 

const updateGames = async (req, res) => {
        const { gamesId } = req.params;
        const games = await Game.findByIdAndUpdate(gamesId, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200)
        .json({
            gamesId,
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