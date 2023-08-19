const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Extract the host from the connection URI
        const connectionUriParts = conn.connection.client.s.url.split('/');
        const host = connectionUriParts[2].split(':')[0];

        console.log(`MongoDB connected: ${host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;