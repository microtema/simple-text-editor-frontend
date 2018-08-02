import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as constants from './Messaging.constants';
import './Messaging.css';

const createMarkup = encodedHtml => ({
    __html: '<p>' + _.unescape(encodedHtml) + '</p>',
});


class Messaging extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }

    componentWillReceiveProps(nextProps) {

        let messages = this.state.messages;

        if (nextProps.message.dismiss) {

            messages = this.state.messages
                .filter(it => this.getMessageType(it) !== 'error') //Error Message Type should be removed only by User manually
                .filter((it) => it.name !== nextProps.message.name); //Identify message by name

        } else if (!this.state.messages.find(it => it.message === nextProps.message.message)) {

            setTimeout(() => {

                messages = this.state.messages.filter(it => it !== nextProps.message);

                this.setState({messages: messages});

            }, this.getMessageTimeout(nextProps.message));

            messages = [nextProps.message, ...this.state.messages];
        }

        this.setState({messages: messages});
    }

    render() {

        return (<div className={'Messaging'} style={{display: (this.state.messages.length ? 'block' : 'none')}}>
            {
                this.state.messages.map((it, index) =>
                    <div key={index}
                         className={'alert alert-' + this.getMessageType(it) + ' alert-dismissible fade show'}
                         role="alert">
                        {
                            <div dangerouslySetInnerHTML={createMarkup(it.message)}/>
                        }
                        {
                            this.getButton(it.button, index)
                        }
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"
                                onClick={() => this.removeMessage(index)}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>)
            }
        </div>)
    }

    getButton(button, index) {

        if (!button) {
            return null;
        }

        return (<div className="eto-messageblock__buttons">
            <button className="eto-messageblock__button eto-btn"
                    onClick={() => this.handleButtonClick(button, index)}>{button.label}</button>
        </div>);
    }

    handleButtonClick(button, index) {

        if (button.onClick) {

            button.onClick();
        }

        this.removeMessage(index);
    }

    removeMessage(index) {

        this.setState({messages: this.state.messages.filter((it, i) => i !== index)});
    }

    getMessageType(message) {

        switch (message.status) {
            case 401 :
            case 500 :
                return 'danger';
            case 200 :
            case 206 :
                return 'success';
            case 300 :
                return 'info';
            case 403 :
                return 'warning';
            default:
                return 'info';
        }
    }

    getMessageTimeout(message) {

        switch (message.status) {
            case 401 :
            case 500 :
            case 403 :
                return constants.LONG_NOTIFICATION_TIMEOUT;
            default:
                if (message.button) {
                    return constants.LONG_NOTIFICATION_TIMEOUT;
                }

                return constants.SHORT_NOTIFICATION_TIMEOUT;
        }
    }
}

function mapStateToProps(state) {

    return {
        message: state[constants.REDUCER_NAME].message
    };
}

export default connect(mapStateToProps)(Messaging);