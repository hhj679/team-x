import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MainBar from '../components/navbar/navbar.react';

import './style.css'

var App = React.createClass({
    render: function () {
        return (
            <div onClick={this.click}>
                <MainBar></MainBar>
            </div>
        )
    },
    componentDidMount: function () {
        //$(document).click(function(e){
        //    console.log(e.target);
        //    if($(e.target).attr('data-flag')=='no') {
        //        e.stopPropagation(true);
        //    }
        //});


    },
    click: function(e) {

    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);