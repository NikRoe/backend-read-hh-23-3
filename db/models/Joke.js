import mongoose from "mongoose";

const { Schema } = mongoose;

// this defines how the joke should look like
const jokeSchema = new Schema({
  joke: { type: String, required: true },
});

// for mongoose to check whether the Joke has already been compiled / already exists

const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);

export default Joke;
