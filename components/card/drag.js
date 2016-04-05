import React from 'react';
import Sortable from 'react-sortablejs';

const sortableOptions = {
    ref: 'list',
    model: 'item',
    group: 'shared'
};

var SimpleList = React.createClass({
    getInitialState: function() {
        return {
            item: this.props.items2
        };
    },
    render() {
        const items1 = this.state.item.map((text, index) => (
            <li key={index}>{text}</li>
        ));

        return (
            <div>
                <ul ref="list">{items1}</ul>
            </div>
        );
    }
});

export default Sortable(sortableOptions)(SimpleList);