import React,{useState,useEffect,useRef} from "react";

function stopWatch(){

    const [isRunning,setIsRunning] = useState(false);
    const [elapsedTime,setElapsedTime]=useState(0);
    const intervalRef=useRef(null);
    const startTimeRef=useRef(0);

    useEffect(() => {

    },[isRunning]);

    function start(){

    }

    function stop(){

    }

    function reset(){

    }

    function formatTime(){
        return "00:00:00";
    }

    return(
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <div onClick={start} className="start-button">Start</div>
                <div onClick={stop} className="stop-button">Stop</div>
                <div onClick={reset} className="reset-button">Reset</div>
            </div>
        </div>
    );
}

export default stopWatch;