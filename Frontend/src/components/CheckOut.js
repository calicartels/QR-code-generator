import { Create } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { Storage } from '@material-ui/icons'
import EqualizerIcon from '@material-ui/icons/Equalizer';
import BrushIcon from '@material-ui/icons/Brush';



function CheckOut() {
    return (
        <Container>
            <Wrap>
                <h1>Check out more Get QR ideas</h1>
                <div className="qr-ideas">
                    <div>
                        <Create />
                        <h3>Dynamic QR codes</h3>
                        <p>Edit and change your QR codes anytime</p>
                    </div>
                    <div>
                        <Storage />
                        <h3>Bulk Creation</h3>
                        <p>Create and edit many QR codes in no time.</p>
                    </div>
                    <div>
                        <EqualizerIcon />
                        <h3>scan statistics</h3>
                        <p>Track your QR codes and get insights about scans.</p>
                    </div>
                    <div>
                        <BrushIcon />
                        <h3>stylize your design</h3>
                        <p>Create transparent QR codes and reusable designs.</p>
                    </div>
                </div>

            </Wrap>
            
        </Container>
    )
}

export default CheckOut


const Container=styled.div`


padding: 100px 0;
width: 100%;
min-height: calc(100vh - 200px);
background-color: #EAECF8;
display: flex;
justify-content: center;


`


const Wrap=styled.div`

width: 80%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


h1{
    font-size: 50px;
    color:#344FA1;
    margin-bottom: 70px;

    
}
.qr-ideas{
    width: 100%;
    justify-content: space-between;
    display: flex;
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        svg{
            background-color: #8566FF;
            height:60px;
            width: 60px;
            border-radius: 50%;
            padding: 25px;
            color: white;

        }
        h3{
            color:#344FA1;
            padding: 20px 0 3px 0;
            
        }
        p{
            text-align:center;
            font-size: 18px;
            color: #344FA1;
            font-weight: 300;
        }
        
    }
}
@media screen and (max-width:1000px){
    h1{
        font-size: 30px;
    }
    .qr-ideas{
        display:grid;
        grid-template-columns: repeat(auto-fit,minmax(120px,1fr));
        grid-template-rows: auto;
        
        div{
            padding: 8px;
            h3{
                font-size: 16px;
                text-align: center;
            }
            p{
                font-size: 13px;
            }
            svg{
                height: 30px;
                width: 30px;
            }
        }
    }
}

`