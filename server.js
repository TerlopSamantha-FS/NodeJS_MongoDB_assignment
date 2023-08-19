const connectDB = require('./app/db/config');
require("dotenv").config();
const app = require('./app/app');

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`);
});
