import React from 'react';
import style from './contact.css';
import Chat from '../../containers/chat';
import ContactInfo from '../contact-info/';

const Contact = () => {
    return (
        <section id='contact' className={style.contact}>
            <div className={style.container}>
                <header className={style.header}>Contact</header>
                <Chat />
                <ContactInfo />
            </div>
        </section>
    );
};

export default Contact;