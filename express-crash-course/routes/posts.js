import express from 'express';
const router = express.Router();

let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" },
  ];

router.get("/", (req, res) => {
    const limit = parseInt(req.query.limit);
    if (!isNaN(limit) && limit > 0) {
     return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
  });
  
  // get single post
  router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);
  
    if (!post) {
      res.status(404).json({ msg: `A post with the id of ${id} was not found` });
    } else {
      res.status(200).json(post);
    }
  });
//create new post
router.post('/', (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title
  };
  res.status(201).json(posts);
});
export default router;