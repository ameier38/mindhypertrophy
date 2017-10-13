import React from 'react'
import { Field } from 'redux-form';
import Markdown from './Markdown';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <Markdown>
        {input.value}
    </Markdown>
);
const MarkdownDisplay = () => (
    <span>
        <Field name="markdown" component={renderTextField} label="markdown" />
    </span>
);

export default MarkdownDisplay