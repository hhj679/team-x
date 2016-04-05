/**
 * Created by Administrator on 2016/4/5.
 */
var Dispatcher = require('flux').Dispatcher;

var ListDispatcher = new Dispatcher();

ListDispatcher.handleAction = function(action) {
    this.dispatch({
        source: 'VIEW_ACTION',
        action: action
    });
};

export default ListDispatcher;