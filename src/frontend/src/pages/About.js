import React from 'react'
import '../stylesheet/About.css'
import { Progress, Segment, Divider, Header, Icon } from 'semantic-ui-react'
import Slider from "react-slick";
import { Button } from 'semantic-ui-react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Link } from 'react-router-dom';


function About() {

    return (
        <div className='about-page'>
            <div className='container' id='intro-container'>
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
                            <p>Summary</p>
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
            <div className='front-back-background'>
                <div className='container' id='frontend-container'>
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
                            <div className='frontend-skill-bar'>
                                <Segment inverted color='black'>
                                    <Progress percent={80} inverted color='red' progress size='medium' active>
                                        React
                                    </Progress>
                                    <Progress percent={70} inverted color='red' progress size='medium' active>
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
                                <div className='frontend-skill-word'>
                                    <p> Frontend development is always the most entertaining and
                                        <br></br>
                                        enjoying thing to me. Especially when I code with React, 
                                        <br></br>
                                        I feel like i am painting with imagination. I am fascinated
                                        <br></br>
                                        with React for it's simplicity, efficiency(reusable components)
                                        <br></br>
                                        and interaction. Through several full-stack projects, I also
                                        <br></br>
                                        mastered other plugins such as Axios, different UI packages.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className='container' id='backend-container'>
                <div className="backend">
                    <div className="backend-title">
                        <Divider horizontal className="backend-divider">
                            <Header as='h2'>
                                <Icon name='paint brush' />
                                Backend
                            </Header>
                        </Divider>
                    </div>
                    <div className='backend-skill'>
                        <div className='backend-skill-word'>
                            <p>
                                I am familiar with Python, Java and C/C++. For my internship at
                                <br></br>
                                ByteDance, I developed backend-services and API in Python, 
                                <br></br>
                                and tested my code with unit test. I am also able to develop
                                <br></br>
                                web application in Python using Django and Flask framework. 
                                <br></br>
                                I developed a MPI project and a toy operating system at school
                                <br></br>
                                using C/C++.
                                <br></br>
                                <br></br>
                                My favourite framework is Java Spring because it is so powerful
                                <br></br>
                                and I developed this website using Spring Boot, Spring Security
                                <br></br>
                                and Spring Data. 
                            </p>
                        </div>
                        <div className='backend-skill-bar'>
                            <Segment inverted color='violet'>
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
            </div>
            <div className='dbc-resume-background'>
                <div className='container' id='dbc-container'>
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
                            <div className='dbc-skill-bar'>
                                <Segment inverted color='grey'>
                                    <Progress percent={80} inverted color='red' progress size='medium' active>
                                        MySQL
                                    </Progress>
                                    <Progress percent={60} inverted color='red' progress size='medium' active>
                                        Redis
                                    </Progress>
                                    <Progress percent={70} inverted color='red' progress size='medium' active>
                                        MongoDB
                                    </Progress>
                                    <Progress percent={70} inverted color='red' progress size='medium' active>
                                        AWS (VPC, S3, SageMaker)
                                    </Progress>
                                    <Progress percent={50} inverted color='red' progress size='medium' active>
                                        TensorFlow
                                    </Progress>
                                </Segment>
                            </div>
                            <div className='dbc-skill-word'>
                                <p>
                                    Implementing application with SQL/NoSQL database is not
                                    <br></br>
                                    a problem for me. Versatile projects I have done gave me
                                    <br></br>
                                    experiences with AWS services too, such as S3, EC2, VPC, 
                                    <br></br>
                                    Sagemaker and so on. I love embracing hottest technologies and
                                    <br></br>
                                    implement them into my own projects, solving real-world problems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container' id='resume-container'>
                    <div className='resume'>
                        <Jumbotron className='jumbotron'>
                            <div className='resume-title'>
                                <h1>Want to know more about me?</h1>
                                <h3>Download My Resume</h3>
                            </div>
                            <div className='video-btns'>
                                <Link to='/files/resume.pdf' target='_blank' download>
                                    <Button inverted color='blue' size='large'>Resume</Button>
                                </Link>
                            </div>
                        </Jumbotron>
                    </div>
            </div>
            </div>
        </div>
    )
}

export default About
