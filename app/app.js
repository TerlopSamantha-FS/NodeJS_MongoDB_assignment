const express = require("express");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");
const companyRoutes = require("./routes/companies");
const gamesRoutes = require("./routes/games");

//middleware for logging
app.use(morgan("dev"))
//parsing middleware
app.use(express.urlencoded({
    extended: true
}));
// middleware that all request are json
app.use(express.json());
//midleware to handle the CORS Policy
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Orgin","*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, Authorization");

    if(req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Method", "POST,PUT,GET,PATCH,DELETE");
    }
    next();
})
app.get("/", (req, res, next) => {
    res.status(201).json({
        message: "Service is up!", 
        method: req.method
    })
});

 app.use("/companies", companyRoutes);
 app.use("/games", gamesRoutes);

//add middleware to handle errors and bad urls paths
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
})

//add middleware to return json response for error and bad urls
app.use((error, req, res, next) => {
    res.status(error.status || 500).json( {
        error:{
            message: error.message,
            status: error.status
        }
    })
});
// connect to mongodb
 mongoose.connect(process.env.MONGODB_URI);

module.exports = app;