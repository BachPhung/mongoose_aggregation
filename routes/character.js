const CharacterRoute = require('express').Router()
const Character = require('../models/Charecter')

CharacterRoute.post('/', async (req, res) => {
    try {
        await Character.create(
            { name: 'Jean-Luc Picard', age: 59, rank: 'Captain' },
            { name: 'William Riker', age: 29, rank: 'Commander' },
            { name: 'Deanna Troi', age: 28, rank: 'Lieutenant Commander' },
            { name: 'Geordi La Forge', age: 29, rank: 'Lieutenant' },
            { name: 'Worf', age: 24, rank: 'Lieutenant' }
        )
        res.status(200).json('Success')
    }
    catch (err) {
        res.status(500).json(err)
    }
})

CharacterRoute.get('/', async (req, res) => {
    try {
        // const filter = {age: {$lt:30}}
        // const chars = await Character.aggregate([{$match: {age:{$gte:30}}}])
        //const chars = await Character.aggregate([
            //{ $match: { age: { $lt: 30 } } },
        //     {
        //         $group: {
        //             _id: '$age',
        //             count: { $sum: 1 }
        //         }
        //     }
        // ])
        const chars = await Character.aggregate([{
            $sample:{
                size : 2
            }
        }])
        chars.sort((d1,d2)=>d1.age - d2.age)
        res.status(200).json(chars)
    }
    catch (err) {
        res.status(500).json(err)
    }

})

module.exports = CharacterRoute