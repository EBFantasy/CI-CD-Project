import styleRegister from './Register.module.css'
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


export function Register(){

    const navigate = useNavigate()

    function goLogin(){
        navigate('/login')
    }

    const [ profile, setProfile ] = useState([]);
    const clientId = '574186118436-ogtg821lue1sc04j8ep85lqmo821a2ef.apps.googleusercontent.com';

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
        console.log('failed', err);
    };

    const animationRegister = {
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
        <div className={styleRegister.Box}>
            <motion.div initial='out' animate='in' exit='out' variants={animationRegister} transition={transitionTime}>
                <div className={styleRegister.informationBox}>
                    <form>
                        <h1 className={styleRegister.theme}>Se SINK pour être toujours au top</h1>
                        <div className={styleRegister.content}>
                            <h4>Commencez à vous sink dés à présent</h4>
                            <span>Already have an account ? </span>
                            <span className={styleRegister.loginFont} onClick={goLogin}>Log in</span>
                        </div>
                        <div className={styleRegister.icons}>
                            <a href="https://www.instagram.com/" target="blank">
                                <img src={icon1} alt="icon1" />
                            </a>
                            <a href="https://twitter.com/" target="blank">
                                <img src={icon2} alt="icon2" />
                            </a>
                        </div>
                    </form>
                </div>
                <div className={styleRegister.registerBox}>
                    <form>
                        <GoogleLogin className={styleRegister.googleLogin} clientId={clientId} onSuccess={onSuccess} onFailure={onFailure} cookiePolicy={'single_host_origin'} isSignedIn={true}>
                            <span>sign up with google</span>
                        </GoogleLogin>
                        <div className={styleRegister.dividingLine}>
                            <span className={styleRegister.title}> or </span>
                        </div>
                        <div className={styleRegister.inline}>
                            <fieldset className={styleRegister.registerFieldset2}>
                                <input type="text" name="" placeholder="First name" />
                            </fieldset>
                            <fieldset className={styleRegister.registerFieldset2}>
                                <input type="text" name="" placeholder="Last name" />
                            </fieldset>
                        </div>
                        <fieldset className={styleRegister.registerFieldset}>
                            <input type="email" name="" placeholder="Enter Your Email" />
                        </fieldset>
                        <fieldset className={styleRegister.registerFieldset}>
                            <input type="password" name="" placeholder="Enter Your Password" />
                        </fieldset>
                        <div className={styleRegister.agreement}>
                            <input className={styleRegister.checkbox} type="checkbox" id="horns" name="horns"></input>
                            <span> I agree to the </span>
                            <a href="https://policies.google.com/terms?gl=FR&hl=EN" target="_blank">Terms of Service</a> {/*Ajouter de lien Terms of Service*/}
                            <span> and </span>
                            <a href="https://policies.google.com/privacy?gl=FR&hl=EN" target="_blank">Privacy Notice</a> {/*Ajouter de lien Privacy Notice*/}
                        </div>
                        <input type="submit" name="" value="Sign me up !" />
                    </form>
                </div>
            </motion.div>
        </div>
    )
}




