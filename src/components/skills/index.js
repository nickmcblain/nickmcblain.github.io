import React from 'react';
import Skill from '../skill';
import style from './skills.css';

import skills from '../../resources/data/skills.json';

const Skills = () => {
    const generateSkills = arr => (
        arr.map((item, index) => (
            <Skill key={index} name={item.title} value={item.value} />
        ))
    );

    const languages = generateSkills(skills.languages);
    const frameworks = generateSkills(skills.frameworks);

    return (
        <section id='skills'>
            <div className={style.container}>
                <header>Skills</header>
                <ul className={style.list}>
                    <h3 className={style.label}>Languages</h3>
                    { languages }
                </ul>
                <ul className={style.list}>
                    <h3 className={style.label}>Frameworks</h3>
                    { frameworks }
                </ul>
            </div>
        </section>
    );
};

export default Skills;