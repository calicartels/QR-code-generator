import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Login from './Login';
import Register from './Register';

function SignInComponent({signin}) {
    const history=useHistory()

    return (
        <Container >
            <div className="header">
                <img src="logo.svg" alt="" onClick={()=>history.push('/')} />
            </div>
            <h1>Create, Manage and Track
            <span> all your QR Codes</span> in one</h1>
            <p>Sign up now and try all features free for 14 days</p>
            {signin?<Login />:<Register />}

            {!signin?<><p className='agree'>
                <input type="checkbox" />I agree with the <span>Tearms of service</span> and <span>Privacy policy</span>

            </p>
            <button className='register-btn'>register</button>
            
            </>:null}
         </Container>
    )
}

export default SignInComponent


const Container=styled.div`
display: flex;
flex-direction: column;
align-items: center;
.header{
    width:100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 75px;
    }
}
h1{
    margin-top: 30px;
    font-size: 36px;
    font-weight: 700;
    color: #344FA1;
    max-width: 450px;
    text-align: center;
    span{
        color: #8566FF;
    }
}
p{
    font-size: 14px;
    font-weight: 400;
    color:#344FA1 ;
    margin-top: 20px;
}
.agree{
    input{
        margin-right: 10px;
    }
    display: flex;
    align-items: center;
    align-self: center;
    span{
        text-decoration: underline;
    }
}
.register-btn{
    margin-top: 30px;
        display: flex;
    align-items: center;
    justify-content: center;
    background-color: #8566FF;
    font-size: 20px;
    font-weight: 700;
    color: white;
    width: 160px;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 50px;
    margin-bottom: 20px;

}

@media screen and (max-width:700px){
    h1{
        font-size: 20px;
        max-width: 250px;
    }
    .header{
    width:100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        height: 50px;
    }
    
}
p{
        font-size: 10px;
    }
    .register-btn{
        font-size: 13px;
        width: 100px;
        height: 40px;
    }
}
`