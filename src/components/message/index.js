import React from 'react';
import style from './message.css';

const Message = ({ message, user }) => {
    return (
        <div className={style.wrapper}>
            <p className={ user ? style.user : style.reply }>{ message }</p>
        </div>
    );
};

export default Message;