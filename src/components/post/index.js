import React from 'react';
import style from './post.css';

const Post = ({ title, date, description, id }) => (
    <article className={style.post}>
        <h5 className={style.title}>{ title }</h5>
        <p className={style.date}>{ date }</p>
        <p>{ description }</p>
        <a href='#' className={style.link}>Read more...</a>
    </article>
);

export default Post;