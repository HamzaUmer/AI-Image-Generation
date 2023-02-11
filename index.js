import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connection from './db/config.js'
import postRoutes from './routes/postRoutes.js';
import aiRoutes from './routes/aiRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/api/v2/post', postRoutes);
app.use('/api/v2/ai', aiRoutes);

app.get('/', async(req,res) => {
    res.send('Hello from Open AI');
})

const openServer = async() => {
    try {
        connection(process.env.MONGODB_URL);
        app.listen(8080, ()=> console.log("Serves has been running on port http://localhost:8080")) 
    } catch (error) {
        console.log(error)
    }

}

openServer();