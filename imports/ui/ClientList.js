import React, {PureComponent} from 'react'
import Client from './Client'
import {SortableContainer} from 'react-sortable-hoc'

class ClientList extends PureComponent {

    render() {
        return (
            <div className="ClientList">
                {this.props.clients.map((client, index) => {
                    return <Client key={client._id} index={index} client={client}
                        onSortEnd={this.props.onSortEnd}/>
                })}
            </div>
        );
    }
}

export default SortableContainer(ClientList)
