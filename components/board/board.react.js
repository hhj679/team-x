/**
 * Created by Administrator on 2016/4/5.
 */
import React from 'react';

import ListPanel from '../list/list.react';

import Sortable from 'react-sortablejs';

import ListActions from '../list/list.actions'

var sortableOptions = {
    ref: 'board',
    model: 'lists'
};

var BoardPanel = React.createClass ({
    getInitialState: function() {
        return {
            lists:  null
        };
    },
    componentDidMount: function() {
        var that = this;
        $.get(this.props.source, function(result) {
            if (result[0] && result[0]._id) {
                $.get('/testData/stages_' + result[0]._id + '.json', function(sresult) {
                    if(sresult && sresult.length>0) {
                        that.setState({
                            lists: sresult
                        });

                        var stageItems = [];
                        sresult.map(function(item) {
                            $.get('/testData/' + item._id + '.json', function(ssr) {
                                if(ssr && ssr.length>0) {
                                    stageItems[item._id] = ssr;
                                    //that.setState({
                                    //    stageItems: stageItems
                                    //});
                                    ListActions.loadStages(stageItems);
                                }
                            }.bind(that));
                        });
                    }
                }.bind(that));
            }
        }.bind(this));
    },
    render: function () {
        var that = this;
        var xml = <li className="scrum-stage toggler-parent stage-add-view">
            <div className="handler-wrap">
                <a className="expand-creator-handler">
                    <i className="material-icons">control_point</i>新建任务阶段...
                </a>
            </div>
            <div className="creator-wrap hidden">
                <input type="text" placeholder="新建任务阶段..." className="form-control stage-name"/>
                <div className="buttons"><a className="btn btn-link contract-creator-handler">取消</a>
                    <a className="btn btn-primary submit-add-stage">保存</a>
                </div>
            </div>
        </li>;
        var xml2 ;
        if(this.state.lists) {
            xml2 = this.state.lists.map(function(stage) {
                return(
                    <li className="scrum-stage toggler-parent" key={stage._id}>
                        <header className="scrum-stage-header">
                            <div className="stage-name">
                                <span className="icon icon-tick"></span>{stage.name}
                                <span className="task-count"> · {stage.totalCount}</span>

                            <span className="icon icon-chevron-right">
                                <i className="material-icons">keyboard_arrow_right</i>
                            </span>
                            </div>
                            <a className="stage-menu-toggler icon icon-clock2 hinted" data-title="添加或编辑任务阶段">
                                <i className="material-icons">play_circle_outline</i>
                            </a>
                        </header>
                        <div className="scrum-stage-wrap hidden-creator">
                            <section className="scrum-stage-content thin-scroll ui-sortable">
                                <ul className="scrum-stage-tasks"></ul>
                                <div className="task-creator-wrap" ></div>

                                <ListPanel id={stage._id}></ListPanel>

                            </section>
                            <div className="task-creator-handler-wrap">
                                <a className="task-creator-handler link-add-handler">
                                    <i className="material-icons">control_point</i>添加任务
                                </a>
                            </div>
                        </div>
                    </li>
                )
            });
        }

        return (
            <ul className="board-scrum-stages horizontal-scroll ui-sortable sortable" ref="board">
                {xml2}
                {xml}
            </ul>
        )
    }
});

export default Sortable(sortableOptions)(BoardPanel);