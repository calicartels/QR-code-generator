import { CloudUpload, GetApp } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

function File() {
    return (
        <Container style={{width:'100%',height:'50px',borderRadius:'63px',backgroundColor:'white',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',
        border: '1px dashed #3F72AF',
        
        }}>
            <input type="file" style={{opacity:0,zIndex:2}} />
            <p style={{
                position: 'absolute',
                display: 'flex',
                alignItems:'center',
                justifyContent:'center',
                color: '#344FA1',
                fontSize:'14px',
                fontWeight:'bold'
            }}><GetApp style={{transform:'rotate(180deg)',margin:'0px 6px',boxSizing:'border-box'}} /> Upload any file type<span style={{opacity:0.5}}>(.jpg,.docx,.pptx)</span> </p>
        </Container>
    )
}

export default File


const Container=styled.div`
@media screen and (max-width:700px){
    p{
        font-size:10px !important;
    }
}

`