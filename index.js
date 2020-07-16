require('dotenv').config();
const mongoose = require('mongoose');
const { api, PORT } = require('./api');
const { MONGO_URI } = require('./config');


mongoose.connect(
    MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
)
.then(()=>console.log('Database Connect'))
.catch((err)=>console.log('Error connecting databse',err));

api.listen(PORT,()=>console.log(`Listening on ${PORT}`));