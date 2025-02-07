import express from "express";
import cors from 'cors';
import numberRouter from './routes/numberRoute.routes'

const app = express();

app.use(cors());
app.use(express.json());

// app routes
app.use('/api', numberRouter);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
})