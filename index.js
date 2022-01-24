const express = require('express')
const mongoose = require('mongoose')
const CharacterRoute = require('./routes/character')
const app = express();

mongoose.connect('mongodb+srv://BachPhung:thutrang251@cluster0.c7sqy.mongodb.net/aggre_test?retryWrites=true&w=majority',{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{console.log("Connected to MongoDB")})
  .catch(err=>console.log(err))
app.use(express.json())
app.use('/api/character',CharacterRoute)
app.listen(5000, () => {
    console.log("Listening in PORT 5000")
})