import React from 'react';
import style from './intro.css';
import vectorHead from '../../resources/nick-new.svg';

const Intro = () => (
    <section className={style.intro}>
        <article className={style.content}>
            <img src={vectorHead} className={style.image} />
            <h1><b>Hi,</b> I'm Nick</h1>
        </article>
    </section>
);

export default Intro;