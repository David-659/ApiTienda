const mongoose = require('mongoose');
require('dotenv').config();
const URI = `mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@adso2903013.lwavg.mongodb.net/${process.env.DB}`

mongoose.connect(URI)

module.exports = mongoose;