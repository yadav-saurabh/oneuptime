import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStatusPageIndividualNote, notmonitoredDays } from '../actions/status';

class BlockChart extends Component {
    constructor(props) {
        super(props);

        this.requestnotes = this.requestnotes.bind(this);
    }
    requestnotes = (need, date) => {
        if (this.props.time) {
            if (need) {
                this.props.getStatusPageIndividualNote(this.props.statusData.projectId._id, this.props.time.monitorId, date, this.props.monitorName, need);
            }
            else {
                this.props.notmonitoredDays(date, this.props.monitorName, 'No incidents yet');
            }
        }
        else if (this.props.emptytime || !need) {
            this.props.notmonitoredDays(this.props.emptytime, this.props.monitorName, 'No data available for this date');
        }
    }

    render() {
        let bar = null;
        let title = null;
        let title1 = null;
        let need = false;
        if (this.props.time) {
            if (this.props.time.downTime > 1 && this.props.time.downTime < 10) {
                bar = 'bar mid';
                title = moment((this.props.time.date).split('T')[0]).format('LL');
                title1 = `<br>degraded for ${this.props.time.downTime} minutes`;
                need = true;
            }
            else if (this.props.time.downTime >= 10) {
                var downtime = `${this.props.time.downTime} minutes`;
                if (this.props.time.downTime > 60) {
                    downtime = `${Math.floor(this.props.time.downTime / 60)} hrs ${this.props.time.downTime % 60} minutes`;
                }
                bar = 'bar down';
                title = moment((this.props.time.date).split('T')[0]).format('LL');
                title1 = `<br>down for ${downtime}`;
                need = true;
            }
            else {
                bar = 'bar';
                title = this.props.time.date ? moment((this.props.time.date).split('T')[0]).format('LL') : moment((new Date()).split('T')[0]).format('LL');
                title1 = '<br>No downtime';
            }
        }
        else {
            bar = 'bar empty';
            title = moment(this.props.emptytime).format('LL');
            title1 = '<br>No data Available';
        }
        return (
            <div className={bar} style={{ outline: 'none' }} title={title + title1} onClick={() => this.requestnotes(need, this.props.time.date)}></div>
        );
    }
}

BlockChart.displayName = 'BlockChart';

const mapStateToProps = (state) => ({ statusData: state.status.statusPage });

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getStatusPageIndividualNote,
    notmonitoredDays
}, dispatch)

BlockChart.propTypes = {
    time: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool,
    ]),
    statusData: PropTypes.object,
    getStatusPageIndividualNote: PropTypes.func,
    notmonitoredDays: PropTypes.func,
    monitorName: PropTypes.any,
    emptytime: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(BlockChart);