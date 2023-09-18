import { CreateOutlined } from '@material-ui/icons'
import React,{useState,useEffect} from 'react'
import styled from 'styled-components'



function Website() {

    const [preclick,setPreclick]=useState(true)


useEffect(() => {
    console.log(preclick)
    const button=document.querySelector('.button-clickbg')
    preclick?button.style.cssText='transform:translateX(0%)':button.style.cssText='transform:translateX(80%)'
    
        if(preclick){
            document.getElementById('prev-btn').style.color='white'
            document.getElementById('qr-btn').style.color='#344FA1'
        }else{
            document.getElementById('prev-btn').style.color='#344FA1'
            document.getElementById('qr-btn').style.color='white'

        }
        
    
    
}, [preclick]);
        



    return (
        <Container>
           <Wrap>
               <div className='wrap-wrap'>
                   <div className="heading">
                   <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.1027 39.6868C25.2503 39.7361 25.3488 39.8347 25.398 39.9825C25.4472 40.1304 25.4226 40.2782 25.3242 40.4261L19.1978 46.5623C18.2136 47.548 17.0818 48.3366 15.8024 48.928C14.523 49.5195 13.219 49.8645 11.8904 49.963C10.5618 50.0616 9.23319 49.963 7.90457 49.6673C6.57596 49.3716 5.37037 48.7555 4.28779 47.8191C2.95918 46.7841 1.92582 45.5273 1.1877 44.0487C0.449581 42.5701 0.055918 41.0915 0.00671016 39.6129C-0.0424977 38.1343 0.178938 36.6311 0.671016 35.1032C1.1631 33.5753 1.99963 32.2445 3.18062 31.111L12.7023 21.574C14.2278 20.0461 15.9993 18.9126 18.0168 18.1733C20.0343 17.434 22.101 17.2368 24.217 17.5818C26.0869 17.8775 27.5631 18.4197 28.6457 19.2083C29.7283 19.9969 30.5894 20.9087 31.2291 21.9437C31.3275 22.1901 31.3152 22.3749 31.1922 22.4982C31.0692 22.6214 30.9339 22.7323 30.7862 22.8308C30.6386 22.9294 30.4664 23.0773 30.2695 23.2744L29.7529 23.7919C29.2608 24.3341 28.6703 24.6051 27.9814 24.6051C27.2925 24.6051 26.6651 24.3218 26.0992 23.755C25.5333 23.1882 24.9059 22.7569 24.217 22.4612C23.5281 22.1655 22.7654 22.0423 21.9288 22.0915C21.0923 22.1408 20.3542 22.264 19.7145 22.4612C19.0748 22.6583 18.4105 23.1019 17.7215 23.7919L6.7974 34.7335C6.15769 35.3742 5.69022 36.1135 5.39497 36.9514C5.09972 37.7893 5.00131 38.6271 5.09972 39.465C5.19814 40.3029 5.44418 41.1408 5.83784 41.9786C6.23151 42.8165 6.87121 43.4819 7.75695 43.9747C8.98715 44.8126 10.3158 45.1083 11.7428 44.8619C13.1698 44.6155 14.3754 44.024 15.3596 43.0876L20.0835 38.43C20.1819 38.2821 20.3296 38.2575 20.5264 38.3561C22.0026 38.9968 23.5281 39.4404 25.1027 39.6868ZM45.6224 2.27838C46.951 3.31339 47.9844 4.54556 48.7225 5.97486C49.4606 7.40417 49.8789 8.88276 49.9773 10.4106C50.0757 11.9385 49.8543 13.4664 49.313 14.9943C48.7717 16.5222 47.9106 17.8529 46.7296 18.9865L37.2079 28.5234C35.6824 30.0513 33.9109 31.1602 31.8934 31.8503C29.8759 32.5403 27.7846 32.7374 25.6194 32.4417C23.7495 32.1953 22.2979 31.6531 21.2645 30.8152C20.2311 29.9774 19.37 29.0656 18.6811 28.0798C18.5827 27.8827 18.6073 27.7102 18.7549 27.5623L20.0835 26.2316C20.6248 25.7387 21.2399 25.4923 21.9288 25.4923C22.6177 25.4923 23.2082 25.7387 23.7003 26.2316C24.2908 26.823 24.9551 27.2666 25.6932 27.5623C26.4313 27.8581 27.1941 28.0059 27.9814 28.0059C28.7687 28.0059 29.5314 27.8581 30.2695 27.5623C31.0077 27.2666 31.6474 26.823 32.1887 26.2316L43.1128 15.3639C43.7525 14.7232 44.22 13.9593 44.5152 13.0721C44.8105 12.185 44.9089 11.3224 44.8105 10.4846C44.7121 9.64671 44.4414 8.83348 43.9985 8.0449C43.5557 7.25631 42.916 6.59095 42.0794 6.04879C40.8984 5.26021 39.5944 4.96449 38.1674 5.16164C36.7404 5.35878 35.5102 5.97486 34.4768 7.00988L29.8267 11.6675C29.6791 11.8153 29.5314 11.84 29.3838 11.7414C28.006 11.1499 26.4805 10.6817 24.8075 10.3367C24.6106 10.3367 24.5122 10.2381 24.5122 10.041C24.5122 9.84385 24.5368 9.72063 24.586 9.67135L30.7124 3.53518C31.6966 2.54945 32.8284 1.76087 34.1078 1.16943C35.3872 0.577996 36.6666 0.208347 37.946 0.0604879C39.2254 -0.0873715 40.554 0.0358447 41.9318 0.430136C43.3096 0.824428 44.5398 1.44051 45.6224 2.27838Z" fill="#344FA1"/>
</svg>

                <h1>Website QR name</h1>
                <CreateOutlined className='pen' />
               </div>
               <div className="web-qr-wrap">
                   <div className="website-content-wrap">
                   <Content>
                <div className="details">
                <Left>
                    <h3>Enter your website address</h3>
                    <p>type in the website to link with your QR code</p>

               </Left>
               <Right>
                   <a> Create Bulk</a>
               </Right>
                </div>
                <div className='website-input'>
                    <p>website :</p>
                    <input type="text" />
                </div>
               </Content>

               <div className="website-button">
                   <a href="">Generate QR</a>
               </div>
               </div>
              

               </div>
               </div>
               

                <div className="qr-content-wrap">
                   <div className="buttons">
                       <div className="button-clickbg"></div>
                       <p id='prev-btn' onClick={()=>setPreclick(true)} >Preview</p>
                       <p id='qr-btn' onClick={()=>setPreclick(false)}>QR code</p>
                   </div>
                   <img src="./gr.png" alt="" />
               </div>

           </Wrap>
        </Container>
    )
}

