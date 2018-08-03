import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import * as constants from './Confirm.constants';

const createMarkup = encodedHtml => ({
    __html: '<p>' + _.unescape(encodedHtml) + '</p>',
});

class Confirm extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    componentWillReceiveProps() {

        this.open();
    }

    render() {

        return (<div className={'modal fade' + (this.state.open ? ' show' : '')} tabIndex="-1" role="dialog"
                     aria-labelledby="exampleModalCenterTitle" aria-hidden="true"
                     style={{display: this.state.open ? 'block' : 'none'}}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle"><span
                            dangerouslySetInnerHTML={createMarkup(this.props.data.title)}/></h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={() => this.onAction('cancel')}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {this.createBody()}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary"
                                onClick={() => this.onAction('cancel')}>{this.getCaption('cancel', 'Close')}</button>
                        <span style={{display: (this.props.data.execute ? 'block' : 'none')}}>
                    <button type="button" className="btn btn-primary"
                            onClick={() => this.onAction('execute')}>{this.getCaption('execute', 'Ok')}</button>
                    </span>
                        <span style={{display: (this.props.data.discard ? 'block' : 'none')}}>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal"
                            onClick={() => this.onAction('discard')}>{this.getCaption('discard', 'No')}</button>
                    </span>
                    </div>
                </div>
            </div>
        </div>)
    }

    createBody() {

        if (this.props.data.bodyHtml) {

            return (<div dangerouslySetInnerHTML={createMarkup(this.props.data.bodyHtml)}/>);
        } else if (this.props.data.messages) {

            return this.renderMessages(this.props.data.messages);
        }

        return this.props.data.body;
    }

    close() {

        this.setState({open: false});

        //NOTE: It is important to nullify the body after closing the modal
        this.props.data.body = null;
    }

    open() {

        this.setState({open: true});
    }

    onAction(action) {

        this.close();

        if (this.props.data[action] && this.props.data[action].fn) {

            this.props.data[action].fn();
        }
    }

    getCaption(action, defaultCaption) {

        if (this.props.data[action]) {

            return this.props.data[action].caption || defaultCaption;
        } else {

            return defaultCaption;
        }
    }

    renderMessages(messages) {

        return (<ul className='eto-bulleted-list'>
            {
                messages.map((it, index) => <li key={index}>
                    <div dangerouslySetInnerHTML={createMarkup(it)}/>
                </li>)
            }
        </ul>);
    }
}

function mapStateToProps(state) {

    return {
        data: state[constants.REDUCER_NAME]
    };
}

export default connect(mapStateToProps)(Confirm);