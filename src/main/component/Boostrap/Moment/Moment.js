import React, {Component} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class Moment extends Component {

    constructor(props) {
        super(props);
        moment.locale('en');

        this.state = {
            defaultTimeFormat: 'MMM Do YYYY, h:mm:ss a',
            relativeDefaultTimeFormat: 'YYYYMMDD',
        }
    }

    render() {

        return (<span>{this.formatTime()}</span>)
    }

    formatTime() {

        if (this.props.relative) {
            return this.props.time ? moment(this.props.time, this.getTimeFormat()).fromNow() : '---';
        }

        return this.props.time ? moment(this.props.time).format(this.getTimeFormat()) : '---';
    }

    getTimeFormat() {

        if (this.props.format) {

            return this.props.format;
        }

        if (this.props.relative) {
            return this.state.relativeDefaultTimeFormat;
        }

        return this.state.defaultTimeFormat;
    }
}

Moment.propTypes = {
    time: PropTypes.any,
    format: PropTypes.any,
    relative: PropTypes.bool
};

export default Moment;