import { JitsiMeeting } from '@jitsi/react-sdk';
import React, { useRef, useState, useEffect } from 'react';
import AuthService from "./services/auth.service";
import { useNavigate } from 'react-router-dom'

const JitsiClient = () => {

    const navigate = useNavigate()

    const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser())
  
    useEffect(() => {
      setCurrentUser(AuthService.getCurrentUser())
    },[])

    const apiRef = useRef();

    const handleApiReady = (apiObj) => {
        apiRef.current = apiObj;
    };

    const [ roomName, updateRoomName ] = useState('');

    const getRoomName = () => {
        updateRoomName('JitsiMeetRoomNo73.24997119007794-1674671222156')
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
        roomName != '' ?
        <>
            <h1 style = {{ textAlign: 'center' }}>Meeting</h1>
            <JitsiMeeting
                roomName = { roomName }
                spinner = { () => <div style = {{ textAlign: 'center'}}>Loading...</div> }
                configOverwrite = {{ subject: 'lalalala', hideConferenceSubject: false }}
                onApiReady = { externalApi => handleApiReady(externalApi) }
                onReadyToClose = { handleReadyToClose }
                getIFrameRef = { handleJitsiIFrameRef }/>
            <div style = {{ margin: '15px 0' }}>
                <div style = {{ display: 'flex', justifyContent: 'center' }}>
                    <button
                        type = 'text'
                        title = 'Cliquer pour lever la main'
                        style = {{
                            border: 0,
                            borderRadius: '6px',
                            fontSize: '14px',
                            background: '#f8ae1a',
                            color: '#040404',
                            padding: '12px 46px',
                            margin: '2px 2px'
                        }}
                        onClick = { () => apiRef.current.executeCommand('toggleRaiseHand') }>
                        Lever la main
                    </button>
                </div>
            </div>
        </>
        :
        <>
            <h1 style = {{ textAlign: 'center' }}>No room name yet</h1>
            <button style = {{  }} type='button' onClick={() => getRoomName()}>Join meeting</button>
        </>
    );
};

export default JitsiClient;