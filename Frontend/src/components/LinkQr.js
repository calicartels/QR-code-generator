import React from 'react'
import styled from 'styled-components'
import File from'./File'
import { useEffect } from 'react'
import gsap from 'gsap'

function LinkQr({data}) {
    console.log(data)
    useEffect(()=>{
        console.log('clicked')
        const t1=gsap.timeline()

        t1.fromTo('.form-container',{opacity:0},{opacity:1,duration:1})
    },[data])
    return (
        <>
        {data[0].heading==='Text QR'?<TextContainer className='form-container'>
            <h1>{data[0].heading}</h1>
            <p>{data[0].content}</p>
        </TextContainer>:
        <Container data={data} className='form-container'>
            <div className='head'  >
                <h1>{data[0].heading}</h1>
                <p>{data[0].content}</p>
            </div>
            {data.length>1?<div className='file-wrap'>
                <File />
            </div>:null
            }
            {data[0].button?<button>{data[0].button}</button>:null}
            


            
        </Container>}
        </>

        
    )
}

export default LinkQr


const Container=styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
height: 100%;

padding: 80px 80px 0px 80px;
box-sizing: border-box;



h1{
    
    color: #344FA199;
    font-weight:700;
    font-size: 64px;
}
p{
    color:#344FA1B2;
    font-size: 14px;
    font-weight:400;
}
.file-wrap{
    width: 80%;
}
button{
    height: 50px;
    width: 180px;
    background-color: #8566FF;
    color: white;
    border-radius: 50px;
    outline: none;
    border: none;
    align-self:flex-end;
}

@media screen and (max-width:700px){
    padding: 80px 10px 0 10px;
    h1{
        font-size: 30px;
    }
    p{
        font-size: 12px;
    }
}

`

const TextContainer=styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content:center;
padding: 0 50px;

h1{
    
    color: #344FA199;
    font-weight:700;
    font-size: 64px;
}
p{
    color:#344FA1B2;
    font-size: 14px;
    font-weight:400;
}
@media screen and (max-width:700px){
    h1{
        font-size:30px;
    }
    p{
        font-size: 13px;
    }
}
`