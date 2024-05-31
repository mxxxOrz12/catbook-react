import React, { useState, useEffect } from "react";
import { get } from "../../utilities";
import SingleStory from "./SingleStory.js";
import SingleComment from "./SingleComment.js";
import { NewComment } from "./NewPostInput";
// TODO (step9): import CommentsBlock

import "./Card.css";
import CommentsBlock from "./CommentsBlock.js";

/**
 * Card is a component for displaying content like stories
 *
 * Proptypes
 * @param {string} _id of the story
 * @param {string} creator_name
 * @param {string} content of the story
 */
const Card = (props) => {
  const [comments, setComments] = useState([]);

  const addNewComment = (comment) => {
    setComments([...comments, comment]);
  };

  useEffect(() => {
    get("/api/comment", { parent: props._id }).then((commentItems) => {
      setComments(commentItems);
    });
  }, []);

  return (
    <div className="Card-container">
      <SingleStory _id={props._id} creator_name={props.creator_name} content={props.content} />
      <CommentsBlock comments={comments} storyId={props._id} addNewComment={addNewComment} />
    </div>
  );
  // TODO (step9): use CommentsBlock
};

export default Card;
