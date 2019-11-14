var mongoose= require('mongoose');
var House= mongoose.model('house', {
    street: {
        type: String
    },
    name: {
        type: String,
        trim: true
    },
    houseNo: {
        type: String,
        trim: true
    },
    window:{
        type: {
            windowWidth: {
                type: Number
            },
            windowHeight: {
                type: Number
            },
            windowSize: {
                type: String
            }
        }
    },
    door:{
        type:{
            doorWidth: {
                type: Number
            },
            doorHeight: {
                type: Number
            },
            doorSize: {
                type: String
            },
            sideOfHouse:{
                type:String
            }
        }
    }
    
});
module.exports= { House };