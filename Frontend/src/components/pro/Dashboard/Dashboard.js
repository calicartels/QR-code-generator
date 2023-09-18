import React from 'react'
import styled from 'styled-components'
import {Bar, Chart} from 'react-chartjs-2'
import { useEffect } from 'react';
import { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { AccessTimeOutlined, CloudDownload, CreateOutlined, CreateRounded, FolderOutlined, MoreHorizOutlined, MoreVertOutlined, PaletteOutlined, SaveOutlined, TimerOutlined } from '@material-ui/icons';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';

import { faDownload } from '@fortawesome/free-solid-svg-icons';


function Dashboard() {
    const [gradient,setGradient]=useState();
    const [state, setState] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    key: 'selection'
  }
]);
const [dates,setDates]=useState(null)
const [showdp,setShowdp]=useState(true)
const[ddmm,setddmm]=useState({
    start:null,
    end:null
})

    
useEffect(()=>{






    console.log('picked dates are:',dates?dates[0].startDate:null)
    let start=(dates?String(dates[0].startDate).split(" "):null)
    let end=(dates?String(dates[0].endDate).split(" "):null)
    console.log(end,start)
    if(start && end){
         setddmm({
        start:start[1]+' '+start[2]+','+start[3],
        end:end[1]+' '+end[2]+','+end[3]
    })
    }
   
},[dates])
useEffect(()=>{
    setGradient(get_gradient())
    console.log(gradient)

},[document.getElementById('bar-chart')])

const get_gradient=()=>{
    
    var c=document.getElementById('bar-chart')

    console.log(document.getElementById('bar-chart'))

    var bar_ctx = c?.getContext('2d');

    var purple_orange_gradient = bar_ctx?.createLinearGradient(0, 0, 0, 600);
    purple_orange_gradient?.addColorStop(0, '#8566FF');
    purple_orange_gradient?.addColorStop(1, '#8566FF3D');

return purple_orange_gradient
}

// var bar_chart = new Chart(bar_ctx, {
//     type: 'bar',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 8, 14, 5],
// 						backgroundColor: purple_orange_gradient,
// 						hoverBackgroundColor: purple_orange_gradient,
// 						hoverBorderWidth: 2,
// 						hoverBorderColor: 'purple'
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

        
useEffect(()=>{
    console.log('clicked')
    showdp?document.querySelector('.date-picker').style.display='none':document.querySelector('.date-picker').style.display='unset'


},[showdp])


useEffect(()=>{
    console.log('ddmm:',ddmm)
},[ddmm])


