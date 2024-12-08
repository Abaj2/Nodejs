import express from 'express'
import path from 'path';
const port = process.env.PORT || 3000;
import posts from './routes/posts.js'
const app = express();

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// setup static folder
//app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/postss', posts);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
