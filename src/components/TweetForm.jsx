import { useState } from "react";

const MAX_NUMBER_TWEETS = 250;

export function TweetForm({ avatar }) {
  const [tweet, setTweet] = useState("");

  function changeTweetMessage(event) {
    setTweet(event.target.value);
  }
  return (
    <div className="border-b border-silver p-4 space-y-6">
      <div className="flex p-4 space-x-7">
        <img src={avatar} alt="Avatar" className="w-7" />
        <h1 className="font-bold text-xl">Página inicial</h1>
      </div>
      <form action="" className="pl-12 text-lg flex flex-col">
        <textarea
          name="text"
          value={tweet}
          onChange={changeTweetMessage}
          id=""
          className="bg-transparent outline-none  disabled:opacity-50"
          placeholder="O que está acontecendo?"
        />
        <div className="flex justify-end items-center space-x-3">
          <span className="text-sm">
            <span>{tweet.length}</span> /{" "}
            <span className="text-birdBlue">{MAX_NUMBER_TWEETS}</span>
          </span>
          <button
            className="bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50"
            disabled={tweet.length > MAX_NUMBER_TWEETS && true}
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}
