import React, { useState } from 'react'
import './LoginForm.css'
import { useSpring, animated } from "react-spring";
import { Button } from 'semantic-ui-react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'


function LoginForm() {

    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
    const [user, setUser] = useState({username: '', password: ''});
    const [isAuthenticated, setAuth] = useState(false);

    const handleChange = (event) => {
        setUser({...user, [event.target.name] : event.target.value})
    }

    const login = () => {
        axios({
            url: "http://localhost:8080/login",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            Accept: "*/*",
            data: user
        })
        .then(response => {
            console.log(response.data)
            const jwtToken = response.headers.authorization
            if(jwtToken !== null) {
                sessionStorage.setItem("jwt", jwtToken)
                setAuth(true);
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    console.log(sessionStorage.jwt)

    const loginProps = useSpring({ 
      left: registrationFormStatus ? -500 : 0, // Login form sliding positions
    });
    const registerProps = useSpring({
      left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
    });
  
    const loginBtnProps = useSpring({
      borderBottom: registrationFormStatus 
        ? "solid 0px transparent"
        : "solid 3px black",  //Animate bottom border of login button
      color: "white",
      padding: "5px",
      width: "120px",
      marginRight: "30px",
      fontSize: "19px",
      fontFamily: "Gill Sans",
      backgroundColor: "transparent",
    });

    const registerBtnProps = useSpring({
      borderBottom: registrationFormStatus
        ? "solid 3px black"
        : "solid 0px transparent", //Animate bottom border of register button
        color: "white",
        padding: "5px",
        width: "120px",
        fontSize: "19px",
        fontFamily: "Gill Sans",
        backgroundColor: "transparent",
    });
  
    const registerClicked = () => {
      setRegistartionFormStatus(true);
    }

    const loginClicked = () => {
      setRegistartionFormStatus(false);
    }

    if (sessionStorage.jwt) {
        return <Redirect to='/post' />
    }
  
    return (
      
      <div className="body">

        <div className="login-register-wrapper">
            <div className="nav-buttons">
                <animated.button
                    onClick={loginClicked}
                    id="loginBtn"
                    style={loginBtnProps}
                >
                    Login
                </animated.button>
                <animated.button
                    onClick={registerClicked}
                    id="registerBtn"
                    style={registerBtnProps}
                >
                    Register
                </animated.button>
            </div>
            <div className="form-group">
                <animated.form id="loginform" style={loginProps}>
                    <label for="username">USERNAME</label>
                    <input type="text" name="username" id="username" onChange={handleChange}/>
                    <label for="password">PASSWORD</label>
                    <input type="text" name="password" id="password" onChange={handleChange}/>
                </animated.form>
                <div className="login-register-btn">
                    { !registrationFormStatus ? (
                        <div className="login-btn">
                            <Button inverted color='teal' onClick={login}>LOGIN</Button>
                        </div>
                    ) : (
                        <div className="register-btn">
                            <Button inverted color='teal' /* onClick={register} */>REGISTER</Button>
                        </div>
                    )
                    }
                </div>
                <animated.form action="" id="registerform" style={registerProps}>
                    <label for="fullname">Username</label>
                    <input type="text" id="fullname" />
                    <label for="email">email</label>
                    <input type="text" id="email" />
                    <label for="password">password</label>
                    <input type="text" id="password" />
                </animated.form>
            </div>
        </div>
      </div>

    );
  } 

export default LoginForm
