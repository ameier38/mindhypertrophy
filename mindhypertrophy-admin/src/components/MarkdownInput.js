import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class MarkdownInput extends Component {
    constructor(props){
        super(props)
        this.onMarkdownChange = this.onMarkdownChange.bind(this)
    }
    onMarkdownChange(e, newValue, inputOnChange) {
        inputOnChange(newValue)
        const { record: { id } } = this.props
        const storageId = id || 'new'
        console.log(`saving markdown in ${storageId}`)
        localStorage.setItem(storageId, newValue)
    }
    render() {
        const { input, label, meta: { touched, error } } = this.props
        const onChange = (e, newValue) => this.onMarkdownChange(e, newValue, input.onChange)
        const inputProps = {...input, onChange}
        return (
            <TextField
                multiLine
                fullWidth
                hintText={label}
                floatingLabelText={label}
                errorText={touched && error}
                {...inputProps} />
        )
    }
}
MarkdownInput.defaultProps = {
    addField: true
}

export default MarkdownInput
