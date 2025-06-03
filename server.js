import express from 'express';
import { port } from './config/env.js';
import ProjectRoutes from './routes/role.routes.js'
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use(express.json());

// Routes
app.use("/api/project", ProjectRoutes)

// Error handling
app.use(errorHandler)
// App Listening
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})