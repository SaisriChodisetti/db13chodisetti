const mongoose = require("mongoose") 
const plantSchema = mongoose.Schema({ 
 type: String, 
 name: String,
 cost: {
    type: Number,
 }
}) 
 
module.exports = mongoose.model("Plant", 
plantSchema)