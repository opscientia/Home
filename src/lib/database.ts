import mongoose, { ConnectOptions } from "mongoose";

const connect = () => {
  mongoose.connect(
    'mongodb+srv://test:test@cluster0-test.qgvzkzr.mongodb.net/test',
    { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions,
    (err) => {
      if (err) console.log("Error connecting to MongoDB");
      else console.log("Connected to MongoDB");
    }
  );
};

export default connect;
