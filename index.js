const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const app = express();
// middleware for application
app.use(express.json());
app.use(cors());
// root route for testing purposes
app.get('/',(req, res) =>{
    res.send('hello world');
})

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
