import React from 'react'
import {Button} from './Button'
import '../stylesheet/Video.css'
import '../stylesheet/App.css'
import ReactTypingEffect from 'react-typing-effect'


function Video() {
    return (
        <div className="video-page">
            <div className='video-container'>
                <video src="/backgroundvideo01.mp4" autoPlay loop muted />
                <div className='intro'>
                    <h1 className='gradient-text'>
                        Welcome, You
                    </h1>
                    <p1>My name is</p1>
                    <p2>Xinbo Xia</p2>
                    <p3>And I'm a &nbsp;
                        <ReactTypingEffect className="type-effect"
                            text={["Developer", "Amazonian", "House Music Lover", "Trojan"]}
                            cursorRenderer={cursor => <h1>{cursor}</h1>}
                            speed={100}
                            eraseSpeed={100}
                            eraseDelay={2500}
                            typingDelay={1250}
                            displayTextRenderer={(text, i) => {
                            return (
                                <h1>
                                {text.split('').map((char, i) => {
                                    const key = `${i}`;
                                    return (
                                    <span
                                        key={key}
                                        style={{ color:'#F3577B'}}
                                    >{char}</span>
                                    );
                                })}
                                </h1>
                            );
                            }}        
                        />
                    </p3>
                    
                    <div className='video-btns'>
                        <a href='https://www.linkedin.com/in/xinbo-justin-xia-5a792a19a/' className='linkedin'>
                            <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                                LinkedIn
                            </Button>
                        </a>
                        <a href='https://github.com/xinboxia' className='Github'>
                            <Button className='btn' buttonStyle='btn--outline' buttonSize='btn--large'>
                                GitHub
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video
