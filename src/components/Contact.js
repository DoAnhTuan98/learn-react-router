import React, { Component } from "react";
import { Prompt } from 'react-router-dom';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true
        }
    }
    render() {
        return (
            <div>
                Liên hệ
                <Prompt
                    when={this.state.isChecked}
                    message={(location) => (`Are you sure you want to go to ${location.pathname}`)}
                />
            </div>

        )
    }
}

export default Contact;