const set_dates=()=>{
    console.log('clicked')
    setDates(state)
    setShowdp(true)

}

    return (
        <Container>
            <div className="header">
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
                    <svg className='download' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 26.25V22.75H24.5V26.25H10.5ZM24.5 14L17.5 21L10.5 14H14.875V7H20.125V14H24.5ZM17.5 0C27.125 0 35 7.875 35 17.5C35 27.125 27.125 35 17.5 35C7.875 35 0 27.125 0 17.5C0 7.875 7.875 0 17.5 0ZM17.5 3.5C9.765 3.5 3.5 9.765 3.5 17.5C3.5 25.235 9.765 31.5 17.5 31.5C25.235 31.5 31.5 25.235 31.5 17.5C31.5 9.765 25.235 3.5 17.5 3.5Z" fill="white"/>
                    </svg>

                    <div>
                        <CreateOutlined />
                        <PaletteOutlined />
                        <FolderOutlined />
                        <MoreVertOutlined />

                    </div>
                    <img src="gr.png" alt="" />
                </div>
            </div>
            <div className="circular-progress-container">
                <div className="circular-progress">
                <CircularProgress id='progress-wrap' variant='determinate' value={100} size={140}  />
                <CircularProgress id='progress-main' variant='determinate' value={20} size={140} style={{color:'#8566FF'}} />
                <h1 className='progress-data'>200</h1>
                </div>

                <div className="content">
                    <div className="pen">
                        <CreateRounded />
                    </div>



                    <svg width="52" height="59" viewBox="0 0 52 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="49" height="56" rx="1.5" fill="#F4F2FF" stroke="#8566FF" strokeWidth="3"/>
                    <line x1="6" y1="10.5" x2="37" y2="10.5" stroke="#8566FF"/>
                    <line x1="6" y1="18.5" x2="37" y2="18.5" stroke="#8566FF"/>
                    <line x1="6" y1="26.5" x2="37" y2="26.5" stroke="#8566FF"/>
                    <line x1="6" y1="34.5" x2="37" y2="34.5" stroke="#8566FF"/>
                    <path d="M15.1675 47.5V49.167H16.8335V50.833H18.5V52.5H16.8335V50.8335H15.1675V52.5H13.5V50.833H15.1665V49.167H13.5V47.5H15.167H15.1675ZM11.25 47.5C11.5815 47.5 11.8995 47.6317 12.1339 47.8661C12.3683 48.1005 12.5 48.4185 12.5 48.75V51.25C12.5 51.5815 12.3683 51.8995 12.1339 52.1339C11.8995 52.3683 11.5815 52.5 11.25 52.5H8.75C8.41848 52.5 8.10054 52.3683 7.86612 52.1339C7.6317 51.8995 7.5 51.5815 7.5 51.25V48.75C7.5 48.4185 7.6317 48.1005 7.86612 47.8661C8.10054 47.6317 8.41848 47.5 8.75 47.5H11.25ZM11.25 48.5H8.75C8.6837 48.5 8.62011 48.5263 8.57322 48.5732C8.52634 48.6201 8.5 48.6837 8.5 48.75V51.25C8.5 51.3163 8.52634 51.3799 8.57322 51.4268C8.62011 51.4737 8.6837 51.5 8.75 51.5H11.25C11.3163 51.5 11.3799 51.4737 11.4268 51.4268C11.4737 51.3799 11.5 51.3163 11.5 51.25V48.75C11.5 48.6837 11.4737 48.6201 11.4268 48.5732C11.3799 48.5263 11.3163 48.5 11.25 48.5ZM10.875 49.125V50.875H9.125V49.125H10.875ZM18.5 47.5V49.167H16.8335V47.5H18.5ZM11.25 41.5C11.5815 41.5 11.8995 41.6317 12.1339 41.8661C12.3683 42.1005 12.5 42.4185 12.5 42.75V45.25C12.5 45.5815 12.3683 45.8995 12.1339 46.1339C11.8995 46.3683 11.5815 46.5 11.25 46.5H8.75C8.41848 46.5 8.10054 46.3683 7.86612 46.1339C7.6317 45.8995 7.5 45.5815 7.5 45.25V42.75C7.5 42.4185 7.6317 42.1005 7.86612 41.8661C8.10054 41.6317 8.41848 41.5 8.75 41.5H11.25ZM17.25 41.5C17.5815 41.5 17.8995 41.6317 18.1339 41.8661C18.3683 42.1005 18.5 42.4185 18.5 42.75V45.25C18.5 45.5815 18.3683 45.8995 18.1339 46.1339C17.8995 46.3683 17.5815 46.5 17.25 46.5H14.75C14.4185 46.5 14.1005 46.3683 13.8661 46.1339C13.6317 45.8995 13.5 45.5815 13.5 45.25V42.75C13.5 42.4185 13.6317 42.1005 13.8661 41.8661C14.1005 41.6317 14.4185 41.5 14.75 41.5H17.25ZM11.25 42.5H8.75C8.6837 42.5 8.62011 42.5263 8.57322 42.5732C8.52634 42.6201 8.5 42.6837 8.5 42.75V45.25C8.5 45.3163 8.52634 45.3799 8.57322 45.4268C8.62011 45.4737 8.6837 45.5 8.75 45.5H11.25C11.3163 45.5 11.3799 45.4737 11.4268 45.4268C11.4737 45.3799 11.5 45.3163 11.5 45.25V42.75C11.5 42.6837 11.4737 42.6201 11.4268 42.5732C11.3799 42.5263 11.3163 42.5 11.25 42.5ZM17.25 42.5H14.75C14.6837 42.5 14.6201 42.5263 14.5732 42.5732C14.5263 42.6201 14.5 42.6837 14.5 42.75V45.25C14.5 45.3163 14.5263 45.3799 14.5732 45.4268C14.6201 45.4737 14.6837 45.5 14.75 45.5H17.25C17.3163 45.5 17.3799 45.4737 17.4268 45.4268C17.4737 45.3799 17.5 45.3163 17.5 45.25V42.75C17.5 42.6837 17.4737 42.6201 17.4268 42.5732C17.3799 42.5263 17.3163 42.5 17.25 42.5ZM16.875 43.125V44.875H15.125V43.125H16.875ZM10.8735 43.1265V44.874H9.1265V43.1265H10.8735Z" fill="#8566FF"/>
                    </svg>

                    <div>
                        <p>Medium</p>
                        <h5>Banner</h5>
                    </div>
                    <div>
                        <p>Print run</p>
                        <h5>123</h5>
                    </div>
                    <div>
                        <p>Compain start</p>
                        <h5>12/12/2020</h5>
                    </div>
                    <div>
                        <p>Compain end</p>
                        <h5>12/12/2020</h5>
                    </div>

                </div>

            </div>
            
            <BarCharts>
                <div className="chart-daterange" onClick={()=>setShowdp(!showdp)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 4H17V3C17 2.73478 16.8946 2.48043 16.7071 2.29289C16.5196 2.10536 16.2652 2 16 2C15.7348 2 15.4804 2.10536 15.2929 2.29289C15.1054 2.48043 15 2.73478 15 3V4H9V3C9 2.73478 8.89464 2.48043 8.70711 2.29289C8.51957 2.10536 8.26522 2 8 2C7.73478 2 7.48043 2.10536 7.29289 2.29289C7.10536 2.48043 7 2.73478 7 3V4H5C4.20435 4 3.44129 4.31607 2.87868 4.87868C2.31607 5.44129 2 6.20435 2 7V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V7C22 6.20435 21.6839 5.44129 21.1213 4.87868C20.5587 4.31607 19.7956 4 19 4ZM20 19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V12H20V19ZM20 10H4V7C4 6.73478 4.10536 6.48043 4.29289 6.29289C4.48043 6.10536 4.73478 6 5 6H7V7C7 7.26522 7.10536 7.51957 7.29289 7.70711C7.48043 7.89464 7.73478 8 8 8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V6H15V7C15 7.26522 15.1054 7.51957 15.2929 7.70711C15.4804 7.89464 15.7348 8 16 8C16.2652 8 16.5196 7.89464 16.7071 7.70711C16.8946 7.51957 17 7.26522 17 7V6H19C19.2652 6 19.5196 6.10536 19.7071 6.29289C19.8946 6.48043 20 6.73478 20 7V10Z" fill="#8566FF"/>
                    </svg>
                    {ddmm.start?<h5>{ddmm.start}</h5>:<p style={{color:'lightgray'}}>start date</p>}
                    {ddmm.end?<h5>{ddmm.end}</h5>:<p style={{color:'lightgray'}}>end date</p>}
                    <svg className='chart-arrow-down' width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M0 0L5 5L10 0" fill="#8566FF"/>
                    </svg>


                </div>
                <div className="date-picker" >
                    <DateRangePicker
                    
                        rangeColors={['#8566FF']}
                        onChange={item => setState([item.selection])}
                        showSelectionPreview={true}
                        moveRangeOnFirstSelection={false}
                        months={2}
                        ranges={state}
                        direction="horizontal"
                        />

                        <div className="dp-buttons">
                            <button onClick={()=>setShowdp(true)}>Cancel</button>
                            <button className='dp-ok' onClick={()=>set_dates()}>Ok</button>
                        </div>
                </div>
                <Wrap>
                    <div className="dashboard-1">
                        <h3 className='label'>Scan over time</h3>
                <Bar id='bar-chart' data={{
                    labels:['may 27','may 31','june 4','june 13'],
                    datasets:[{
                        label:'# of votes',
                        data:[1,2,3,4],
                        backgroundColor:gradient?gradient:'',
                        
                        barThickness:20,
                        borderRadius:9,
                        
                    }],


                }}
                height={400}
                width={'100%'}
                options={{maintainAspectRatio:false,scales:{
                    x:{
                        grid: {
                            display: false,
                        }
                    },
                    y:{
                        grid: {
                            display: false,
                        }
                    },
                    

                },plugins:{
                    legend:{
                        display: false
                    }
                }}}
                
                
                />
            </div>
            <div className="dashboard-2">
                <h3 className='label label-2'>Scan by operating system</h3>
                <Bar id='bar-chart2' data={{
                    labels:['Harmony OS','IOS','Android','Windows'],
                    datasets:[{
                        label:'# of votes',
                        data:[1,2,3,4],
                        backgroundColor:gradient?gradient:'',
                        
                        barThickness:20,
                        borderRadius:9,
                        options:{

                        }
                        
                    }],


                }}
                height={400}
                width={'100%'}
                options={{maintainAspectRatio:false,scales:{
                    
                    x:{
                        display:false,
                        grid: {
                            display: false,
                        }
                    },
                    y:{
                        grid: {
                            display: false,
                        }
                    },
                    
                    
                    

                },indexAxis:'y',
                plugins:{
                    legend:{
                        display: false
                    }
                }}}
                
                
                />
            </div>

                </Wrap>
                
            </BarCharts>
            
        </Container>
    )
}

