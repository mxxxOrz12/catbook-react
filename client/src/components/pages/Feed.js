import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import SingleStory from "../modules/SingleStory.js";
// TODO (step4): import NewStory
// TODO (step6): remove SingleStory import, import Card

const Feed = () => {
  // TODO (step1): define state to hold stories
  const [stories, setStories] = useState([]);

  useEffect(() => {
    get("/api/stories").then((storyObjs) => {
      setStories(storyObjs);
    });
  }, []);

  return (
    <div>
      <SingleStory creator_name="Matt" content="test" />
    </div>
  );
  // TODO (step3): map the state to SingleStory components
  // TODO (step4): add in the NewStory component
  // TODO (step6): use Card instead of SingleStory
};

export default Feed;
