const express = require('express')
const {getItems, createItem} = require('../controller/items')

const router = express.Router()

// get the images
router.get('/', getItems)

// post image
router.post('/', createItem)



module.exports = router