import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

const mountNode = document.getElementById('root')

render(
    <Root />
    , mountNode
)
