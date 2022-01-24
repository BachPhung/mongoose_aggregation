const mongoose = require('mongoose')

const CharacterSchema = mongoose.Schema({
    name: String,
    age: Number,
    rank: String
})
CharacterSchema.pre('aggregate',function (){
    this.pipeline().unshift({$match:{age:{$lt:30}}})
})
module.exports = mongoose.model("Character",CharacterSchema)