import React, {PureComponent} from 'react'
import TextField from 'material-ui/TextField'

class Filter extends PureComponent {

    render() {
        return (
            <div className="Filter">
                <TextField hintText="Type name, email or phone" floatingLabelText="Search" value={this.props.searchText}
                    onChange={this.props.handleChange}/>
            </div>
        );
    }
}

export default Filter
