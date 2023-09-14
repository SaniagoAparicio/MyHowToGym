"use-client"
import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import type ReactPlayer from 'react-player';

// Wrap ReactPlayer in dynamic import
const DynamicReactPlayer = dynamic(() => import('react-player'), {
    ssr: false, // Disable server-side rendering for this component
});

const videoPlayer = () => {
    const playerRef = useRef<ReactPlayer | null>(null);
    const videoURL = localStorage.getItem("videoURL");
    const MuteBtn = () => {
        const player = playerRef.current;

        if (player) { // Check if player is not null or undefined
            const internalPlayer = player.getInternalPlayer();
            if (internalPlayer.isMuted()) {
                internalPlayer.unMute();
            } else {
                internalPlayer.mute();
            }
        }
    };

    return (
        <div>
            <div className='react-player'>
                {/* Use the dynamically imported ReactPlayer */}
                <DynamicReactPlayer
                    url={videoURL?.toString()}
                    ref={playerRef}
                    controls
                />
            </div>
            <button onClick={MuteBtn}>Mutar</button>
        </div>
    );
};

export default videoPlayer;