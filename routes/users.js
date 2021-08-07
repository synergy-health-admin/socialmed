const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");


// UPDATE USER
router.put('/:id', async (req, res) =>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch (err){
            return res.status(500).json(err);
            } 
        }

        try{
            const user = await User.findByIdAndUpdate(req.params.id
                ,{$set:req.body});
            res.status(200).json("Account has been successfully updated 🥳")
        }catch (err){
            return res.status(500).json(err);
        } 

    } else{
        return res.status(403).json("Dude, you can update only your account 🥷🏼 😂 !")
    }
})
// DELETE USER
router.delete('/:id', async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {

        try {
            const user = await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Account deleted, sad to see you leave 😔 ")
        } catch (err) {
            return res.status(500).json(err);
        }

    } else {
        return res.status(403).json("Dude, you can delete only your account 🥷🏼 !")
    }
})

// GET A USER
router.get('/:id', async (req, res) =>{
    try {
        const user = await User.findById(req.params.id);
        const {password, updatedAt, ...other} = user._doc
        res.status(200).json(other);
    } catch (err) {
        return res.status(500).json(err);
    }
})
// FOLLOW A USER

// UNFOLLOW A USER


router.get('/', (req, res) => {
    res.send('Welcome to 🏠  page! through user route')
})

module.exports = router