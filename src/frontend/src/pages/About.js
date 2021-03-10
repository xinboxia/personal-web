import React from 'react'
import '../stylesheet/About.css'
import { Progress, Segment, Divider, Header, Icon } from 'semantic-ui-react'
import Slider from "react-slick";


function About() {
    return (
        <div className='about-page'>
            <div class='container' id='intro-container'>
                <div className='self-intro'>
                    <div className='self-intro-pic'>
                        <Slider 
                        autoplay={true}
                        dots={true}
                        speed={500}
                        infinite={true}
                        slidesToShow={1}
                        slidesToScroll={1}
                        className="pic-slider"
                        >
                            <div className='pic-img'>
                                <img src="images/pic06.png" alt=''/>
                            </div>
                            <div className='pic-img'>
                                <img src="images/pic07.jpeg" alt=''/>
                            </div>
                            <div className='pic-img'>
                                <img src="images/pic01.jpeg" alt=''/>
                            </div>
                            <div className='pic-img'>
                                <img src="images/pic08.jpeg" alt=''/>
                            </div>
                            <div className='pic-img'>
                                <img src="images/pic09.jpeg" alt=''/>
                            </div>
                        </Slider>
                    </div>
                    <div className='self-intro-word'>
                        <div className='self-intro-title'>
                            Summary
                        </div>
                        <div className='self-intro-body'>
                            <p>
                                My name is Xinbo Xia, an incoming full-time Software Development
                                <br></br>
                                Engineer at Amazon. I obtained my Bachelor degree of Materials Science
                                <br></br>
                                and Engineering at UIUC and I will obtain my Master Degree of Electrical
                                <br></br>
                                Engineering at USC in May. Though I was not majored in Computer Science,  
                                <br></br>
                                I have solid software development skills through self-motivated learning,
                                <br></br>
                                projects and internships. I am good at backend development, API design and
                                <br></br>
                                I enjoy developing frontend too! Check out my Portfolio below! 😇  
                                 
                            </p> 
                        </div> 
                        
                    </div>
                </div>
            </div>
            <div class='container' id='frontend-container'>
                <div className="frontend-background"></div>
                <div className="frontend">
                    <div className="frontend-skill-title">
                    <Divider horizontal>
                        <Header as='h2'>
                            <Icon name='paint brush' />
                            Frontend
                        </Header>
                    </Divider>
                    </div>
                    <div className='frontend-skill'>
                        <div className='frontend-skill-word'>
                            frontend-skill-word
                        </div>
                        <div className='frontend-skill-bar'>
                        <Segment inverted color='blue'>
                            <Progress percent={80} inverted color='red' progress size='medium' active>
                                React (Redux, Hook)
                            </Progress>
                            <Progress percent={60} inverted color='red' progress size='medium' active>
                                JavaScript
                            </Progress>
                            <Progress percent={70} inverted color='red' progress size='medium' active>
                                CSS
                            </Progress>
                            <Progress percent={80} inverted color='red' progress size='medium' active>
                                HTML5
                            </Progress>
                            <Progress percent={50} inverted color='red' progress size='medium' active>
                                Vue
                            </Progress>
                        </Segment>
                        </div>
                    </div>
                </div>
            </div>
            <div class='container' id='backend-container'>
                <div className="backend">
                    <div className="backend-title">
                        <Divider inverted horizontal className="backend-divider">
                            <Header inverted as='h2'>
                                <Icon inverted name='paint brush' />
                                Backend
                            </Header>
                        </Divider>
                    </div>
                    <div className='backend-skill'>
                        <div className='backend-skill-word'>
                            <p>
                                backend-skill-word
                            </p>
                        </div>
                        <div className='backend-skill-bar'>
                            <Segment inverted color='teal'>
                                <Progress percent={80} inverted color='red' progress size='small' active>
                                    Python
                                </Progress>
                                <Progress percent={75} inverted color='red' progress size='small' active>
                                    Java
                                </Progress>
                                <Progress percent={50} inverted color='red' progress size='small' active>
                                    C / C++
                                </Progress>
                                <Progress percent={50} inverted color='red' progress size='small' active>
                                    Golang
                                </Progress>
                            </Segment>
                            <br></br>
                            <Segment inverted color='blue'>
                                <Progress percent={70} inverted color='red' progress size='small' active>
                                    Flask
                                </Progress>
                                <Progress percent={60} inverted color='red' progress size='small' active>
                                    Django
                                </Progress>
                                <Progress percent={80} inverted color='red' progress size='small' active>
                                    Spring
                                </Progress>
                                <Progress percent={60} inverted color='red' progress size='small' active>
                                    Docker / K8S
                                </Progress>
                            </Segment>
                        </div>
                    </div>
                </div>
            </div>
            <div class='container' id='dbc-container'>
                <div className="dbc">
                    <div className='dbc-title'>
                        <Divider horizontal>
                            <Header as='h2'>
                                <Icon name='paint brush' />
                                Database & Cloud & ML
                            </Header>
                        </Divider>
                    </div>
                    <div className='dbc-skill'>
                        <div className='dbc-skill-word'>
                            dbc-skill-word
                        </div>
                        <div className='dbc-skill-bar'>
                            <Segment inverted color='blue'>
                                <Progress percent={80} inverted color='red' progress size='medium' active>
                                    MySQL
                                </Progress>
                                <Progress percent={60} inverted color='red' progress size='medium' active>
                                    Redis
                                </Progress>
                                <Progress percent={70} inverted color='red' progress size='medium' active>
                                    MongoDB
                                </Progress>
                                <Progress percent={80} inverted color='red' progress size='medium' active>
                                    AWS (VPC, S3, SageMaker)
                                </Progress>
                                <Progress percent={50} inverted color='red' progress size='medium' active>
                                    TensorFlow
                                </Progress>
                            </Segment>
                        </div>
                    </div>
                </div>
            </div>
            <div class='container' id='resume-container'>
                <div className='resume'>
                    <div className='resume-title'>
                        resume
                    </div>
                    <div className='resume-download'>
                        resume download button
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
