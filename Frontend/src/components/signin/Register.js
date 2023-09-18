import { ArrowDropDown } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'


function Register() {
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
                <div className="dropdown">
                    <p>slect your industry</p>
                    <ArrowDropDown />
                </div>
                <input type="text" placeholder='Work Email' />
                <input type="password"  placeholder='password'/>
                <div className="dropdown">
                    <p>slect your industry</p>
                    <ArrowDropDown />
                </div>
            </Wrap>
        </Container>
        </ContainerWrap>
    )
}

export default Register
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