export default Website


const Container=styled.div`

width: 100%;
min-height: 100vh;
display: flex;
align-items: center;
justify-content: center;


`

const Wrap=styled.div`
max-width: 1600px;
width: 80%;
display: flex;
align-items: center;
justify-content: center;


.heading{
    display: flex;
    align-items: center;
    align-self: flex-start;
    margin-bottom: 50px;
    h1{
        color: #344FA1;
        font-size: 48px;
        font-weight: 700;
    }
    svg{
        padding-right: 20px;
    }
    .pen{
        color: #344FA1;
        margin-left: 20px;
    }
    
}
.wrap-wrap{
    flex: .7;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.website-button{
    margin-top: 50px;
    
    background-color: #8566FF;
    width: 160px;
    height: 50px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
   
    
    a{
        color: white;
        text-decoration: none;
    }
}
.qr-content-wrap{
        flex: .3;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
       
        .buttons{
          
            
            max-width: 200px;
            box-sizing: border-box;
            position: relative;
            display: flex;
            width: 100%;
            justify-content: space-around;
            align-items: center;
            margin: 5px;
            border: 1px solid #9EB5F880;
            height: 50px;
            border-radius: 90px;
            margin-bottom: 30px;
            p{
                text-decoration: none;
                color: #8566FF;
                font-weight: 600;
                font-size: 14px;
            }

            .button-clickbg{
                transition: all .9s cubic-bezier(0.075, 0.82, 0.165, 1);
                left: 0;
                
                position: absolute;
                height: 100%;
                width: 55%;
                background-color: #8566FF;
                border-radius: 90px;
                z-index:-1;
              
        }
        }
        
    }

.web-qr-wrap{
   
    
}
.website-content-wrap{
    
}

@media screen and (max-width:700px){
    width: 90%;
    margin-top: 90px;
    margin-bottom: 0;
    flex-direction: column;
    .website-button{
    margin-top: 20px;
    width: 100px;
    height: 35px;
    border-radius: 50px;
 
   
    
    a{
        font-size: 10px;
    }
}
    .qr-content-wrap{
        margin-top: 60px;
        flex-direction: column-reverse;
        align-items: center;
        img{
            height: 150px;
            width: 150px;
        }
        .buttons{
          width: 50%;
          height: 30px;
            
            
           
            p{
                text-decoration: none;
                color: #8566FF;
                font-weight: 400;
                font-size: 10px;
            }

            .button-clickbg{
                transition: all .9s cubic-bezier(0.075, 0.82, 0.165, 1);
                left: 0;
                
                position: absolute;
                height: 100%;
                width: 55%;
                background-color: #8566FF;
                border-radius: 90px;
                z-index:-1;
              
        }
        }


    }.heading{
        margin-bottom: 10px;
    
    h1{
        
        font-size: 28px;
        font-weight: 700;
    }
    svg{
        padding-right: 10px;
        height: 20px;
        width: 20px;
    }
    .pen{
         height: 16px;
        width: 16px;
        
        
    }

}
}
`
const Content=styled.div`
background-color: #F1F3F9;
padding: 35px;
box-sizing: border-box;
border-radius: 33px;

.details{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    
}

.website-input{
    display: flex;
    align-items: center;
    p{
        color: #344FA1;
        font-size: 18px;
        font-weight: 600;
        margin-right: 30px;
    }
    input{
       
        width: 85%;
        height: 60px;
        outline: none;
        border-radius: 60px;
        outline: none;
        border: 2px solid #8566FF66;

    }

}
@media screen and (max-width:700px){
    padding: 30px;
    .details{
        margin-bottom:10px;
    }
    .website-input{
        flex-direction: column;
        align-items: flex-start;
    p{
        margin: 10px 10px;
        font-size: 13px;
        
       
    }
    input{
       
        width: 100%;
        height: 35px;
        outline: none;
        border-radius: 60px;
        outline: none;
        border: 2px solid #8566FF66;

    }

}
}

`

const Left=styled.div`
h3{
     font-size: 24px;
     color: #344FA1;
     margin-bottom: 6px;
    }
    p{
        font-size: 14px;
        color: #344FA1;
    }
@media screen and (max-width:700px){
    h3{
        font-size:18px;
    }p{
        font-size:10px
    }
}
    
    `

const Right=styled.div`
background-color: #8566FF;
height:40px;
padding:0 12px ;
border-radius: 50px;
display: flex;
align-items: center;
color: white;

@media screen and (max-width:700px){
    height: 25px;
    a{
        text-align:center;
        font-size: 10px;

    }
}
`