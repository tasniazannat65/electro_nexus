import express from 'express';
import { collections, dbConnect } from '../db.js';
import { ObjectId } from 'mongodb';
const router = express.Router();
router.get('/', async(req, res)=> {
    try {
        const col = await dbConnect(collections.ITEMS);
        const items = await col.find().sort({createdAt: -1}).toArray();
        res.status(200).json(items);
        
    } catch (error) {
        res.status(500).json({message: 'Failed to fetch items', error})
        
    }
})


router.get('/:id', async(req, res)=> {
    try {
        const {id} = req.params;
        if(!ObjectId.isValid(id)){
            return res.status(400).json({message: 'Invalid item ID'});
        }
        const col = await dbConnect(collections.ITEMS);
        const item = await col.findOne({_id: new ObjectId(id)});
        if(!item) {
            return res.status(404).json({message: 'Item not found'});
        }
        res.status(200).json(item);
    } catch (error) {
res.status(500).json({
    message: 'Failed to fetch item',
    error: error.message
})        
    }
})

router.post('/', async(req, res)=> {
    try {
        const data = req.body;
        if(!data.name || !data.price){
            return res.status(400).json({message: 'Name & price required'});
        }
        const item = {
            ...data,
         createdAt: new Date()
        }
        
        const col = await dbConnect(collections.ITEMS);
        const result = await col.insertOne(item);
        res.status(201).json({
            message: 'Item added successfully',
            id: result.insertedId
        })
        
    } catch (error) {
        res.status(500).json({message: 'Failed to add item'})
    }
})

export default router;

