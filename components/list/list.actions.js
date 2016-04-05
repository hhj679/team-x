/**
 * Created by Administrator on 2016/4/5.
 */
import ListDispatcher from './list.dispatcher'
import ListConstants from './list.constants'

var ListActions = {
    loadStages: function (data) {
        ListDispatcher.handleAction({
            actionType: ListConstants.LIST_LOAD_STAGE,
            data: data
        })
    }
};

export default ListActions;