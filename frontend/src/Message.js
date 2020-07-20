import React from 'react';

const MESSAGE_API_URL = process.env.REACT_APP_MESSAGE_API_URL;

class Message extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: "Retrieving message from API..."
        }
    }

    async fetchMessage() {
        const response = await fetch(MESSAGE_API_URL);
        const body = await response.json();
        
        return body.message;
    }

    componentDidMount() {
        this.fetchMessage().then((msg) => {
            this.setState({ 
                message: msg,
            });
        });
    }
   
    render() {
        return (
            <p>
               <code>{this.state.message}</code>
            </p>
        );
    }
}

export default Message;  