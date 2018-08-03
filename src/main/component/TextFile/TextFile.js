import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createFilter} from 'react-search-input';
import './TextFile.css';
import * as TextFileConstants from './TextFile.constants';
import * as TextFileActions from './TextFile.actions';
import {Moment} from '../Boostrap/Moment';
import {ConfirmActions} from '../Modal';

const KEYS_TO_FILTERS = ['fileName'];

class TextFileComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            searchTerm: ''
        }
    }

    componentDidMount() {

        this.props.actions.loadEntries();
    }

    render() {

        const entries = this.props.entries.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));


        return (<div className="TextFile">

            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" value={this.state.searchTerm}
                           onChange={(e) => this.searchUpdated(e)} type="search" placeholder="Search"
                           aria-label="Search"/>
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
                    <th scope="col" style={{width: 220}}>Created</th>
                    <th scope="col" style={{width: 220}}>Last Modified</th>
                    <th scope="col" style={{width: 30}}>Edit</th>
                    <th scope="col" style={{width: 30}}>Delete</th>
                </tr>
                </thead>
                <tbody>
                {

                    entries.map((it, index) =>
                        <tr key={index} onDoubleClick={() => this.editEntry(it)}>
                            <th scope="row">{index + 1}</th>
                            <td>{it.fileName}</td>
                            <td>{it.size}</td>
                            <td><Moment time={it.createdDate}/></td>
                            <td><Moment time={it.lastModifiedDate}/></td>
                            <td align="center" style={{cursor: 'pointer'}} onClick={() => this.editEntry(it)}><i
                                className="fa fa-pencil"
                                aria-hidden="true">&nbsp;</i></td>
                            <td align="center" style={{cursor: 'pointer'}} onClick={() => this.deleteEntry(it)}><i
                                className="fa fa-times"
                                aria-hidden="true">&nbsp;</i></td>
                        </tr>)
                }
                </tbody>
                <tfoot>
                <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td style={{cursor: 'pointer'}} align="center" onClick={() => this.createEntry()}><i
                        className="fa fa-plus" aria-hidden="true">&nbsp;</i></td>
                </tr>
                </tfoot>
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

        this.props.confirmActions.confirm({
            title: 'Confirm',
            bodyHtml: '<span>Do you want to delete <b>' + entry.fileName + '</b>?</span>',
            execute: {
                caption: 'Delete',
                fn: () => {
                    this.props.actions.deleteEntry(entry);
                }
            }
        });
    }

    searchUpdated(e) {

        this.setState({searchTerm: e.target.value});
    }
}

function mapStateToProps(state) {

    return {
        entries: state[TextFileConstants.REDUCER_NAME].entries
    };
}

function mapDispatchToProps(dispatch) {

    return {
        actions: bindActionCreators(TextFileActions, dispatch),
        confirmActions: bindActionCreators(ConfirmActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TextFileComponent);