/**
 * Created by Administrator on 2016/4/5.
 */
import React from 'react';

import CardItem from '../card/card.react.js';

import ListStore from './list.store'


import Sortable from 'react-sortablejs';

var sortableOptions = {
    ref: 'list',
    model: 'stages',
    group: 'shared'
};

var ListPanel = React.createClass ({
    getInitialState: function () {
        return {
            stages: null
        };
    },
    componentDidMount: function() {
        ListStore.addLoadStageListener(this._loadStages);
    },
    componentWillUnmount: function() {
        ListStore.removeLoadStageListener(this._loadStages)
    },
    render: function() {
        var stage;
        if(this.state.stages){
            stage = this.state.stages.map(function(stage, index) {
                return (
                    <li className="task ui-sortable-handle">
                        <div className="task-priority task-priority-0">
                            <a className="task-priority-hint"></a>
                        </div>
                        <a className="check-box"> <span className="icon icon-tick"></span> </a>
                        <div className="task-content-set open-detail">
                            <div className="avatar img-circle img-24 hinted"></div>
                            <div className="task-content-wrapper">
                                <div className="task-content">{stage.content}</div>
                            </div>
                            <div className="task-info-wrapper clearfix">
                        <span className="label label-info">
                        <span className="icon icon-repeat-bold"></span> 每月重复 </span>
                        <span className="label label-important">
                            <span className="icon icon-calendar2 icon-white"></span>
                            <span>2014年10月6日</span>
                        </span>
                        <span className="label">
                            <i className="material-icons md-18">list</i> 0/1
                        </span>
                        <span className="label">
                            <i className="material-icons">link</i>
                        </span>
                        <span className="label">
                            <i className="material-icons">thumb_up</i>1
                        </span>
                        <span className="label tag">
                            <i className="material-icons">fiber_manual_record</i>
                            <span className="tag-name">tag</span>
                        </span>
                        <span className="label tag">
                            <i className="material-icons">fiber_manual_record</i>
                            <span className="tag-name">tag2</span>
                        </span>
                            </div>
                        </div>
                    </li>
                )
            });
        }

        return (
            <ul className="scrum-stage-tasks-done" ref="list">
                {stage}
            </ul>
        )
    },
    _loadStages: function() {
        if(undefined == this.state.stages){
            this.setState({
                stages: ListStore.getStage(this.props.id)
            });
        }
    }
});

export default Sortable(sortableOptions)(ListPanel);