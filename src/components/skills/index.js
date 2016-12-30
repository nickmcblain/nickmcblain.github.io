import React from 'react';
import Skill from '../skill';
import style from './skills.css';

const Skills = () => {
    const stubs = [
        {
            name: 'Javascript ES5',
            value: 9
        },
        {
            name: 'Javascript ES6',
            value: 8
        },
        {
            name: 'Java',
            value: 5
        },
        {
            name: 'Javascript ES5',
            value: 9
        },
        {
            name: 'Javascript ES6',
            value: 8
        },
        {
            name: 'Java',
            value: 5
        }
    ];

    const skills = stubs.map((item, index) => {
        return (
            <Skill key={index} name={item.name} value={item.value} />
        );
    });

    return (
        <section id='skills'>
            <div className={style.container}>
                <header>Skills</header>
                <ul className={style.list}>
                    <h3 className={style.label}>Languages</h3>
                    { skills }
                </ul>
                <ul className={style.list}>
                    <h3 className={style.label}>Frameworks</h3>
                    { skills }
                </ul>
            </div>
        </section>
    );
};

export default Skills;