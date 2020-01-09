import React from 'react';
import PropTypes from 'prop-types'
import moment from 'moment';
import { ListLoader } from '../basic/Loader';
import momentTz from 'moment-timezone';
import { currentTimeZone } from '../basic/TimezoneArray';

const IncidentTimelineList = (props) => {
    var { incident, skip, limit, prevClicked, nextClicked } = props;
    var  probes  = Object.assign([],incident.incident.probes);
    if (incident.incident && incident.incident.acknowledgedAt) {
        if (incident.incident.acknowledgedBy && incident.incident.acknowledgedBy.name) {
            probes.push({
                updatedAt: incident.incident.acknowledgedAt,
                name: incident.incident.acknowledgedBy.name,
                status: 'Acknowledged'
            });
        }
    }
    if (incident.incident && incident.incident.resolvedAt) {
        if (incident.incident.resolvedBy && incident.incident.resolvedBy.name) {
            probes.push({
                updatedAt: incident.incident.resolvedAt,
                name: incident.incident.resolvedBy.name,
                status: 'Resolved'
            });
        }
    }
    probes.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt));
    var count = probes && probes.length ? probes.length : null;
    if (skip && typeof skip === 'string') {
        skip = parseInt(skip, 10);
    }
    if (limit && typeof limit === 'string') {
        limit = parseInt(limit, 10);
    }
    if (!skip) skip = 0;
    if (!limit) limit = 0;

    let canNext = count && count > (skip + limit) ? true : false;
    let canPrev = (skip <= 0) ? false : true;

    if (incident && (incident.requesting || count < 1)) {
        canNext = false;
        canPrev = false;
    }

    return (
        <div>
            <div style={{ overflow: 'hidden', overflowX: 'auto' }}>
                <table className="Table">
                    <thead className="Table-body">
                        <tr className="Table-row db-ListViewItem db-ListViewItem-header">
                            <td className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px', minWidth: '210px' }}>
                                <div className="db-ListViewItem-cellContent Box-root Padding-all--8"><span className="db-ListViewItem-text Text-color--dark Text-display--inline Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-typeface--upper Text-wrap--wrap"><span>Reported By</span></span></div>
                            </td>
                            <td className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                <div className="db-ListViewItem-cellContent Box-root Padding-all--8"><span className="db-ListViewItem-text Text-color--dark Text-display--inline Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-typeface--upper Text-wrap--wrap"><span>Reported At</span></span></div>
                            </td>
                            <td className="Table-cell Table-cell--align--right Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                <div className="db-ListViewItem-cellContent Box-root Padding-all--8"><span className="db-ListViewItem-text Text-align--left Text-color--dark Text-display--block Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-typeface--upper Text-wrap--wrap"><span>Status</span></span></div>
                            </td>
                            <td id="overflow" type="action" className="Table-cell Table-cell--align--right Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                <div className="db-ListViewItem-cellContent Box-root Padding-all--8"><span className="db-ListViewItem-text Text-align--right Text-color--dark Text-display--block Text-fontSize--13 Text-fontWeight--medium Text-lineHeight--20 Text-typeface--upper Text-wrap--wrap"></span></div>
                            </td>
                        </tr>
                    </thead>
                    <tbody className="Table-body">
                        {
                            probes && probes.length > 0 ? (
                                probes.map((log, i) => {
                                    return (<tr id={`incident_timeline_${i}`} key={i} className="Table-row db-ListViewItem bs-ActionsParent db-ListViewItem--hasLink incidentListItem">

                                        <td className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--wrap db-ListViewItem-cell db-ListViewItem-cell--breakWord" style={{ height: '1px', minWidth: '210px' }}>
                                            <div className="db-ListViewItem-cellContent Box-root Padding-all--8">
                                                <span className="db-ListViewItem-text Text-color--cyan Text-display--inline Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-typeface--base Text-wrap--wrap">
                                                    {log.probeId ?
                                                        <div className="Box-root Margin-right--16">
                                                            <img src='/assets/img/robotics.svg' style={{ display: 'inline-block', height: '20px', width: '20px', borderRadius: '50%', margin: '5px 10px -4px 0px', backgroundColor: '#14AAD9' }} alt="" />
                                                            <span>{log.probeId.probeName ? log.probeId.probeName : 'Unknown Probe'}</span>
                                                        </div>
                                                        :
                                                        <div className="Box-root Margin-right--16">
                                                            <img src='/assets/img/profile-user.svg' style={{ display: 'inline-block', height: '20px', width: '20px', borderRadius: '50%', margin: '5px 10px -4px 0px'}} alt="" />
                                                            <span>{log.name ? log.name : 'Unknown User'}</span>
                                                        </div>
                                                    }
                                                </span>
                                            </div>
                                        </td>
                                        <td className="Table-cell Table-cell--align--right Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                            <div className="db-ListViewItem-link" >
                                                <div className="db-ListViewItem-cellContent Box-root Padding-horizontal--2 Padding-vertical--8">
                                                    <span className="db-ListViewItem-text Text-color--inherit Text-display--inline Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-typeface--base Text-wrap--wrap">
                                                        <div className="Box-root Flex">
                                                            <div className="Box-root Flex-flex">
                                                                <div className="db-RadarRulesListUserName Box-root Flex-flex Flex-alignItems--center Flex-direction--row Flex-justifyContent--flexStart">
                                                                    <div className="Box-root Flex-inlineFlex Flex-alignItems--center Padding-horizontal--8 Padding-vertical--2">
                                                                        <span className="Text-display--inline Text-fontSize--14 Text-lineHeight--16 Text-wrap--noWrap">
                                                                            <span>{currentTimeZone ? momentTz(log.updatedAt).tz(currentTimeZone).format('lll') : moment(log.updatedAt).format('lll')}</span>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="Table-cell Table-cell--align--left Table-cell--verticalAlign--top Table-cell--width--minimized Table-cell--wrap--noWrap db-ListViewItem-cell" style={{ height: '1px' }}>
                                            <div className="db-ListViewItem-link" >
                                                <div className="db-ListViewItem-cellContent Box-root Padding-horizontal--2 Padding-vertical--8">
                                                    <span className="db-ListViewItem-text Text-color--inherit Text-display--inline Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-typeface--base Text-wrap--wrap">
                                                        <div className="Box-root Flex-flex">
                                                            <div className="Box-root Flex-flex">
                                                                <div className="db-RadarRulesListUserName Box-root Flex-flex Flex-alignItems--center Flex-direction--row Flex-justifyContent--flexStart">
                                                                    {log && log.status && log.status === 'offline' ?
                                                                        (<div className="Badge Badge--color--red Box-root Flex-inlineFlex Flex-alignItems--center Padding-horizontal--8 Padding-vertical--2">
                                                                            <span className="Badge-text Text-color--red Text-display--inline Text-fontSize--12 Text-fontWeight--bold Text-lineHeight--16 Text-typeface--upper Text-wrap--noWrap">
                                                                                <span>offline</span>
                                                                            </span>
                                                                        </div>)
                                                                        : log && log.status && log.status === 'online' ?
                                                                            (<div className="Badge Badge--color--green Box-root Flex-inlineFlex Flex-alignItems--center Padding-horizontal--8 Padding-vertical--2">
                                                                                <span className="Badge-text Text-color--green Text-display--inline Text-fontSize--12 Text-fontWeight--bold Text-lineHeight--16 Text-typeface--upper Text-wrap--noWrap">
                                                                                    <span>online</span>
                                                                                </span>
                                                                            </div>)
                                                                            : log && log.status && log.status === 'degraded' ?
                                                                                (<div className="Badge Badge--color--yellow Box-root Flex-inlineFlex Flex-alignItems--center Padding-horizontal--8 Padding-vertical--2">
                                                                                    <span className="Badge-text Text-color--yellow Text-display--inline Text-fontSize--12 Text-fontWeight--bold Text-lineHeight--16 Text-typeface--upper Text-wrap--noWrap">
                                                                                        <span>degraded</span>
                                                                                    </span>
                                                                                </div>)
                                                                                : log && log.status && log.status === 'Resolved' ?
                                                                                (<div className="Badge Badge--color--green Box-root Flex-inlineFlex Flex-alignItems--center Padding-horizontal--8 Padding-vertical--2">
                                                                                    <span className="Badge-text Text-color--green Text-display--inline Text-fontSize--12 Text-fontWeight--bold Text-lineHeight--16 Text-typeface--upper Text-wrap--noWrap">
                                                                                        <span>Resolved</span>
                                                                                    </span>
                                                                                </div>)
                                                                                : log && log.status && log.status === 'Acknowledged' ?
                                                                                    (<div className="Badge Badge--color--yellow Box-root Flex-inlineFlex Flex-alignItems--center Padding-horizontal--8 Padding-vertical--2">
                                                                                        <span className="Badge-text Text-color--yellow Text-display--inline Text-fontSize--12 Text-fontWeight--bold Text-lineHeight--16 Text-typeface--upper Text-wrap--noWrap">
                                                                                            <span>Acknowledged</span>
                                                                                        </span>
                                                                                    </div>)
                                                                                :
                                                                                (<div className="Badge Badge--color--red Box-root Flex-inlineFlex Flex-alignItems--center Padding-horizontal--8 Padding-vertical--2">
                                                                                    <span className="Badge-text Text-color--red Text-display--inline Text-fontSize--12 Text-fontWeight--bold Text-lineHeight--16 Text-typeface--upper Text-wrap--noWrap">
                                                                                        <span>Unknown Status</span>
                                                                                    </span>
                                                                                </div>)
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="Table-cell Table-cell--align--right Table-cell--verticalAlign--top Table-cell--wrap--noWrap db-ListViewItem-cell">
                                        </td>
                                    </tr>
                                    )
                                })
                            ) :
                                <tr></tr>
                        }
                    </tbody>

                </table>
            </div>

            {incident && incident.requesting ? <ListLoader /> : null}

            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                {!probes || !probes.length ? 'We don\'t have any Probes yet' : null}
                {incident && incident.error ? incident.error : null}
            </div>
            <div className="Box-root Flex-flex Flex-alignItems--center Flex-justifyContent--spaceBetween">
                <div className="Box-root Flex-flex Flex-alignItems--center Padding-all--20">
                    <span className="Text-color--inherit Text-display--inline Text-fontSize--14 Text-fontWeight--regular Text-lineHeight--20 Text-typeface--base Text-wrap--wrap">
                        <span>
                            <span className="Text-color--inherit Text-display--inline Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-typeface--base Text-wrap--wrap">{count ? count + (count > 1 ? ' Logs' : ' Log') : '0 Logs'}</span>
                        </span>
                    </span>
                </div>
                <div className="Box-root Padding-horizontal--20 Padding-vertical--16">
                    <div className="Box-root Flex-flex Flex-alignItems--stretch Flex-direction--row Flex-justifyContent--flexStart">
                        <div className="Box-root Margin-right--8">
                            <button id="btnPrev" onClick={() => { prevClicked() }} className={'Button bs-ButtonLegacy' + (canPrev ? '' : 'Is--disabled')} disabled={!canPrev} data-db-analytics-name="list_view.pagination.previous" type="button">
                                <div className="Button-fill bs-ButtonLegacy-fill Box-root Box-background--white Flex-inlineFlex Flex-alignItems--center Flex-direction--row Padding-horizontal--8 Padding-vertical--4"><span className="Button-label Text-color--default Text-display--inline Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-typeface--base Text-wrap--noWrap"><span>Previous</span></span></div>
                            </button>
                        </div>
                        <div className="Box-root">
                            <button id="btnNext" onClick={() => { nextClicked() }} className={'Button bs-ButtonLegacy' + (canNext ? '' : 'Is--disabled')} disabled={!canNext} data-db-analytics-name="list_view.pagination.next" type="button">
                                <div className="Button-fill bs-ButtonLegacy-fill Box-root Box-background--white Flex-inlineFlex Flex-alignItems--center Flex-direction--row Padding-horizontal--8 Padding-vertical--4"><span className="Button-label Text-color--default Text-display--inline Text-fontSize--14 Text-fontWeight--medium Text-lineHeight--20 Text-typeface--base Text-wrap--noWrap"><span>Next</span></span></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

IncidentTimelineList.displayName = 'IncidentTimelineList'

IncidentTimelineList.propTypes = {
    incident: PropTypes.any,
    limit: PropTypes.any,
    nextClicked: PropTypes.func.isRequired,
    prevClicked: PropTypes.func.isRequired,
    skip: PropTypes.any
}

export default IncidentTimelineList;