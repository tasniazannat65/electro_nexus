import express from 'express';
import cors from 'cors';
import itemsRouter from './routes/items.js'

const app = express();
app.use(cors());
app.use(express.json());
app.get('/',(req, res)=>{
    res.send('Welcome to ElectroNexus API!');
})
app.use('/items', itemsRouter);
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})