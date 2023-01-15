import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema({
    email: String
});

let Subscriber;

try {
  Subscriber = mongoose.model("subscriber");
} catch (err) {
  Subscriber= mongoose.model("subscriber", SubscriberSchema);
}

export default Subscriber;
