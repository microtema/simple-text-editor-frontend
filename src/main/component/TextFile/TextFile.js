import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class TextFilerComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <div>Text File</div>;
    }
}

export default connect(null, null)(TextFilerComponent);