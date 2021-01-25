import React from "react";


const CommentDetail = (props) => {
  let comment = props.children
  if (props.comment) {
    comment = props.comment
  }
  return (
    <div className="comment">
      <a className="avatar" href="/">
        <img src={props.faker} alt="" />
      </a>
      <div className="content">
        <a className="author" href="/">
          {props.name}
        </a>
        <div className="metadata">
          <div className="date">{props.timeAgo}</div>
          <div className="rating">
            <i className="star icon"></i>5 Faves
          </div>
        </div>
        <div className="text">
          {comment}
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
