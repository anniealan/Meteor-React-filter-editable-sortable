import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'

class EditableItem extends PureComponent {

    state = {
        editingItem: "",
        editingValue: ""
    }

    edit = () => {
        this.setState({editingItem: this.props.label, editingValue: this.props.value})
    }

    handleInputChange = (e) => {
        this.setState({editingValue: e.target.value})
    }

    cancel = () => {
        this.setState({editingValue: "", editingItem: ""})
    }

    submit = () => {
        this.context.updateClient(this.props.id, this.state.editingItem, this.state.editingValue)
        this.setState({editingValue: "", editingItem: ""})
    }

    render() {
        if (this.state.editingItem === this.props.label) {
            return (
                <div className="EditableItem">
                        <b>{this.props.label}</b>:

                        <input type="text" value={this.state.editingValue} onChange={this.handleInputChange}/>
                        <button onClick={this.submit}>&#10004;</button>
                        <button onClick={this.cancel}>&#9747;</button>
                </div>
            )
        } else {
            return (
                <div className="EditableItem">
                    <p>
                        <b>{this.props.label}
                        </b>: {this.props.value}
                        <button onClick={this.edit} className="editIcon">&#9997;</button>
                    </p>
                </div>
            )
        }
    }
}

EditableItem.contextTypes = {
    updateClient: PropTypes.func
}

export default EditableItem
