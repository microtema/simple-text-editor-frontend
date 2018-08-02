import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './TextFile.css';
import * as TextFileConstants from './TextFile.constants';
import * as TextFileActions from './TextFile.actions';
import Moment from "../Boostrap/Moment/Moment";

class TextFileComponent extends Component {

    componentDidMount() {

        this.props.actions.loadEntries();
    }

    render() {

        return (<div className="TextFile">

            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    <button style={{marginLeft: 20}} className="btn btn-outline-success" type="button"
                            onClick={() => this.createEntry()}>Create New File
                    </button>
                </form>
            </nav>

            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th scope="col" style={{width: 20}}>#</th>
                    <th scope="col">Name</th>
                    <th scope="col" style={{width: 100}}>Size</th>
                    <th scope="col" style={{width: 250}}>Created</th>
                    <th scope="col" style={{width: 250}}>Last Modified</th>
                    <th scope="col" style={{width: 30}}>Edit</th>
                    <th scope="col" style={{width: 30}}>Delete</th>
                </tr>
                </thead>
                <tbody>
                {

                    this.props.entries.map((it, index) =>
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{it.fileName}</td>
                            <td>{it.size}</td>
                            <td><Moment time={it.createdDate}/></td>
                            <td><Moment time={it.lastModifiedDate}/></td>
                            <td onClick={() => this.editEntry(it)}><i className="fa fa-pencil"
                                                                      aria-hidden="true">&nbsp;</i></td>
                            <td onClick={() => this.deleteEntry(it)}><i className="fa fa-times"
                                                                        aria-hidden="true">&nbsp;</i></td>
                        </tr>)
                }
                </tbody>
            </table>
        </div>)
    }

    createEntry() {
        this.props.actions.createEntry();
    }

    editEntry(entry) {

        this.props.actions.editEntry(entry);
    }

    deleteEntry(entry) {

        this.props.actions.deleteEntry(entry);
    }
}

function mapStateToProps(state) {

    return {
        entries: state[TextFileConstants.REDUCER_NAME].entries
    };
}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(TextFileActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextFileComponent);