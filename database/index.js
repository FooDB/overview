const mongoose = require('mongoose');
const db ='mongodb://localhost:27017/overview';
mongoose.connect(db,{ useNewUrlParser: true });

