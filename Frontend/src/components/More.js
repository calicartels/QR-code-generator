import React from 'react';
import styled from 'styled-components';

function More() {
    return (
        <Container>
            <Wrap>
                <h1>Any more Questions?</h1>
                <p>fill the form and we will get back to you</p>
                <div className='content'>
                    <div className='left'>

                        <div>
                            <h4>Name</h4>
                            <input type="text" placeholder='Enter your name here'/>
                        </div>
                        <div>
                            <h4>Phone number</h4>
                            <input type="text" placeholder='Enter your phone number here'/></div>

                    </div>
                    <div className='right'>
                         <div>
                            <h4>Name of company</h4>
                            <input type="text" placeholder='Enter your company name here'/>
                        </div>
                        <div>
                            <h4>email id</h4>
                            <input type="text" placeholder='Enter your email here'/></div>
                    </div>

                </div>
                <button>Submit</button>
            </Wrap>
            
        </Container>
    )
}

export default More


const Container=styled.div`
width: 100%;
display: flex;

justify-content: center;
margin-top: 200px;
padding-bottom: 80px;
background-color: #EAECF8;



`
const Wrap=styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 100px;

h1{
    color: #344FA1;
    font-weight: 700;
    font-size: 48px;
}
p{
    font-weight: 400;
    font-size: 24px;
    margin-top: 40px;
    color: #344FA1;
}

.content{
    display: flex;
  
    
    
    margin: 50px 50px 50px 50px;

    width: 100%;
    .left{
        flex: .5;
        padding-right: 50px;
        
        padding-top: 50px;
        padding-left: 50px;
    }
    .right{
        flex: .5;
        padding-left: 50px;
        
         padding-top: 50px;
         padding-right: 50px;
    }



    h4{
        font-size: 24px;
        padding-bottom: 20px;
        color: #344FA1;
        font-weight: 400;
        padding-left:30px;
    }
    input{
        width: 100%;
        height: 80px;
        border-radius: 50px;
        border: none;
        box-shadow: 0px 4px 8px  #00000040;
        outline: none;
        padding:0 30px;
        box-sizing:border-box;
        margin-bottom:40px;
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
    width: 90%;
    h1{
        font-size: 30px;
    }
    p{
        margin-top: 20px;
        font-size: 16px;
    }
    .content{
        
        .right,.left{
        margin: 0;
        padding: 0;

        h4{
            font-size: 13px;
            padding: 10px 20px;
        }
        input{
            
            margin-bottom: 10px;
            height: 40px;
            max-width: 160px;
        }
    }
    }
    
}
button{
    
   width: 160px;
   height: 50px;
   background-color:#8566FF;
   border-radius: 50px;
    border: none;
    outline: none;
    color: white;
    font-weight: 700;
    font-size: 16px;
    z-index:2;
}
`