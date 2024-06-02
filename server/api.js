/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

const router = express.Router();

// we haven't set up user login yet, so just
// use a hardcoded name for now
// TODO (step2) change to a unique name for workshop
const myName = "Ma Xiao";

const data = {
  stories: [
    {
      _id: 0,
      creator_name: "Tony Cui",
      content: "Send it or blend it?",
    },
    {
      _id: 1,
      creator_name: "Andrew Liu",
      content: "web.labing with Tony <3",
    },
  ],
  comments: [
    {
      _id: 0,
      creator_name: "Stanley Zhao",
      parent: 0,
      content: "Both!",
    },
  ],
};

router.get("/test", (req, res) => {
  res.send({ message: "Wow I made my first API! In its own file!" });
});

router.get("/stories", (req, res) => {
  // send back all of the stories!
  res.send(data.stories);
});

router.get("/comment", (req, res) => {
  const filteredComments = data.comments.filter((comment) => comment.parent == req.query.parent);
  res.send(filteredComments);
});

// TODO-2 (step2) Add post story endpoint
router.post("/story", (req, res) => {
  const newStory = {
    _id: data.stories.length,
    creator_name: myName,
    content: req.body.content,
  };

  data.stories.push(newStory);
  res.send(newStory);
});

// TODO-3 (step2) Add post comment endpoint
router.post("/comment", (req, res) => {
  const newComment = {
    _id: data.comments.length,
    creator_name: myName,
    parent: req.body.parent,
    content: req.body.content,
  };
  data.comments.push(newComment);

  res.send(newComment);
});

// TODO-1 (step2) Add catch-all endpoint for /api
router.all("*", (req, res) => {
  console.log(`API Route not found: ${req.method} ${req.url}`);
  res.status(404).send({ message: "API Route not found" });
});

module.exports = router;
