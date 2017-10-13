import React, { PropTypes } from 'react'
import { 
    List, Edit, Create, Datagrid, TextField, EditButton, 
} from 'admin-on-rest/lib/mui'
import DeleteButton from './DeleteButton'
import Chip from 'material-ui/Chip'
import get from 'lodash.get'
import ArticleForm from './ArticleForm'

const MultipleTagField = ({ source, record = {} }) => {
    const tags = get(record, source)
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {tags.map(tag => 
                <Chip key={tag.id} style={{ margin: 4 }}>{tag.name}</Chip>
            )}
        </div>
    )
}
MultipleTagField.propTypes = {
    label: PropTypes.string,
    source: PropTypes.string.isRequired,
    record: PropTypes.object,
};

export const ArticleList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="slug" />
            <TextField source="title" />
            <TextField source="summary" />
            <MultipleTagField source="tags" />
            <EditButton />
            <DeleteButton resource="articles" />
        </Datagrid>
    </List>
);

const ArticleTitle = ({ record }) => {
    return <span>Article {record ? `"${record.title}"` : ''}</span>;
};


export const ArticleEdit = (props) => {
    return (
        <Edit title={<ArticleTitle />} {...props}>
            <ArticleForm />
        </Edit>
    )
}

export const ArticleCreate = (props) => (
    <Create {...props}>
        <ArticleForm />
    </Create>
);