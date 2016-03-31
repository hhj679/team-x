/**
 * Created by Administrator on 2016/3/31.
 */

import React from 'react';
import { Draggable } from 'react-drag-and-drop'

var CardItem = React.createClass ({
    getInitialState: function() {
        return {
            data:  this.props.data
        };
    },
    render: function() {
        return (
            <Draggable type="fruit" data={this.state.data.content}>
            <li className="task ui-sortable-handle">
                <div className="task-priority task-priority-0">
                    <a className="task-priority-hint"></a>
                </div>
                <a className="check-box"> <span className="icon icon-tick"></span> </a>
                <div className="task-content-set open-detail">
                    <div className="avatar img-circle img-24 hinted"></div>
                    <div className="task-content-wrapper">
                        <div className="task-content">{this.state.data.content}</div>
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
                </Draggable>
        )
    }
});

export default CardItem;