import express from 'express';
import { configDotenv } from 'dotenv';
import aiRoute from './routes/aiRoutes.js';
configDotenv();

const app = express();
app.use(express.json());
app.use('/api/v1',aiRoute);

const port = process.env.PORT || 8888;

app.get("/",(req,res)=>{
    res.json({message:"Hey Buddyyyyyyy.......!"})
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})