import React from 'react'
import CheckOut from './CheckOut'
import QR from './QR'
import Create from './Create'
import Type from './Type'
import FAQ from './FAQ'
import More from './More'
import Footer from './Footer'

function Body() {
    return (
        <div style={{paddingTop:'130px'}}>
            <QR />
            <CheckOut />
            <Create />
            <Type />
            <FAQ />
            <More />
            <Footer />
            
        </div>
    )
}

export default Body
