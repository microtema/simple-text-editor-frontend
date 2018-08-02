import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './TextEditor.css';
import * as TextEditorConstants from './TextEditor.constants';
import * as TextEditorActions from './TextEditor.actions';

class TextEditorComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {...this.props.data};
    }

    render() {

        return (<div className="TextEditor">
            <div style={{padding: 10}} onSubmit={() => false}>
                <div className="form-group">
                    <input type="text" value={this.props.data.fileName} onChange={(e) => this.handleFileNameChange(e)}
                           className="form-control" placeholder="File Name *.txt"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea value={this.props.data.content} onChange={(e) => this.handleContentChange(e)}
                              className="form-control" id="exampleFormControlTextarea1" rows="30"></textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-danger" onClick={() => this.cancelChanges()}>Cancel</button>
                    <button style={{marginLeft: 10}} onClick={() => this.applyChanges()}
                            className="btn btn-secondary">Apply
                    </button>
                    <button style={{marginLeft: 10}} onClick={() => this.saveChanges()} className="btn btn-success">Save
                    </button>
                </div>
            </div>
        </div>)
    }

    handleFileNameChange(e) {

        this.setState({fileName: e.target.value});
    }

    handleContentChange(e) {

        this.setState({content: e.target.value});
    }

    cancelChanges() {

        this.props.actions.cancel();
    }

    applyChanges() {

        let {id, fileName, content} = this.state;

        this.props.actions.applyChanges({id, fileName, content});
    }

    saveChanges() {

        let {id, fileName, content} = this.state;

        this.props.actions.saveChanges({id, fileName, content});
    }
}

function mapStateToProps(state) {

    return {
        data: state[TextEditorConstants.REDUCER_NAME].data
    };
}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(TextEditorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextEditorComponent);