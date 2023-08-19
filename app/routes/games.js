const express = require("express");
const router = express.Router();
const {getGames, getGamesById, createGames, updateGames, deleteGames,
} = require('../controllers/gameController');

router.get("/", getGames);

router.get("/:gamesId", getGamesById);

router.post("/", createGames);

router.patch("/:gamesId", updateGames);

router.delete("/:gamesId", deleteGames);


module.exports = router;