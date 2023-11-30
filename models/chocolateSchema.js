const mongoose = require("mongoose")
const chocolateSchema = mongoose.Schema({
    chocolatetype: {
        type: String,
        size: String,
        required:[true,"Require Chocolate type"]
    },
    chocolatebrand: {
        type: String,
        required:true
    },
    cost: {
        type:Number,
        required:true,
        min:0,
        max:700
    }

})
module.exports = mongoose.model("Chocolate",
chocolateSchema)