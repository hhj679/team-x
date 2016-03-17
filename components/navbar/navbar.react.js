/**
 * Created by Administrator on 2016/3/10.
 */
import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Dropdown} from 'react-bootstrap';

import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Avatar from 'material-ui/lib/avatar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-icons/iconfont/material-icons.css'
import './style.css';

var project1_logo = {
    "backgroundImage": "url(images/cover-other.jpg)"
};
var project2_logo = {
    "backgroundImage": "url(images/cover-media.jpg)"
};

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
                        <div className="nav-menu-handler sub-nav-right-div" >
                            <i className="material-icons md-18 sub-nav-right-icons">sort</i>
                            <span className="sub-nav-right-text">菜单</span>
                        </div>
                        <div className="nav-menu-handler sub-nav-right-div">
                            <i className="material-icons md-18 sub-nav-right-icons">playlist_add_check</i>
                            <span className="sub-nav-right-text">筛选</span>
                        </div>
                        <div className="nav-menu-handler sub-nav-right-div">
                            <i className="material-icons md-18 sub-nav-right-icons">people</i>
                            <span className="sub-nav-right-text">2</span>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
});

class MainBar extends React.Component {
    render() {
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
                        <SubBar></SubBar>
                    </div>
                </div>
            </div>
            </div>
        )
    };
}

export default MainBar;