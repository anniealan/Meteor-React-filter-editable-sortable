import React, {PureComponent} from 'react'
import EditableItem from './EditableItem'
import {SortableElement} from 'react-sortable-hoc'

class Client extends PureComponent {
    render() {
        return (
            <div className="Client">
                <EditableItem value={this.props.client.name} id={this.props.client._id} label="name"/>
                <EditableItem value={this.props.client.email} id={this.props.client._id} label="email"/>
                <EditableItem value={this.props.client.phone} id={this.props.client._id} label="phone"/>
            </div>
        );
    }
}

export default SortableElement(Client)
