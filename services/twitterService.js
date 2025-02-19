import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";

dotenv.config();

const twitterClient = new TwitterApi({
  apikey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

// this function fetches mentions when my account is tagged.
export async function getMentions() {
  try {
    const user = await twitterClient.v2.me();
    const userId = user.data.id;

    const response = await twitterClient.v2.search(`@${user.data.username}`, {
      "tweet.fields": "created_at",
      "user.fields": "username",
      expansions: "author_id",
    });
    return response.data ?? [];
  } catch (error) {
    console.error("Error fetching mentions: ", error);
    return [];
  }
}
