import { useEffect, useRef, useState } from 'react';
import { prevIcon, nextIcon, pauseIcon, playIcon } from '../assets/icons';


function Control({handlePause, playing}){

    const buttonP = useRef();
    
    
    // function handleAudio(){
    //     setPlaying(!playing);
    //     handlePause();
    // } 

    return(
        <>
            {/* <div className='fixed bottom-6 w-screen flex justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <img src={prevIcon} alt="icon" className='mx-2 cursor-pointer'/>
                    <img ref={buttonP} src={playing ? playIcon : pauseIcon} alt="icon" 
                    className='mx-2 cursor-pointer' width={54} height={54} 
                    onClick={handleAudio}/>
                    <img src={nextIcon} alt="icon" className='mx-2 cursor-pointer'/>
                </div>
            </div> */}
        </>
    )
}

export default Control