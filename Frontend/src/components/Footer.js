import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


function Footer() {
    return (
        <Container>
           <Wrap>
               <div className='col col-1' >
                   <img src="footer.svg" alt="" />
                   <div className="logos">
                       <Instagram />
                       <Facebook />
                       <YouTube />
                       <Twitter />
                       
                   </div>
               </div>
               <div className='col'>
                   <h1>Security</h1>
                    <h3>Compliance</h3>
                    <h3>Efficiency</h3>
                    <h3>Branding</h3>
                    <h3>Enterprise services</h3>
                    <h3>Integrations</h3>
                    <h3>COVID-19 features</h3>
                    <h3>All features</h3>
               </div>
               <div className='col'>
                   <h1>Resources</h1>
                   <h3>What is a QR Code?</h3>
                    <h3>QR Codes in Marketing</h3>
                    <h3>QR Codes on Materials</h3>
                    <h3>QR Codes for Business</h3>
                    <h3>QR Codes for Education</h3>
                    <h3>QR Codes for Nonprofits</h3>
                    <h3>QR Codes for Personal Use</h3>
                    <h3>QR Codes for Holidays & Occasions</h3>
               </div>
               <div className='col'>
                   <h1>Help</h1>
                   <h3>Help Center</h3>
                   <h3>Contact US</h3>
               </div>
           </Wrap>
            
        </Container>
    )
}

export default Footer

const Container=styled.div`
width: 100%;
display: flex;
justify-content: center;
padding: 100px 0;



`
const Wrap=styled.div`
width: 100%;


img{
    height: 100px;
    width: auto;
}
display: flex;
justify-content: center;

.col{
    width: 100%;
    padding: 10px;
    
    h3{
        font-weight: 400;
        font-size: 24px;
        color: #344FA1;
        padding-bottom: 6px;
    }
    h1{
        color: #344FA1;
        font-size: 36px;
        font-weight:700;
        padding-bottom: 30px;
    }
    .logos{
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-top: 100px;
        svg{
            height: 42px;
            width: 42px;
            color: #8566FF;
        }
    }
}
.col-1{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px;
}

@media screen and (max-width:700px){
    flex-direction: column;
    .col{
        box-sizing:border-box;
        margin: 0;
        padding: 20;
        h1{
            font-size:30px;
        }
        h3{
            font-size: 16px;
        }
    }
    .col-1{
        
        width: 60%;
        box-sizing:border-box;
        justify-self:center;
        align-self:center;
        
        img{
            height: 60px;
        }
        .logos{
            margin-top: 20px;
            svg{
                height: 30px;
            }
        }
    
    margin: 0px;
    margin-bottom: 100px;
}
}



`