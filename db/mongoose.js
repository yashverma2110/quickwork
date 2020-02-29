const mongoose = require("mongoose");

mongoose.connect(
  'mongodb+srv://shwetagurnani:shweta@cluster0-rvik9.mongodb.net/test?retryWrites=true&w=majority' || "mongodb://127.0.0.1:27017/quickwork-api",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);
