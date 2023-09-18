import styled from 'styled-components'
import { AccessTimeOutlined, CreateOutlined, FolderOutlined, MoreVertOutlined, PaletteOutlined } from '@material-ui/icons'
import React from 'react'

function Card() {
    return (
        <Container className="card">
                <div className="left">
                    <p>Website</p>
                    <h1><svg width="31" height="34" viewBox="0 0 31 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5637 26.987C15.6552 27.0205 15.7162 27.0876 15.7467 27.1881C15.7772 27.2887 15.762 27.3892 15.701 27.4897L11.9026 31.6623C11.2924 32.3326 10.5907 32.8689 9.79751 33.271C9.00428 33.6732 8.19579 33.9078 7.37205 33.9749C6.54831 34.0419 5.72457 33.9749 4.90084 33.7738C4.0771 33.5727 3.32963 33.1538 2.65843 32.517C1.83469 31.8132 1.19401 30.9585 0.736373 29.9531C0.27874 28.9476 0.0346692 27.9422 0.0041603 26.9368C-0.0263486 25.9313 0.110941 24.9091 0.41603 23.8702C0.721119 22.8312 1.23977 21.9263 1.97198 21.1555L7.87545 14.6703C8.82123 13.6314 9.91954 12.8605 11.1704 12.3578C12.4213 11.8551 13.7026 11.721 15.0145 11.9556C16.1739 12.1567 17.0891 12.5254 17.7603 13.0616C18.4315 13.5979 18.9654 14.2179 19.362 14.9217C19.4231 15.0893 19.4154 15.215 19.3392 15.2987C19.2629 15.3825 19.179 15.4579 19.0875 15.525C18.9959 15.592 18.8892 15.6925 18.7671 15.8266L18.4468 16.1785C18.1417 16.5472 17.7756 16.7315 17.3485 16.7315C16.9213 16.7315 16.5323 16.5388 16.1815 16.1534C15.8306 15.768 15.4417 15.4747 15.0145 15.2736C14.5874 15.0725 14.1145 14.9887 13.5959 15.0222C13.0772 15.0558 12.6196 15.1395 12.223 15.2736C11.8263 15.4077 11.4145 15.7093 10.9874 16.1785L4.21439 23.6188C3.81777 24.0545 3.52794 24.5572 3.34488 25.127C3.16183 25.6967 3.10081 26.2665 3.16183 26.8362C3.22285 27.406 3.37539 27.9757 3.61946 28.5455C3.86353 29.1152 4.26015 29.5677 4.80931 29.9028C5.57203 30.4726 6.39577 30.6737 7.28053 30.5061C8.16528 30.3385 8.91275 29.9363 9.52293 29.2995L12.4518 26.1324C12.5128 26.0319 12.6043 26.0151 12.7264 26.0821C13.6416 26.5178 14.5874 26.8195 15.5637 26.987ZM28.2859 1.5493C29.1096 2.25311 29.7503 3.09098 30.2079 4.06291C30.6656 5.03484 30.9249 6.04028 30.9859 7.07924C31.0469 8.1182 30.9096 9.15716 30.5741 10.1961C30.2385 11.2351 29.7045 12.14 28.9723 12.9108L23.0689 19.3959C22.1231 20.4349 21.0248 21.189 19.7739 21.6582C18.523 22.1274 17.2264 22.2614 15.884 22.0604C14.7247 21.8928 13.8247 21.5241 13.184 20.9544C12.5433 20.3846 12.0094 19.7646 11.5823 19.0943C11.5213 18.9602 11.5365 18.8429 11.628 18.7424L12.4518 17.8375C12.7874 17.5023 13.1687 17.3348 13.5959 17.3348C14.023 17.3348 14.3891 17.5023 14.6942 17.8375C15.0603 18.2397 15.4722 18.5413 15.9298 18.7424C16.3874 18.9435 16.8603 19.044 17.3485 19.044C17.8366 19.044 18.3095 18.9435 18.7671 18.7424C19.2248 18.5413 19.6214 18.2397 19.957 17.8375L26.7299 10.4475C27.1265 10.0118 27.4164 9.4923 27.5994 8.88904C27.7825 8.28577 27.8435 7.69926 27.7825 7.12951C27.7215 6.55976 27.5537 6.00677 27.2791 5.47053C27.0045 4.93429 26.6079 4.48184 26.0892 4.11318C25.357 3.57694 24.5485 3.37585 23.6638 3.50991C22.779 3.64397 22.0163 4.06291 21.3756 4.76672L18.4925 7.93387C18.401 8.03441 18.3095 8.05117 18.218 7.98414C17.3637 7.58196 16.4179 7.26357 15.3806 7.02897C15.2586 7.02897 15.1976 6.96194 15.1976 6.82788C15.1976 6.69382 15.2128 6.61003 15.2433 6.57652L19.0417 2.40392C19.6519 1.73363 20.3536 1.19739 21.1468 0.795215C21.94 0.393037 22.7333 0.141676 23.5265 0.0411318C24.3197 -0.0594126 25.1435 0.0243744 25.9977 0.292493C26.852 0.560611 27.6147 0.979546 28.2859 1.5493Z" fill="#344FA1" fill-opacity="0.8"/>
                    </svg>
                        https://www.getqr.com</h1>
                   <div className="left-wrap">
                        <div className="left-left">
                        <p><FolderOutlined /> No folder</p>
                        <p><AccessTimeOutlined /> May 27,2021</p>
                    </div>
                    <div className="left-right">
                        <p>Short URL:aer.de/awd.de</p>
                    </div>
                   </div>
                </div>
                <div className="right">
                   
                    <div>
                        <CreateOutlined />
                        <PaletteOutlined />
                        <FolderOutlined />
                        <MoreVertOutlined />

                    </div>
                    <img src="gr.png" alt="" />
                    <div className='number' >
                       <h1>2</h1>
                       <p>scans</p>
                    </div>
                </div>
            </Container>
    )
}

export default Card


const Container=styled.div`
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
    
    padding:50px 10%;
    
    .left{
        flex:.5;
        
        h1{
           
            font-size: 28px;
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
            margin-left: 30px;
            
            
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



`