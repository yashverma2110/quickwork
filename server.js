const express = require("express");
const cors = require("cors");
const path = require("path");
require("./db/mongoose");
const userRouter = require("./routes/user");
const gigRouter = require("./routes/gigs");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(gigRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
