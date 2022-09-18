const Item  = require("../models/item.js");

const getItems = async(req,res)=>{
    console.log('get items')
    try {
        const item =await Item.find()
       
        res.status(200).json(item);
    } catch (error) {
        res.status(404).json({ message: error.message });

    }
}



const createItem = async(req,res)=>{
    console.log('createitem',req.body)
    const item = new Item(req.body);
    try {
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        
    }
}

module.exports ={
    getItems,
    createItem
}