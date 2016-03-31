/**
 * Created by Administrator on 2016/3/10.
 */
import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Dropdown} from 'react-bootstrap';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Avatar from 'material-ui/lib/avatar';

import { Droppable } from 'react-drag-and-drop'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-icons/iconfont/material-icons.css'
import './style.css';

import CardItem from '../card/card.react';

var project1_logo = {
    "backgroundImage": "url(images/cover-other.jpg)"
};
var project2_logo = {
    "backgroundImage": "url(images/cover-media.jpg)"
};

var RightPanel = React.createClass({
    render: function() {
        return (
            <div className="project-panel hidden">
                <div className="scrum-pannel thin-scroll">
                    <section className="scrum-pannel-content">
                        <div className="scrum-filter-wrap">
                            <div className="scrum-pannel-header">

                                <span className="title">{this.props.title}</span>
                                <a className="icon icon-remove close-handler"></a>
                            </div>
                            {this.props.children}
                        </div>
                    </section>
                </div>
            </div>
        )
    }
});

var MemberBody = React.createClass({
   render: function() {
       return (
           <div className="member-bar-body member-bar-view">
               <div className="member-bar-input-wrap">
                   <input className="filter-input form-control ui-autocomplete-input" placeholder="搜索成员" autoComplete="off"/>
               </div>
               <ul className="members-list clearfix">
                   <li className="member add-members-handler">
                       <div className="add-members">
                           <i className="img-icon img-icon-circle-cross-36 add-member-icon"></i>
                       </div>
                       <p className="add-members-p">邀请新成员</p>
                   </li>
                   <li className="member member-detail ui-draggable-handle">
                       <div className="avatar img-circle img-36 pull-left">  </div>
                       <div className="member-info">
                           <p className="member-name">
                               <strong>hhj</strong>
                           </p>
                           <p className="member-title muted"> huhx08281@126.com </p>
                       </div>
                   </li>
                   <li className="member member-detail ui-draggable-handle">
                       <div className="avatar img-circle img-36 pull-left">
                           <span className="icon icon-leave-state never-visit"></span>
                       </div>
                       <div className="member-info">
                           <p className="member-name">
                               <strong>hhj0001</strong>
                           </p>
                           <p className="member-title muted"> 315476826@qq.com </p>
                       </div>
                   </li>
               </ul>
           </div>
       )
   }
});

var ScrumFilter = React.createClass({
    render: function () {
        return (
            <div>
                <div className="filter-input-wrap">
                    <input className="form-control" placeholder="查找相关任务"/>
                </div>
                <ul className="scrum-filter-tags list"></ul>
                <ul className="scrum-filter-executors list">
                    <li className="member-wrap ">
                        <a className="member">
                            <div className="avatar img-circle img-24 no-avatar"></div>
                            待认领
                        </a>
                    </li>
                    <li className="member-wrap ">
                        <a className="member">
                            <div className="avatar img-circle img-24" ></div>
                            hhj
                        </a>
                    </li>
                    <li className="member-wrap ">
                        <a className="member" >
                            <div className="avatar img-circle img-24"></div>
                            hhj0001
                        </a>
                    </li>
                </ul>
                <div className="scrum-filter-done-wrap">
                    <a className="filter-done-handler">
                        <div className="check-box pull-left">
                            <span className="icon icon-tick"></span>
                        </div>
                        <span>隐藏已完成任务</span>
                    </a>
                </div>
                <div className="scrum-filter-today-wrap">
                    <a className="filter-today-handler">
                        <div className="check-box pull-left">
                            <span className="icon icon-tick"></span>
                        </div>
                        <span>今日更新</span>
                    </a>
                </div>
            </div>
        )
    }
});

