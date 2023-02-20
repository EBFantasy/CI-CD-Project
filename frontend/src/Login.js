import styleLogin from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useState, useEffect } from 'react';
import icon1 from "./icons/instagramBW.svg";
import icon2 from "./icons/twitterBW.svg";
import icon3 from "./icons/googleBW.svg";
import icon4 from "./icons/google.svg";
import React, { useRef } from 'react';
import { motion } from 'framer-motion'


export function Login(){

    const navigate = useNavigate()

    function goRegister(){
        navigate('/register')
    }

    const [ profile, setProfile ] = useState([]);
    const clientId = '574186118436-ogtg821lue1sc04j8ep85lqmo821a2ef.apps.googleusercontent.com'; //Appeler la fonction gapi dans le crochet useEffect

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            });
        };
        gapi.load('client:auth2', initClient);
    });

    const onSuccess = (res) => {
        setProfile(res.profileObj)
    };

    const onFailure = (err) => {
        console.log('failed:', err);
    };

    const animationLogin = {
        in: {
            opacity: 1
        },
        out: {
            opacity: 0
        }
    };

    const transitionTime = {
        duration: 0.4
    }

    return(
        <div className={styleLogin.Box}>
            <motion.div initial='out' animate='in' exit='out' variants={animationLogin} transition={transitionTime}>
                <div className={styleLogin.informationBox}>
                    <form>
                        <h1 className={styleLogin.theme}>Be SINK !</h1>
                        <div className={styleLogin.content}>
                            <h4>Vous revoila ! On vous attend</h4>
                            <span>Vous n'avez pas de compte ? </span>
                            <span className={styleLogin.signFont} onClick={goRegister}>sign up</span>
                        </div>
                        <div className={styleLogin.icons}>
                            <a href="https://www.instagram.com/" target="blank">
                                <img src={icon1} alt="icon1" />
                            </a>
                            <a href="https://twitter.com/" target="blank">
                                <img src={icon2} alt="icon2" />
                            </a>
                        </div>
                    </form>
                </div>
                <div className={styleLogin.loginBox}>
                    <form>
                        <GoogleLogin className={styleLogin.googleLogin} clientId={clientId} onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} isSignedIn={true}>
                            <span>Login with google</span>
                        </GoogleLogin>
                        <div className={styleLogin.dividingLine}>
                            <span className={styleLogin.title}> or </span>
                        </div>
                        <div className={styleLogin.loginFieldset}>
                            <input type="email" name="" placeholder="Enter Your Email" />
                        </div>
                        <div className={styleLogin.loginFieldset}>
                            <input type="password" name="" placeholder="Enter Your Password" />
                        </div>
                        <a className={styleLogin.forgetPassword} href="">J'ai oublié mon mot de passe</a>
                        <input type="submit" name="" value="Se connecter" />
                    </form>
                </div>
            </motion.div>
        </div>
    )
}




// Exemple d'utilisation de la déclaration const [ profile, setProfile ] = useState([]); dans la ligne 19 de code
/*
return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.imageUrl} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <GoogleLogout clientId={clientId} buttonText="Log out" onLogoutSuccess={logOut} />
                </div>
            ) : (
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign in with Google"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            )}
        </div>
    );
    */
