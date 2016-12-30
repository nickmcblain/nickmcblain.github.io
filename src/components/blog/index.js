import React from 'react';
import Post from '../post';
import style from './blog.css';

const Blog = () => {
    const post = () => {
        return <Post title='My personal experience with Angular2' date='27th December 2016' description='Hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello. John the person cleaner is dirty on the weekends.' id={56} />
    };

    return (
        <section id='blog' className={style.blog}>
            <div className={style.container}>
                <header>Blog</header>
                { post() }
                { post() }
                { post() }
            </div>
        </section>
    );
};

export default Blog;