import { useFormik } from "formik";
import axios from "axios";
const MAX_NUMBER_TWEETS = 250;

export function TweetForm({ avatar, loggedInUser, onSuccess }) {
  const formik = useFormik({
    onSubmit: async (values, form) => {
      await axios.post(
        `${import.meta.env.VITE_API_HOST}/tweets`,
        {
          message: values.tweet,
        },
        {
          headers: {
            Authorization: `Bearer ${loggedInUser.accessToken}`,
          },
        }
      );
      form.setFieldValue("tweet", "");
      onSuccess();
    },
    initialValues: {
      tweet: "",
    },
  });

  return (
    <div className="border-b border-silver p-4 space-y-6">
      <div className="flex p-4 space-x-7">
        <img src={avatar} alt="Avatar" className="w-7" />
        <h1 className="font-bold text-xl">Página inicial</h1>
      </div>
      <form
        className="pl-12 text-lg flex flex-col"
        onSubmit={formik.handleSubmit}
      >
        <textarea
          name="tweet"
          value={formik.values.tweet}
          className="bg-transparent outline-none  disabled:opacity-50"
          placeholder="O que está acontecendo?"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={formik.isSubmitting}
        />
        <div className="flex justify-end items-center space-x-3">
          <span className="text-sm">
            <span>{formik.values.tweet.length}</span> /{" "}
            <span className="text-birdBlue">{MAX_NUMBER_TWEETS}</span>
          </span>
          <button
            type="submit"
            className="bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50"
            disabled={
              (formik.values.tweet.length > MAX_NUMBER_TWEETS && true) ||
              formik.isSubmitting
            }
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}
