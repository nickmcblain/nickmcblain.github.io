import React from 'react';
import style from './navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        let id = event.target.innerText.toLowerCase();
        let el = document.getElementById(id);
        let section = el.getBoundingClientRect();
        window.scrollTo(0, section.top - 50);
    }

    render() {
        const listItems = this.props.routes.map((item) => {
            return (
                <li onClick={this.handleClick} key={item} className={style.item}>
                    <a>{ item }</a>
                </li>
            );
        });

        return (
            <nav className={style.navigation}>
                <ul className={style.list}>
                    { listItems }
                </ul>
            </nav>
        );
    }
}

export default Navigation;