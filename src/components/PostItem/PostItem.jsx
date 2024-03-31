import React from "react";
import style from "./PostItem.module.scss";
import { Link } from "react-router-dom";

function PostItem({ post, addOrDeleteFavorite }) {

  return (
    <div className={style.post}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}`}>Detail</Link>
      <button onClick={() => addOrDeleteFavorite(post)}>
        {!post.isFavorite ? "Add to favorite" : "Remove from favorite"}
      </button>
    </div>
  );
}

export default PostItem;
