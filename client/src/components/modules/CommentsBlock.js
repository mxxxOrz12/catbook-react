import React from "react";
// TODO (step9): import SingleComment and NewComment
import SingleComment from "../modules/SingleComment";
import { NewComment } from "./NewPostInput";

/**
 * @typedef ContentObject
 * @property {string} _id of story/comment
 * @property {string} creator_name
 * @property {string} content of the story/comment
 */

/**
 * Component that holds all the comments for a story
 *
 * Proptypes
 * @param {ContentObject[]} comments
 * @param {ContentObject} story
 */
const CommentsBlock = (props) => {
  // TODO (step9): implement render

  let commentsList = null;
  const hasComments = props.comments.length !== 0;
  if (hasComments) {
    commentsList = props.comments.map((commentObj) => (
      <SingleComment
        _id={commentObj._id}
        creator_name={commentObj.creator_name}
        content={commentObj.content}
      />
    ));
  } else {
    commentsList = <div>No comments!</div>;
  }

  return (
    <div className="Card-commentSection">
      {commentsList}
      <NewComment storyId={props.storyId} addNewComment={props.addNewComment} />
    </div>
  );
};

export default CommentsBlock;
