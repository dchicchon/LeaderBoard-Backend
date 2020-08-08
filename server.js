const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const routes = require("./routes");

const connectionString =
  "mongodb+srv://dchicchon:BDfWGuR7GK1yf8TT@cluster0.b99ts.mongodb.net/leaderboard?retryWrites=true&w=majority";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", (_) => {
  console.log("Database connected:", connectionString);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
