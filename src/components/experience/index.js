import React from 'react';
import Role from '../role';
import image from '../../resources/images/C1_Core_NG_RGB_R.png';
import style from './experience.css';

import data from '../../resources/data/experience.json';

const Experience = () => {
    const experience = data.experience;

    const roles = () => {
        return <Role company={experience[0].company} title={experience[0].title} imageUrl={image} description={experience[0].description} />;
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