import React from 'react';
import style from './navigation.css';
import FontAwesome from 'react-fontawesome';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {showMenu: false};

        this.handleClick = this.handleClick.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleClick(event) {
        let id = event.target.innerText.toLowerCase();
        let el = document.getElementById(id);
        let section = el.getBoundingClientRect();
        window.scrollTo(0, section.top - 50);
    }

    toggleMenu() {
        this.setState({showMenu: !this.state.showMenu});
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
                <div className={style.barsContainer}><FontAwesome onClick={this.toggleMenu} name='bars' className={style.bars} /></div>
                <ul className={style.list + (this.state.showMenu ? ' ' + style.show : '')}>
                    { listItems }
                </ul>
            </nav>
        );
    }
}

export default Navigation;