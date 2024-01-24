//const mongoose = require("mongoose");
//
//const { NOTES_APP_MPPNGDB_HOST, NOTES_APP_MPPNGDB_DATABASE } = process.env;
//const MONGODB_URI =
//  "mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}";
//
//mongoose
//  .connect(MONGODB_URI, {
//    //useUnifiedTopology: true,
//    //useNewUrlParser: true
//  })
//
//  .then((db) => console.log("Data base is connected"))
//  .catch((err) => console.log(err));

require('dotenv').config();

const mongoose = require('mongoose')

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(db => console.log('Data base is connected'))
.catch(err => console.log(err));

