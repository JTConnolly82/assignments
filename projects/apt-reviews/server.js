const express = require('express');
const app = express();


const port = process.env.PORT || 8000;


app.use(express.json());

//global error handler
app.use((err, req, res, next) => {
  console.error(err);
  return res.send({errMsg: err.message});
});

app.use("/reviews", require("./routes/reviewRoutes"));










app.listen(port, () => console.log(`running 😎`));