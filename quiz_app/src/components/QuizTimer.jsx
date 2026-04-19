import React, { useEffect, useState } from 'react'

function QuizTimer({ timeout, onTimeOut, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);
    useEffect(() => {
        if (!onTimeOut) {
            return;
        }
        const timeoutTimer = setTimeout(() => {
            onTimeOut();
        }, timeout);
        return ()=>{
            clearTimeout(timeoutTimer);
        }
    }, [timeout, onTimeOut]);
    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 100);
        }, 100);
        return ()=>{
            clearInterval(interval);
        }
    }, []);
    return (
        <progress id="question-time" max={timeout} value={remainingTime} className={mode}/>
    );
}

export default QuizTimer;