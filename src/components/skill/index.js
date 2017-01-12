import React from 'react';
import style from './skill.css';

const Skill = ({ name, value }) => {
    const prepareArray = (remaining) => {
        const arrayValues = [];

        for(let i = 0; i < value; i++) {
            arrayValues.push(1);
        }

        for(let i = 0; i < remaining; i++) {
            arrayValues.push(0);
        }

        return arrayValues;
    };

    const arrayValues = prepareArray(10 - value);

    const dots = arrayValues.map((item, index) => {
        return (
            <span key={index} className={ item ? style.filled : style.empty } />
        );
    });

    return (
        <li className={style.skill}>
            <p className={style.name}>{ name }</p>
            <div className={style.dots}>{ dots }</div>
        </li>
    );
};

export default Skill;