import React from 'react';
import style from './role.css';

const Role = ({ company, title, imageUrl, description }) => (
    <article className={style.container}>
        <img className={style.image} src={ imageUrl }/>
        <div>
            <label className={style.company}>
            { company }
            </label>
            <label className={style.title}>
                { title }
            </label>
        </div>
        <p className={style.description}>{ description }</p>
    </article>
);

export default Role;