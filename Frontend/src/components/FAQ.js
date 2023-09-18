import React from 'react'
import styled from 'styled-components'


function FAQ() {
    return (
        <Container>
            <Wrap>
                <h1>FAQ</h1>
                <div className='content'>
                    <div className='left'>

                        <div>
                            <h1>Are QR codes free?</h1>
                            <p>All of our Static QR Codes are free. This includes URL, vCard, Plain text, Email, SMS, Twitter, WiFi, and Bitcoin. Once created, they are yours forever. The only drawback with these types is that you won’t be able to edit the content, so be sure to always test and make sure they work before printing.
</p>
                        </div>
                        <div>
                            <h1>Static QR vs Dynamic QR Code?</h1>
                            <p>Once generated, a Static Code cannot be edited and its scans cannot be tracked. Dynamic Code, on the other hand, is very flexible and is virtually indestructible. You can update its content, change/add links, and fix typos; even after print. You can also track the number of scans, including where and when.</p>
                        </div>

                    </div>
                    <div className='right'>
                        <div>
                            <h1>Is it possible to count the QR code scans (tracking, analytics, measuring)?
</h1>
                        <p>All of our Static QR Codes are free. This includes URL, vCard, Plain text, Email, SMS, Twitter, WiFi, and Bitcoin. Once created, they are yours forever. The only drawback with these types is that you won’t be able to edit the content, so be sure to always test and make sure they work before printing.
</p>
                        
                        </div>
                    </div>

                </div>
                <button>Show more</button>
            </Wrap>
            
        </Container>
    )
}

export default FAQ


const Container=styled.div`
width: 100%;
display: flex;

justify-content: center;
margin-top: 200px;
margin-bottom: 100px;




`
const Wrap=styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
h1{
    color: #344FA1;
    font-weight: 700;
    font-size: 64px;
}

.content{
    display: flex;
    border-top: 5px solid #8566FF;
    margin-top:80px;
    padding-top: 30px;
    margin: 80px 50px 50px 50px;
    .left{
        padding-right: 100px;
        border-right: 1px solid #8566FF;
        padding-top: 50px;
    }
    .right{
        padding-left: 100px;
        border-left: 1px solid #8566FF;
         padding-top: 50px;
    }



    h1{
        font-size: 46px;
        padding-bottom: 30px;
    }
    p{
        color: #344FA1;
        font-weight: 400;
        font-size: 20px;
        padding-bottom: 70px;
    }
}

button{
    
   width: 260px;
   height: 90px;
   background-color:#8566FF;
   border-radius: 50px;
    border: none;
    outline: none;
    color: white;
    font-weight: 700;
    font-size: 36px;
    z-index:2;
}


@media screen and (max-width:700px){
    h1{
    color: #344FA1;
    font-weight: 700;
    font-size: 46px;
}

.content{
    display: flex;
    flex-direction: column;
    border-top: 5px solid #8566FF;
    
    padding-top: 10px;
    margin: 20px 0px 50px 0px;
    .left{
        padding-right: 0px;
        border-right: none;
        padding-top: 50px;
    }
    .right{
        padding-left: 0px;
        border-left: none;
         padding-top: 50px;
    }



    h1{
        font-size: 26px;
        padding-bottom: 30px;
        text-align: center;
    }
    p{
        color: #344FA1;
        font-weight: 400;
        font-size: 16px;
        padding-bottom: 70px;
        text-align: center;
    }
}

button{
    
   width: 160px;
   height: 60px;

    font-weight: 600;
    font-size: 16px;
 
}

}
`