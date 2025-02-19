import { getMentions } from "./services/twitterService.js";
import dotenv from "dotenv";
dotenv.config();

console.log("API Key:", process.env.API_KEY);
console.log("Access Token:", process.env.ACCESS_TOKEN);

async function testTwitterFetch() {
  const mentions = await getMentions();
  console.log("Mentions: ", mentions);
}

testTwitterFetch();
