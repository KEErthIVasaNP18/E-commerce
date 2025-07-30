const express = require('express')
const CartItem = require('../model/cart')
const Post = require('../model/post')
const router = express.Router()

router.post('/add', async (req, res) => {
    const { postId } = req.body;

    const CartItem = await CartItem.findOne({
        postId
    })

    if (CartItem) {
        CartItem.Quantity += 1
    }else{
        CartItem = new CartItem({postId, Quantity: 1})
    }
    await CartItem.save()
    res.json(CartItem)
})

router.get('/', async(req,res) => {
    const CartItem = await CartItem.find().populate('postId')
    res.json(CartItem)
})

router.post('/remove', async(req,res) => {
    const {postId} = req.body;
    await CartItem.deleteOne({postId})
    res.json({message : 'Item removed'})
})

module.exports = router