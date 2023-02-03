import mongoose, { ConnectOptions } from "mongoose";
const uri = process.env.MONGODB_URI;
const connect = () => {
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions,
    (err) => {
      if (err) console.log("Error connecting to MongoDB");
      else console.log("Connected to MongoDB");
    }
  );
};

export default connect;
