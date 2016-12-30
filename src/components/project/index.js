import React from 'react';
import style from './project.css';

const Project = ({ imageUrl, caption, title, description }) => (
    <article className={style.project}>
        <div className={style.info}>
            <p><b>{ title }</b></p>
            <p>{ description }</p>
        </div>
        <figure className={style.figure}>
            <img src={ imageUrl } className={style.image} />
            <figcaption className={style.caption}>{ caption }</figcaption>
        </figure>
    </article>
);

export default Project;