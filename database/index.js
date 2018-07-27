const mongoose = require('mongoose');
const db ='mongodb://localhost:27017/overview';
mongoose.connect(db,{ useNewUrlParser: true });


let Overview = mongoose.Schema({
    name: String,
    description: String,
    phone: String,
    website: String,
    giftcard: Boolean,
    avgrating: Number,
    numratings: Number,
    toptags: [String],
    additionaltags: [String],
    cuisines: [String],
    pricerange: Number,
    paymentoptions:[String],
    address: String,
    neighborhood: String,
    crossstreet:  String,
    parking: Boolean,
    style: String,
    dresscode:String,
    chef: String,
    privateparty: Boolean,
    ppfacilities: String,
    ppcontact: String,
    catering: Boolean,
    coordinates:[Number],
    hours:{
        Breakfast: String,
        Lunch: String,
        Dinner: String
    }
});


let OverviewModel = mongoose.model('Overview', Overview);

module.exports = {
    Overview
};