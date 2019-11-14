var mongoose= require('mongoose');
var Street= mongoose.model('street', {
    name: {
        type: String,
        trim: true
    },
    postalCode: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    }
});
module.exports= { Street };