var RightMenu = React.createClass({
   render: function() {
       return (
           <div className="activity-panel-body thin-scroll">
               <div className="activity-panel-all">
                   <div className="project-menus">
                       <ul className="list activities-panel-menu-list">
                           <li><a className="app" data-app="settings"
                                  data-gta="{action: 'open project settings', control: 'Side Menu'}"> <span
                               className="icon icon-cog"></span>项目设置 </a></li>
                           <li><a className="project-archives-handler"
                                  data-gta="{action: 'show archived content', type: 'content menu', control: 'Side Menu'}">
                               <span className="icon icon-archive"></span>查看归档 </a></li>
                           <li><a className="activity-panel-all-plugin switch-handler" data-type="plugins"> <i
                               className="icon icon-more"></i>查看更多 </a></li>
                       </ul>
                   </div>
                   <div className="activity-panel-statistics">
                       <div className="activity-card-datas activity-card" data-id="activity-card-datas">
                           <header className="activity-card-header"><i className="icon icon-alert-clock"></i> <span
                               className="activity-card-title">任务统计</span></header>
                           <div className="dataStatistics">
                               <div className="activity-unassignedtasks activity-link-unassign data-handler"
                                    data-gta="{action: 'switch smart task group', type: 'unassigned', control: 'Side Menu'}">
                                   <div className="activity-unassignedtasks-title">待认领的任务</div>
                                   <a className="activity-link"> <span className="unassignedtasks-number">20</span> </a></div>
                               <div className="activity-today activity-link-today data-handler"
                                    data-gta="{action: 'switch smart task group', type: 'today', control: 'Side Menu'}">
                                   <div className="activity-today-title">今天的事</div>
                                   <a className="activity-link"> <span className="todayDatas-number">20</span> </a></div>
                           </div>
                       </div>
                   </div>
                   <div className="activity-panel-card-table">
                       <div className="activity-card-table activity-card" data-id="activity-card-table">
                           <header className="activity-card-header"><span className="activity-card-title">项目进展</span></header>
                           <section className="activity-card-body">
                               <div id="chart" className="activity-table-chart">
                                   <div className="tasks-chart-view">
                                       <svg width="266" height="95">
                                           <g className="main-graph">
                                               <polyline
                                                   points="0,33 19,33 38,33 57,33 76,33 95,33 114,33 133,33 152,33 171,33 190,33 209,33 228,33 256,19 266,19"
                                                   ></polyline>
                                               <polygon
                                                   points="0,33.5 19,33.5 38,33.5 57,33.5 76,33.5 95,33.5 114,33.5 133,33.5 152,33.5 171,33.5 190,33.5 209,33.5 228,33.5 256,19.5 256,95.5 0,95.5 0,33"
                                                   ></polygon>
                                               <polyline
                                                   points="0,91 19,91 38,91 57,91 76,91 95,91 114,91 133,91 152,91 171,91 190,91 209,91 228,91 256,91"
                                                   ></polyline>
                                               <polygon
                                                   points="0,91.5 19,91.5 38,91.5 57,91.5 76,91.5 95,91.5 114,91.5 133,91.5 152,91.5 171,91.5 190,91.5 209,91.5 228,91.5 256,91.5 256,95.5 0,95.5 0,91"
                                                   ></polygon>
                                           </g>
                                           <g className="point show" id="pointA">
                                               <circle cx="256" cy="19" r="8" fill="#03A9F4"
                                                       fillOpacity="0.2"></circle>
                                               <circle cx="256" cy="19" r="3" fill="#03A9F4" stroke="white"
                                                       strokeWidth="1"></circle>
                                           </g>
                                           <g className="point show" id="pointB">
                                               <circle cx="256" cy="91" r="8" fill="#259B24"
                                                       fillOpacity="0.2"></circle>
                                               <circle cx="256" cy="91" r="3" fill="#259B24" stroke="white"
                                                       strokeWidth="1"></circle>
                                           </g>
                                       </svg>
                                       <div className="chart-hint"
                                            ><p>今天</p> <p>
                                           168 未完成</p> <p>8 已完成</p></div>
                                   </div>
                               </div>
                           </section>
                       </div>
                   </div>
                   <ul className="list activity-panel-activities-list">
                       <li className="activity-panel-activities-title">
                           <div className="project-activies-title"><i className="icon icon-align-left"></i> <span
                               className="activity-card-title">项目动态</span></div>
                       </li>
                       <li className="activity-panel-activities-wrap">
                           <div className="activity-panel-activities">
                               <div className="activities-content detail-content">
                                   <div className="activities-header">
                                       <header>项目动态</header>
                                       <a href="" className="close-handler icon icon-remove" data-dismiss="modal"></a></div>
                                   <div className="activity-panel-activities-body">
                                       <div className="activity-card-common on-openable activity-card"
                                            data-id="56f40fe2b1bb4c747e34fcf5" data-type="task"
                                            data-gta="{action: 'open detail', type: 'task', control: 'Side Menu'}">
                                           <header className="activity-card-header"><i className="avatar img-circle"></i>
                                           </header>
                                           <div className="activity-content"><span className="activity-card-title"><b>hhj</b> 创建了任务：</span>
                                               <section className="activity-card-body">
                                                   <div className="activity-task activity-child "
                                                        data-id="56f40fe2b1bb4c747e34fcf4">
                                                       <div className="activity-task-title activity-title"> dasdas</div>
                                                   </div>
                                               </section>
                                               <footer className="activity-card-footer">
                                                   <time dateTime="2016-03-24T16:03:46.712Z">今天 0:03</time>
                                               </footer>
                                           </div>
                                       </div>
                                       <div className="activity-card-common on-openable activity-card"
                                            data-id="56f40fe07edcabe26b2065eb" data-type="task"
                                            data-gta="{action: 'open detail', type: 'task', control: 'Side Menu'}">
                                           <header className="activity-card-header"><i className="avatar img-circle"></i>
                                           </header>
                                           <div className="activity-content"><span className="activity-card-title"><b>hhj</b> 创建了任务：</span>
                                               <section className="activity-card-body">
                                                   <div className="activity-task activity-child "
                                                        data-id="56f40fe07edcabe26b2065ea">
                                                       <div className="activity-task-title activity-title"> dasdas</div>
                                                   </div>
                                               </section>
                                               <footer className="activity-card-footer">
                                                   <time dateTime="2016-03-24T16:03:44.744Z">今天 0:03</time>
                                               </footer>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </li>
                       <li><a className="activity-panel-all-footer project-activies-handler" data-type="activities"> <i
                           className="icon icon-more"></i>查看所有项目动态 </a></li>
                   </ul>
               </div>
           </div>
       )
   }
});

