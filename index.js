import express from 'express';

const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.get('/', (_req, res) => {
  res.json('Hello world');
});

app.listen(port, () => {
  console.log(`Node app running on port ${port}`);
});
