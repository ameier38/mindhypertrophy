import React, {Component} from 'react'
import { 
    DisabledInput, SimpleForm, TextInput, LongTextInput
} from 'admin-on-rest/lib/mui'
import MarkdownInput from './MarkdownInput'
import MarkdownDisplay from './MarkdownDisplay'
import { change } from 'redux-form';
import { connect } from 'react-redux'

class ArticleForm extends Component {
    componentDidMount() {
        const storageId = this.props.record.id || 'new'
        const initialMarkdown = localStorage.getItem(storageId) || this.props.record.markdown
        this.props.dispatch(change('record-form', 'markdown', initialMarkdown))
    }
    render(){
        return (
            <SimpleForm {...this.props}>
                <DisabledInput source="id" />
                <TextInput source="title" />
                <TextInput source="slug" />
                <LongTextInput source="summary" />
                <TextInput source="tagNames" />
                <MarkdownInput source="markdown"/>
                <MarkdownDisplay source="markdown" />
            </SimpleForm>
        )
    }
}

export default connect()(ArticleForm)