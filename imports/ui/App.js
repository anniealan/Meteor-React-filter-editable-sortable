import React, {PureComponent} from 'react'
import ClientList from './ClientList'
import Filter from './Filter'
import PropTypes from 'prop-types'
import {arrayMove} from 'react-sortable-hoc'
import { Client } from '../api/clients.js'
import { createContainer } from 'meteor/react-meteor-data'

class App extends PureComponent {

    state = {
        clients: [],
        filteredClients: [],
        searchText: ""
    }

    getChildContext() {
        return {
            updateClient: (id, label, value) => {
                const obj = {}
                obj[label] = value
                Client.update(id, {$set: obj})
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            clients: nextProps.clients,
            filteredClients: this.getFilteredClients(nextProps.clients)
        })
    }


    getFilteredClients = (clients) => {
        return clients.filter(client => {
            return  client.name.indexOf(this.state.searchText) != -1 ||
                    client.email.indexOf(this.state.searchText) != -1 ||
                    client.phone.indexOf(this.state.searchText) != -1
        })
    }
    handleChange = (e) => {
        const searchText = e.target.value
        const filteredClients = this.getFilteredClients(this.state.clients)
        this.setState({searchText, filteredClients})
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            filteredClients: arrayMove(this.state.filteredClients, oldIndex, newIndex)
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Client List</h1>
                <Filter searchText={this.state.searchText} handleChange={this.handleChange}/>
                <ClientList clients={this.state.filteredClients} onSortEnd = {this.onSortEnd}/>
            </div>
        );
    }
}

App.childContextTypes = {
    updateClient: PropTypes.func
}

export default createContainer(() => {
  return {
    clients: Client.find({}).fetch(),
  };
}, App);
