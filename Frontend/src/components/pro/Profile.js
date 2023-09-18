import { Avatar } from '@material-ui/core'
import { AccessTimeOutlined, AddCircle, ArrowRight, CreateOutlined, FlashAutoOutlined, FlashOnOutlined, FolderOutlined, ListAltOutlined, ListOutlined, MoreVertOutlined, PaletteOutlined, PauseCircleFilledOutlined, PauseCircleOutlineSharp } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'


function Profile() {
    const[clicked,setClicked]=useState(false)

useEffect(()=>{
//sidebar arrow 


    console.log('clicked arrow')
    clicked?document.querySelector('.profile-sidebar').style.left='-290px':document.querySelector('.profile-sidebar').style.left='0px'
    !clicked?document.querySelector('.sidebar-arrow').style.transform='rotate(180deg)':document.querySelector('.sidebar-arrow').style.transform='rotate(0deg)'



},[clicked])



    return (
        <Container>
            <Sidebar className='profile-sidebar'>
                <div className="sidebar-header">
                    <Avatar className='avatar' /> <div>
                        <h3>John Paul</h3>
                        <p>johnpaul@gmail.com</p>
                        </div>
                </div>
                <div className="sidebar-qrs">
                    <h3>My QR codes:</h3>
                    <a><ListOutlined/>All(2) </a>
                    <a><FlashOnOutlined />Active(0) </a>
                    <a><PauseCircleOutlineSharp />Inactive(1)</a>
                </div>
                <div className="sidebar-folders">
                    <h3>My QR codes:</h3>
                    <a><FolderOutlined/>All(2) </a>
                    <a><FolderOutlined />Active(0) </a>
                    <a><AddCircle />Inactive(1)</a>
                </div>
                <ArrowRight className='sidebar-arrow' onClick={()=>setClicked(!clicked)} />

            </Sidebar>
            <Content>
                <Card />
                <Card />
            </Content>
        </Container>
    )
}

export default Profile


const Container=styled.div`
display: flex;
position: relative;


`
const Sidebar=styled.div`
color: white;
background-color: #8566FF;
width: 400px;
height: 100vh;
padding: 70px 0 0 20px;
box-sizing:border-box;
transition: all .2s ease-in-out;
.avatar{
    padding:10px;
    background-color: white;
    color: #8566FF;
    margin-right: 20px;
}

.sidebar-qrs,.sidebar-folders{
    display: flex;
    flex-direction: column;
    h3{
        margin-bottom: 20px;
    }
    
    a{
        
        border-radius: 15px 0 0 15px;
        width: 100%;
        padding: 10px 0;
        display: flex;
        align-items: center;
        padding-left:20px;
        transition: all .1 s ease-in-out;
        svg{
            padding-right: 10px;
     
        }
        &:hover{
            background-color: white;
            color: #8566FF;
        }
    }
}
.sidebar-folders{
    h3{
       
        margin: 20px 0;
    }

}
.sidebar-header{
    display: flex;
    align-items: center;
    margin: 50px 0;
}
.sidebar-arrow{
    display: none;
    position: absolute;
    right: -20px;
    top: 50%;
    color:#8566FF ;
    padding: 10px;
    background-color: white;
    border-radius: 50px;
    box-shadow: 0 0 12px rgba(0,0,0,.2);
    transition: all .2s ease-in-out;
}

@media screen and (max-width:700px){
    width: 300px;
    position: fixed;
    left: 0px;

    .sidebar-arrow{
        display: unset;
    }
}
`

const Content=styled.div`
padding-top: 70px;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

.card{
    width: 80%;
    padding:30px 30px;
    box-sizing: border-box;
    background-color: #F4F2FF;
    display: flex;
    border-radius: 33px;
    margin: 20px 0;
    .left{
        flex:.5;
        
        h1{
            color: #344FA1CC;
            font-size: 24px;
            font-weight: 600;
            display: flex;
            align-items: center;
            svg{
                padding-right: 10px;
            }
        }
        p{
            display: flex;
            align-items: center;
            color: #344FA199;
            margin: 10px 0;
            svg{
                padding-right: 10px;
            }
        }
        .left-wrap{
            display: flex;
            .left-left{
                margin-right: 30px;
            }
        }
    }
    .right{
        flex:.5;
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        

        .download{
            background-color: #8566FF;
            padding: 10px;
            border-radius:40px;
            margin-right: 30px;
        }
        div{
            background-color: #8566FF;
            border-radius: 20px;
            padding: 10px;
            
            svg{
                color: white;
                margin: 6px;
            }
        }
        img{
            margin-right: 30px;
            height: 140px;
            width: 140px;
            object-fit: contain;
            padding: 10px;
            background-color: white;
        }
        .number{
            color: #344FA1;
            background-color: transparent !important;
            margin-right: 40px;
            border-right: 1px solid rgba(90, 112, 180, 0.2);
            border-radius: 0;
            padding-right: 30px;
            h1{
                font-size: 64px;
            }
            
        }
    }
    @media screen and (max-width:1020px){
    
    padding:20px;
    
    .left{
        flex:.5;
        
        h1{
           
            font-size: 22px;
            font-weight: 600;
            
            svg{
                padding-right: 10px;
            }
        }
        p{
            display: flex;
            align-items: center;
            color: #344FA199;
            margin: 10px 0;
            font-size: 12px;
            svg{
                padding-right: 10px;
            }
        }
        .left-wrap{
            display: flex;
            .left-left{
                margin-right: 20px;
            }
        }
    }
    .right{
       
        .download{
            height: 16px !important;
            width: 16px !important;
            background-color: #8566FF;
            
            border-radius:40px;
            margin-right: 10px;
        }
        div{
            background-color: #8566FF;
            border-radius: 20px;
            padding: 10px;
            
            svg{
                color: white;
                margin: 4px;
                height: 16px;
                width: 16px;
            }
        }
        img{
            margin-left: 0px;
            
            
        }
        .number{
            margin-left: 20px;
            padding-right: 10px;
            margin-right: 10px;
            h1{
                font-size: 28px;
            }p{
                font-size: 10px;
                
            }
        }
    }

    @media screen and (max-width:700px){
        padding: 50px 6%;
        flex-direction: column;
        .left{
            
        
        
        h1{
           
            font-size: 22px;
            font-weight: 600;
            
            svg{
                height: 22px;
                width: 22px;
                padding-right: 10px;
            }
        }
        p{
            font-size: 13px;
            svg{
                padding-right: 10px;
                height: 18px;
                width: 18px;
            }
        }
        .left-wrap{
            display: flex;
            .left-left{
                margin-right: 30px;
            }
        }
    }
        .right{
           
            .download{
            height: 16px !important;
            width: 16px !important;
            background-color: #8566FF;
            
            border-radius:40px;
            margin-right: 10px;
        }
        div{
            display: flex;
            flex-direction:column;
            justify-content: center;
            background-color: #8566FF;
            border-radius: 20px;
            padding: 10px;
            
            svg{
                color: white;
                margin: 4px;
                height: 16px;
                width: 16px;
            }
        }
        img{
            margin-left: 30px;
            
            
        }
    
            
        }
    }

    }

}





`