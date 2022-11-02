module.exports = {
    port: process.env.PORT || 8000,
    mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017',
    env: process.env.NODE_ENV || 'development'
}