var ProjectPanel = React.createClass({
    render: function() {
        return (
           <RightPanel title="任务筛选">
               {this.props.children}
           </RightPanel>
        )
    }
});

var SubBar = React.createClass({
    getInitialState: function () {
        return {
            open: false
        }
    },
    onToggle: function(open) {
        if (this._inputWasClicked) {
            this._inputWasClicked = false;
            return;
        }
        this.setState({open: open});
    },
    inputWasClicked: function() {
        this._inputWasClicked = true;
    },
    onSelect: function (e, k) {
       if(k=='5.1') {
           this._inputWasClicked = true;
       }
    },
    render: function() {
        return (
            <Navbar>
                <Navbar.Collapse>
                    <Nav pullLeft className="sub-nav-left">
                        <NavDropdown eventKey={5}   id="sub1" title="MyProjects" open={this.state.open} onToggle={this.onToggle} onSelect={this.onSelect}>
                            <input className="sub-nav-left-projects-search-input" placeholder="查找项目" onSelect={this.inputWasClicked}/>
                            <MenuItem eventKey={5.1} >个人项目</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={5.2}>
                                <div className="sub-nav-left-projects-item">
                                    <div className="project-logo pull-left" style={project1_logo}></div>
                                    <span>熟悉teambition</span>
                                </div>
                            </MenuItem>
                            <MenuItem eventKey={5.3}>
                                <div className="sub-nav-left-projects-item selected">
                                    <div className="project-logo pull-left" style={project2_logo}></div>
                                    <span>TPDM</span>
                                </div>
                            </MenuItem>
                        </NavDropdown>
                        <i className="material-icons md-18 sub-nav-star">star</i>
                    </Nav>

                    <div className="sub-nav-body">
                        <Nav className="sub-nav-center">
                            <NavDropdown eventKey={3} title="main task" id="sub2">
                                <MenuItem eventKey={3.1}>Action</MenuItem>
                                <MenuItem eventKey={3.2}>Another action</MenuItem>
                                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Separated link</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={1} href="#">分享</NavItem>
                            <NavItem eventKey={2} href="#">文件</NavItem>
                            <NavItem eventKey={3} href="#">日程</NavItem>
                            <NavItem eventKey={4} href="#">标签</NavItem>
                        </Nav>
                    </div>

                    <Nav pullRight>
                        <div className="nav-menu-handler sub-nav-right-div" onClick={this.props.showMenu}>
                            <i className="material-icons md-18 sub-nav-right-icons">sort</i>
                            <span className="sub-nav-right-text">菜单</span>
                        </div>
                        <div className="nav-menu-handler sub-nav-right-div" onClick={this.props.showFilter}>
                            <i className="material-icons md-18 sub-nav-right-icons">playlist_add_check</i>
                            <span className="sub-nav-right-text">筛选</span>
                        </div>
                        <div className="nav-menu-handler sub-nav-right-div" onClick={this.props.showMembers}>
                            <i className="material-icons md-18 sub-nav-right-icons">people</i>
                            <span className="sub-nav-right-text">2</span>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
});

var ListPanel = React.createClass ({
    getInitialState: function() {
        return {
            list:  null
        };
    },
    componentDidMount: function() {
        var that = this;
        $.get(this.props.source, function(result) {
            if (result[0] && result[0]._id) {
                $.get('/testData/stages_' + result[0]._id + '.json', function(sresult) {
                    if(sresult && sresult.length>0) {
                        that.setState({
                            list: sresult
                        });

                        var stageItems = [];
                        sresult.map(function(item) {
                            $.get('/testData/' + item._id + '.json', function(ssr) {
                                if(ssr && ssr.length>0) {
                                    stageItems[item._id] = ssr;
                                    that.setState({
                                        stageItems: stageItems
                                    });
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
        if(this.state.list) {
            xml2 = this.state.list.map(function(stage) {
                var stages;
                if(that.state.stageItems && that.state.stageItems[stage._id]){
                    stages = that.state.stageItems[stage._id].map(function(item){
                        return (
                            <CardItem data={item}></CardItem>
                        )
                    })
                }
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
                                <ul className="scrum-stage-tasks-done">
                                    {stages}
                                </ul>
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
            <Droppable
                types={['fruit']} // <= allowed drop types
                onDrop={this.onDrop}>
                <ul className="board-scrum-stages horizontal-scroll ui-sortable sortable">
                    {xml2}
                    {xml}
                </ul>
            </Droppable>
        )
    },
    onDrop: function(data) {
        console.log(data)
    }
});

var BoardPanel = React.createClass ({
    render: function() {
        return (
            <div className="board-view">
                <div className="board-scrum-view fade in workflow-mode">
                        {this.props.children}
                </div>
            </div>
        )
    }
});

var MainBar = React.createClass ({
    getInitialState: function () {
        return {
            rightPanel: <MemberBody></MemberBody>,
            rightPanelTitle: '项目成员'
        }
    },
    render: function() {
        return (
            <div>
            <header id="navigator" className="navbar navbar-fixed-top">
                <div className="navigation-view nav-inner row-flex">
                    <header className="nav-header"><a className="logo " data-gta="{action: 'open projects page', control: 'Logo'}"></a>
                    </header>
                    <section className="nav-body">
                        <div className="nav-body-handler-set clearfix">
                            <a className="nav-body-handler projects-handler active"
                                                                      data-gta="{action: 'open projects page', control: 'Navigation Tab'}">
                            项目 </a>
                            <a className="nav-body-handler organization-switcher-handler"
                                       data-gta="{action: 'open organization tab', control: 'Navigation Tab'}"> 企业 </a> <a
                            className="nav-body-handler my-handler" data-gta="{action: 'open me tab', control: 'Navigation Tab'}">
                            我的 <span className="nav-badge" data-mark="task"></span> </a>
                            <a
                            className="nav-body-handler calendar-handler"
                            data-gta="{action: 'open calendar tab', control: 'Navigation Tab'}"> 日历 </a>
                            <a
                            className="nav-body-handler inbox-handler"
                            data-gta="{action: 'open inbox tab', control: 'Navigation Tab'}"> 收件箱 <span className="nav-badge"
                                                                                                        data-mark="message"></span>
                            </a>
                        </div>
                        <div className="nav-search"><span className="icon icon-search"></span> <input className="nav-search-input"
                                                                                              type="search" placeholder="搜索"/>
                        </div>
                    </section>
                    <footer className="nav-footer">
                        <div className="nav-footer-wrap">
                            <a className="nav-footer-handler" data-mark="my" data-toggle="dropdown"
                               data-gta="{action: 'open avatar menu', control: 'Navigation Tab'}"> <span
                                className="nav-avatar img-circle"
                               ></span>
                            </a>
                        </div>
                        <a className="new-ribbon" data-gta="{action: 'new ribbon', control: 'Navigation Tab'}"
                           href="https://blog.teambition.com/updates" target="_blank" >新功能</a>

                        <div className="nav-footer-wrap">
                            <a className="nav-footer-handler" data-mark="create"
                               data-gta="{action: 'open global add menu', control: 'Global Add Button'}"
                               data-toggle="dropdown"> <span className="img-icon img-icon-circle-cross-32"></span> </a>
                        </div>

                        <div className="nav-footer-wrap">
                            <a className="nav-footer-handler" data-mark="help" data-gta="{action: 'add feedback', control: 'Navigation Tab'}">
                                <i className="material-icons md-18">search</i>
                            </a>
                        </div>

                        <div className="nav-footer-wrap nav-question">
                            <a className="nav-footer-handler" data-mark="help" data-gta="{action: 'add feedback', control: 'Navigation Tab'}">
                                <span className="glyphicon glyphicon-question-sign" aria-hidden="true"></span>
                            </a>
                        </div>
                    </footer>
                </div>
            </header>
            <div id="content">
                <div className="project-app-view">
                    <div className="row sub-navigator">
                        <SubBar showFilter={this.onShowFilter} showMembers={this.onShowMembers} showMenu={this.onShowMenu}></SubBar>
                    </div>
                    <BoardPanel>
                        <ListPanel source="/testData/project_5411a22f464883e06190df0a.json">
                        </ListPanel>
                    </BoardPanel>
                </div>
                <ProjectPanel title={this.state.rightPanelTitle}>{this.state.rightPanel}</ProjectPanel>
            </div>
            </div>
        )
    },
    onShowFilter: function() {
        this.setState({rightPanel:<ScrumFilter></ScrumFilter>,rightPanelTitle:"任务筛选"})
    },
    onShowMembers: function() {
        this.setState({rightPanel:<MemberBody></MemberBody>,rightPanelTitle:"项目成员"})
    },
    onShowMenu: function() {
        this.setState({rightPanel:<RightMenu></RightMenu>,rightPanelTitle:"项目菜单"})
    }
});

export default MainBar;