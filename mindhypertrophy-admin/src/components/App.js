import React from 'react';
import { Admin, Resource } from 'admin-on-rest'
import authClient from '../authClient'
import { ArticleList, ArticleEdit, ArticleCreate } from './Article';
import { TagList, TagEdit, TagCreate } from './Tag';
import restClient from '../restClient'

const adminConfig = {
    title: "Mind Hypertrophy Admin",
    restClient,
    authClient
}

const App = () => (
    <Admin {...adminConfig} >
        <Resource name="articles" list={ArticleList} edit={ArticleEdit} create={ArticleCreate} />
        <Resource name="tags" list={TagList} edit={TagEdit} create={TagCreate} />
    </Admin>
);

export default App;