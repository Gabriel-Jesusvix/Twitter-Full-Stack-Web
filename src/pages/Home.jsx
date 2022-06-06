import { useEffect, useState } from "react";
import axios from "axios";

import { Tweet } from "../components/Tweet";
import { TweetForm } from "../components/TweetForm";

export function Home({ loggedInUser }) {
  const [data, setData] = useState([]);

  async function LoadedTweets() {
    const _TOKEN = loggedInUser.accessToken;
    ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjbDN5dWx3MzAwMDAwY3AzeHVtZHZyNjV3IiwiaWF0IjoxNjU0NTM5MDM1LCJleHAiOjE2NTQ2MjU0MzV9.iMsXS9WBLqLxa2u1quxYbxR_e3LoRmjQb-0TVMbC40I");

    const { data } = await axios.get(
      `${import.meta.env.VITE_API_HOST}/tweets`,
      {
        headers: {
          authorization: `Bearer ${_TOKEN}`,
        },
      }
    );
    setData(data);
  }
  useEffect(() => {
    LoadedTweets();
  }, []);
  return (
    <>
      <TweetForm
        avatar={"/src/avatar.png"}
        loggedInUser={loggedInUser}
        onSuccess={LoadedTweets}
      />
      {data.length &&
        data.map((tweet) => (
          <Tweet
            key={tweet.id}
            name={tweet.user.name}
            username={tweet.user.username}
            // avatar={avatar}
            avatar={"/src/avatar.png"}
          >
            {tweet.message}
          </Tweet>
        ))}
    </>
  );
}
