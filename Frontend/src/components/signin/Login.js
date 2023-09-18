
import { ArrowDropDown } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'


function Login() {

    const history=useHistory()


    return (
        <ContainerWrap>
            <svg className='circle-reg' width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="81.5" cy="81.5" r="81.5" fill="#8566FF"/>
</svg>
<svg className='circle-reg reg-2' width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="81.5" cy="81.5" r="81.5" fill="#8566FF"/>
</svg>
<svg className='circle-reg reg-3' width="163" height="163" viewBox="0 0 163 163" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="81.5" cy="81.5" r="81.5" fill="#8566FF"/>
</svg>
            <Container>
            

            <Wrap>
                 
                <input type="text" placeholder='Work Email' />
                <input type="password"  placeholder='password'/>
                 
            </Wrap>
            <div className='keep-signed'>
                <p>
                    <input type="checkbox" />
                    Keep me signed in
                </p>
                <a href="">Forgot password</a>
            </div>
            <button className='login-btn' onClick={()=>history.push('/pro')} >Log In</button>
            
            <div className='underline'></div>
            <button className='login-btn login-google'><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png" alt="" /> Sign in with google</button>
        </Container>
        </ContainerWrap>
    )
}

export default Login
const ContainerWrap=styled.div`
position: relative;


.circle-reg{
    position: absolute;
    bottom: -20px;
    left: -40px;
    z-index:-1;
}
.reg-2{
    transform: scale(.5);
    top: -20px;
    right: -70px;
    left: unset;
}
.reg-3{
    height: 25px;
    width: 25px;
    top: 80px;
    right: -60px;
    left: unset;
}
@media screen and (max-width:700px){
    .circle-reg{
  
    transform: scale(.6);
    bottom: -40px;
    left: -60px;
    z-index:-1;
}
    .reg-2{
    transform: scale(.4);
    top: -30px;
    right: -70px;
    left: unset;
}
.reg-3{
    height: 15px;
    width: 15px;
    top: 80px;
    right: -20px;
    left: unset;
}
}

`

const Container=styled.div`
width: 480px;
padding: 40px;
border: 2px solid white;
border-radius: 50px;
box-sizing: border-box;
backdrop-filter: blur(20px);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.keep-signed{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    p{
        margin: 0;
    }
}
.login-btn{
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
    img{
        height: 60%;
        margin-right: 10px;
    }
}
.login-google{
    width: 300px;
}
.underline{
    height: 1px;
    width: 100%;
    background-color: #8566FF;
    margin-bottom: 20px;
}
@media screen and (max-width:700px){
    width: 300px;
    padding: 20px;
    border-radius: 30px;
    .keep-signed{
        p,a{
            font-size: 12px;
        }

    }
    .login-btn{
        font-size: 13px;
        width: 100px;
        height: 40px;
    }
    .login-google{
        width: 200px;
    }
}
`
const Wrap=styled.div`
height: 100%;
width: 100%;
padding: 30px;
box-sizing: border-box;

display: flex;
flex-direction: column;
background: rgba(209, 197, 255, 0.23);
border-radius: 50px;


.dropdown{
    display: flex;
    align-items: center;
    justify-content: space-between;
    p{
        margin: 0;
    }
}
.dropdown , input{
    height: 50px;
    background-color: white;
    outline: none;
    border: 2px solid rgba(133, 102, 255, 0.4);
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 0 20px;
}

@media screen and (max-width:700px){
    padding: 20px 10px;
    border-radius: 20px;
  .dropdown , input{
      height: 35px;
  }
}

`