export default Dashboard


const Container=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 50px;

//header section
.header{
    width: 100%;
    padding:50px 10%;
    box-sizing: border-box;
    background-color: #F4F2FF;
    display: flex;
    .left{
        flex:.5;
        
        h1{
            color: #344FA1CC;
            font-size: 48px;
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
            margin-left: 80px;
            height: 140px;
            width: 140px;
            object-fit: contain;
            padding: 10px;
            background-color: white;
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

}




.circular-progress-container{
    padding: 50px;
    display: flex;
    width: 80%;
    box-sizing: border-box;
    
    align-items: center;
   .content{
       position: relative;
       flex: .8;
       display: flex;
       background-color: #F4F2FF;
       padding: 70px 0;
       box-sizing: border-box;
       justify-content: space-around;
       border-radius: 35px;
       align-items: center;
       div{
           color:#344FA1 ;
           p{
               color: #344FA199;
               padding-bottom: 10px;
           }
       }
       .pen{
           position: absolute;
           right: -40px;
           top: auto;
           bottom: auto;
           color: white;
           background-color: #8566FF;
           height: 80px;
           width: 80px;
           border-radius: 80px;
           display: flex;
           align-items: center;
           justify-content: center;
           svg{
               height: 60%;
               width: 60%;
           }
       }
   }
   @media screen and (max-width:700px){
       width: 100%;
       padding: 50px 20px;
       .pen{
           right: -20px !important;
           height: 40px !important;
           width: 40px !important;
          
           svg{
               height: 60%;
               width: 60%;
           }
       }
       div{
           p{
               font-size: 10px;
           }h5{
               font-size: 10px;
           }
       }
       .content{
           padding: 30px 0px;
          
           svg{
               height: 22px;
               width: 22px;
           }

       }

   }
}

.circular-progress{
    flex: .2;
    position: relative;
    
    #progress-wrap{
        position: absolute;
        color: whitesmoke;
    }
 
    
    .progress-data{
        position: absolute;
        height: 140px;
        width: 140px;
        color: #8566FF;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    @media screen and (max-width:700px){
        margin-right: 12px;

        #progress-wrap{
        position: absolute;
        color: whitesmoke;
        height: 70px !important;
        width: 70px !important;
    }
    #progress-main{
        height:70px !important ;
        width: 70px !important;
    }
 
    
    .progress-data{
        position: absolute;
        height: 70px;
        width: 70px;
      
      font-size: 22px;
       
    }
    
        
    }
}


