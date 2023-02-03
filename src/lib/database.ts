import mongoose, { ConnectOptions } from "mongoose";
const uri = 'mongodb+srv://test:test@cluster0-test.qgvzkzr.mongodb.net/test';
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
