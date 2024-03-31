import React from 'react'
import PostItem from '../PostItem/PostItem';
import style from './PostList.module.scss';

function PostList({postsProps, addOrDeleteFavorite}) {

    return (
        <div className={style.posts}>
            {postsProps.map((post) => (
                <PostItem addOrDeleteFavorite={addOrDeleteFavorite} post={post} key={post.id} />
            ))}
        </div>
    )

}

export default PostList
