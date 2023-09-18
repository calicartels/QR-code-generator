import { Avatar } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { useEffect } from 'react'




function Header({pro}) {
    const history=useHistory()
    console.log('header:',pro)

    useEffect(()=>{
        if(pro){
            document.querySelector('.header-container').style.cssText='height:70px;box-shadow:0px 4px 21px rgba(0, 0, 0, .25) !important'
        }

    },[pro])
    


    return (
        <Container className='header-container' style={pro?{height:'70px',boxShadow:'0px 4px 21px rgba(0, 0, 0, .25) !important' }:{height:'100px'}} >
            {!pro?<div className="header-wrap">
                <div className="header-logo">
                    <img src="logo.svg" alt="" onClick={()=>history.push('/')}/>
                </div>
                <div className="header-links">
                    <a href="">about us</a>
                    <a href="">Chrome apk</a>
                    <button className='register-btn' onClick={()=>history.push('/register')}>Register</button> 
                    <button className='login-btn' onClick={()=>history.push('/login')}>Login</button>
                </div>

            </div>:
            <div className="header-wrap">
                <div className="header-logo-pro">
                    <img src="logo.svg" alt="" onClick={()=>history.push('/pro')}/>
                    <p>Pro</p>
                </div>
                <div className="header-links-pro">
                   <a href="">Home</a>
                    <button className='profile'><Avatar /> John</button>

                </div>

            </div>}
            
        </Container>
    )
}

export default Header


const Container=styled.div`
width: 100%;
height:${pro=>pro==='pro'?'70px':'100px'};
display: flex;
justify-content: center;
align-items: center;


background-color: white;
z-index:100;
position: fixed;

.header-wrap{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .header-logo{
        height: 70px;
        
        display: flex;
        align-items: center;
        img{
            width: auto;
            height: 70px;
        }
    }
    .header-logo-pro{
        height: 100px;
        
        display: flex;
        align-items: center;
        
        img{
            width: auto;
            height: 50px;
        }
        p{
            font-weight: 700;
            color: white;
            font-size: 18px;
            background-color: #344FA1;
            padding: 2px 12px;
            border-radius: 12px;
            box-sizing:border-box;
            text-transform: uppercase;
        }
        
    }


    .header-links{
        a,button{
            text-decoration: none;
            color: #344FA1;
            margin-left: 22px;
            font-size:16px;
            font-weight: 400;
        }
        a{
            font-size: 18px;
        }
        button{
            background-color: transparent;
            border: 2px solid #344FA1;
            height:50px;
            width: 100px;
            border-radius: 50px;

        }
        .login-btn{
            background-color: #8566FF;
            border: none;
            color: white;
        }
        
        
    }
    .header-links-pro{
        display: flex;
        align-items: center;
        a{
            margin-right: 20px;
            text-decoration: none;
        }
        .profile{
            
            display: flex;
            align-items: center;
            outline: none;
            background-color: white;
            border: 1px solid #8566FF;
            box-sizing:border-box;
            border-radius: 120px;
            padding: 4px;
            div{
                margin-right: 4px;
            }
        }
    }
   
}
@media screen and (max-width:700px){
    .header-wrap{
        
    

    .header-logo,.header-logo-pro{
        
        height: 50px;
        
        display: flex;
        align-items: center;
       
        img{
            width: auto;
            height: 30px;
        }
    }
    .header-logo-pro{
        p{
            font-size: 10px;
            padding: 2px 6px;
        }
    }


    .header-links,.header-links-pro{
        display: none;
    }
   
}
}

`