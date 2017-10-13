import React from 'react'
import '../styles/Paper.css'

const Paper = ({ children }) => (
    <div className="Paper z-depth-1">
        {children}
    </div>
)

export default Paper