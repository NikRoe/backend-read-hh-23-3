import dbConnect from "@/db/dbConnect";
import Joke from "@/db/models/Joke";

export default async function handler(request, response) {
  // connects to database
  await dbConnect();

  if (request.method === "GET") {
    // the .find() methods gives us all entries for the Joke model
    // this is unrelated to the array method .find()
    const jokes = await Joke.find();
    response.status(200).json(jokes);
  }
}
