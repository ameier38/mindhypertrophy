import React from 'react'
import { 
    List, Datagrid, TextField, Edit, SimpleForm, 
    DisabledInput, TextInput, Create, EditButton
} from 'admin-on-rest/lib/mui'
import DeleteButton from './DeleteButton'

export const TagList = (props) => (
    <List title="All tags" {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
            <DeleteButton resource="tags" />
        </Datagrid>
    </List>
);

export const TagEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
        </SimpleForm>
    </Edit>
);

export const TagCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);