import { Tweet } from "../components/Tweet";
import { TweetForm } from "../components/TweetForm";

export function Home() {
  return (
    <>
      <TweetForm avatar={"/src/avatar.png"} />
      <Tweet
        twitter="@GabrielJesusvix"
        avatar={"/src/avatar.png"}
        name="Gabriel Jesus"
      >
        I Have a Good at Work
      </Tweet>
      <Tweet
        twitter="@GabrielJesusvix"
        avatar={"/src/avatar.png"}
        name="Gabriel Jesus"
      >
        I Have a Good at Working!
      </Tweet>
    </>
  );
}
