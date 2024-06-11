const express = require('express');
const app = express();

const Post = require('./models/Posts')


//rota
app.use(express.json());

app.get('/hello_world', (req, res) => {
  res.send('testan');
});

app.post('/create', (req, res) => {
  const title = req.body.title
 
  res.send(`Título: ${title}`);
});

app.post('/create_post', async (req, res) => {
  const {title, content} = req.body
  const post = await Post.create({ title, content})
  res.send(post);
});


app.listen(5000, () => {
  console.log('Server running on port: ' + 5000);
});
