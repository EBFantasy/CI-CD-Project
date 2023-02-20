import { JitsiMeeting } from '@jitsi/react-sdk';
import React, { useRef, useState, useEffect } from 'react';
import AuthService from "./services/auth.service";
import { useNavigate } from 'react-router-dom'

let roomName = null;

const JitsiHost = () => {

    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser())
  
    useEffect(() => {
      setCurrentUser(AuthService.getCurrentUser())
    },[])

    const apiRef = useRef();
    
    const handleApiReady = apiObj => {
        apiRef.current = apiObj;
    };

    const generateRoomName = () => {
        roomName = `JitsiMeetRoomNo${Math.random() * 100}-${Date.now()}`
        console.log('ROOM NAME : ' + roomName);
        return roomName;
    }

    const handleReadyToClose = () => {
        alert('Ready to close...');
    };

    const handleJitsiIFrameRef = iframeRef => {
        iframeRef.style.border = '10px solid #3d3d3d';
        iframeRef.style.background = '#3d3d3d';
        iframeRef.style.height = '400px';
        iframeRef.style.width = '90%';
        iframeRef.style.marginBottom = '20px';
    };

    return (
        <>
            <h1 style = {{ textAlign: 'center' }}>Meeting</h1>
            <JitsiMeeting
                roomName = { generateRoomName() }
                spinner = { () => <div style = {{ textAlign: 'center'}}>Loading...</div> }
                configOverwrite = {{ subject: 'lalalala', hideConferenceSubject: false }}
                onApiReady = { externalApi => handleApiReady(externalApi) }
                onReadyToClose = { handleReadyToClose }
                getIFrameRef = { handleJitsiIFrameRef }/>
            <div style = {{ margin: '15px 0' }}>
                <div style = {{ display: 'flex', justifyContent: 'center' }}>
                    <button
                        type = 'text'
                        title = 'Cliquer pour changer le sujet'
                        style = {{
                            border: 0,
                            borderRadius: '6px',
                            fontSize: '14px',
                            background: '#df486f',
                            color: 'white',
                            padding: '12px 46px',
                            margin: '2px 2px'
                        }}
                        onClick = { () => apiRef.current.executeCommand('subject', 'New Subject')}>
                        Changer le sujet
                    </button>
                </div>
            </div>
        </>
    );
};

export { JitsiHost }