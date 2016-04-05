/**
 * Created by Administrator on 2016/4/5.
 */
import ListConstants from './list.constants'
import ListDispatcher from './list.dispatcher'

import EventEmitter from 'events'
import  assign from 'object-assign'

var STAGE_LOAD_EVENT = 'load_stage';

var _stage;

var ListStore = assign({}, EventEmitter.prototype, {
    getStage: function (id) {
        return _stage[id];
    },

    // Emit load project event
    emitStageLoad: function () {
        this.emit(STAGE_LOAD_EVENT);
    },
    addLoadStageListener: function (callback) {
        this.on(STAGE_LOAD_EVENT, callback);
    },
    removeLoadStageListener: function (callback) {
        this.removeListener(STAGE_LOAD_EVENT, callback);
    }
});

ListDispatcher.register(function(payload) {
    var action = payload.action;

    switch (action.actionType) {
        case ListConstants.LIST_LOAD_STAGE:
            if(action.data) {
                _stage = action.data;
            }

            ListStore.emitStageLoad();
            break;
        default:
            return true;
    }

    return true;
});

export default ListStore;