`
const BarCharts=styled.div`
width: 80%;
padding: 30px;
border-radius: 60px;

background-color:#F4F2FF;
position: relative;


.chart-daterange{
    width: 300px;
    display: flex;
    align-items: center;
    background-color: white;
    padding: 10px 20px;
    box-sizing:border-box;
    border-radius: 20px;
    justify-content: space-between;
    margin-bottom: 50px;

}
.date-picker{
position: absolute;
top: 90px;
box-shadow: 0 0 13px rgba(0,0,0,.1);
padding: 50px;
box-sizing:border-box;
background-color: white;
border-radius: 30px;
z-index:2;
.dp-buttons{
    width: 100%;
    
    display: flex;
    justify-content: flex-end;
    button{
        outline:none;
        border: 1px solid #344FA1CC;
        border-radius: 30px;
        padding: 6px 20px;
        margin: 10px;
        color: #344FA1CC;
        
        background-color: white;
    }
    .dp-ok{
        color: white;
        background-color: #8566FF;
    }
}
}
@media screen and (max-width:700px){
    width: 100%;
    box-sizing:border-box !important;
    border-radius: 10px;
    padding: 10px;
    .chart-daterange{
    width: 70%;
    
    padding: 10px 18px;
    box-sizing:border-box;
    border-radius: 20px;
    justify-content: space-between;
    margin-bottom: 30px;
    svg{
        height: 14px ;
        width: 14px;
    }p{
        font-size: 10px;
    }h5{
        font-size: 10px;
    }
    .chart-arrow-down{
        height: 12px;
        width: 12px;
    }
    

}
.date-picker{
        padding: 20px;
        box-sizing:border-box;
        .rdrWeekDay{
            font-size: 10px;
            padding: 2px;
        }

        .rdrDateRangePickerWrapper{
            
            flex-direction: column;
        }
        .rdrDateDisplayWrapper{
            display: none;
        }
        .rdrDays{
            button{
                font-size: 10px;
                
            }
        }
        .rdrMonths{
            width:200px;
        } 
        .rdrMonth{
            padding: 0;
            transform: scale(.8);
        }
        .rdrDefinedRangesWrapper{
            width: 100%;
            border-right: none;
            font-size: 10px;
        }
        .sc-hzMMVR {
            box-sizing:border-box;
        }
    }
}

`
const Wrap=styled.div`
display: flex;
background-color: white;
padding: 40px;
border-radius: 40px;
box-sizing: border-box;


.dashboard-1,.dashboard-2{
    flex: .5;
    width: 100%;
    margin: 10px;
    box-sizing: border-box;
    position: relative;
    margin-top: 50px;
    .label{
        color: #344FA1;
       
        font-size: 18px;
        position: absolute;
        top: -50px;
    }
    .label-2{
       padding-left: 80px;
    }
}
@media screen and (max-width:700px){
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    .dashboard-1,.dashboard-2{
        .label{
            font-size: 13px;
        }
        .label-2{
            padding-left: 0;
        }
    }
    .dashboard-1{
        margin-bottom: 40px;
    }
}
`
