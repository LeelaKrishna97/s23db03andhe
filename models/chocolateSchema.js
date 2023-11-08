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
        type:String,
        required:true
    }

})
module.exports = mongoose.model("Chocolate",
chocolateSchema)