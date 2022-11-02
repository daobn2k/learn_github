const mongoose = require('mongoose');

const ConnectDB = async (url) => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log(`Connection Moongose successfully ${url}`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = ConnectDB;
