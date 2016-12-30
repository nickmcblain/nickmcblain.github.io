import React from 'react';
import Project from '../project';
import activation from '../../resources/Activation.png';
import style from './projects.css';

const Projects = () => {
    const projects = () => {
        return <Project imageUrl={ activation } caption='AngularJS/SASS Application' title='Capital One - Online Activation' description='Created to simplify the card activation service usually done over the phone. Made in AngularJS.' />
    };

    return (
        <section id='projects' className={style.projects}>
            <header>Projects</header>
            <main>
                { projects() }
                { projects() }
                { projects() }
                { projects() }
            </main>
        </section>
    );
}

export default Projects;