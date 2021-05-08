import React, { Component } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'


export default class Login extends Component {
    render() {
        return (
            <>
            <Header page="login" />
            <Footer />  
            </>
        )
    }
}
