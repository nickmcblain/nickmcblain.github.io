import React from 'react';
import style from './chat.css';
import Message from '../../components/message';

const stubs = [
    {
        time: '14:48',
        message: 'Hi, I\'m Nick',
        user: false
    },
    {
        time: '14:49',
        message: 'Do you prefer Angular2 or ReactJS?',
        user: true
    },
    {
        time: '14:50',
        message: 'I prefer ReactJS due to it being more flexible, I have used Angular2 a lot and do still love the framework',
        user: false
    }
];

class Chat extends React.Component {
    constructor() {
        super();
        this.state = {
            messages: stubs,
            userInput: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({userInput: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.userInput) {
            this.state.messages.push({ time:'15:23', message: this.state.userInput, user: true });
            this.setState({ 
                messages: this.state.messages,
                userInput: ''
            });
            let div = document.getElementById('messages');
            div.scrollTop = div.scrollHeight;
        }
    }

    getMessages() {
        return this.state.messages.map((item, index) => {
            return (
                <Message key={index} message={item.message} user={item.user} />
            );
        });
    }

    render() {
        return (
            <article className={style.wrapper}>
                <div id='messages' className={style.messages}>
                    { this.getMessages() }
                </div>
                <form onSubmit={this.handleSubmit} className={style.inputField}>
                    <input type='text' value={this.state.userInput} onChange={this.handleChange} placeholder='Talk to NickBot...' className={style.input} />
                    <button type='submit' className={style.button}>-></button>
                </form>
            </article>
        );
    }
};

export default Chat;