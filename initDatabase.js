const { default: mongoose } = require("mongoose");
require("dotenv").config();

const initDatabase = () => {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected database"))
    .catch((err) => console.log(err));
};

module.exports = initDatabase;
