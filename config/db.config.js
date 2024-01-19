require('dotenv').config();

const mongoDbUri = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/crmApp';
const dbName = "crmapp-db";
module.exports = { mongoDbUri, dbName };