import React from 'react';
import Role from '../role';
import image from '../../resources/C1_Core_NG_RGB_R.png';
import style from './experience.css';

const Experience = () => {
    const roles = () => {
        return <Role company='Capital One UK' title='Software Engineer' imageUrl={image} description='Hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello. John the person cleaner is dirty on the weekends.Hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello. John the person cleaner is dirty on the weekends.' />;
    };

    return (
        <section id='experience' className={style.experience}>
            <div className={style.container}>
                <header>Experience</header>
                <main>
                    { roles() }
                </main>
            </div>
        </section>
    );
};

export default Experience;