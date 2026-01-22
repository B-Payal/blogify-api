const express = require('express');
const postsRoutes = require('./src/routes/posts.routes.js');
const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/' , (req,res)=>{
    res.status(200).send("Welcome to the blogify api");
})

app.use('/api/v1/posts' , postsRoutes);

app.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})