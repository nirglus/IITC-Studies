import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

function TimerChallenge({title, targetTime}) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0 ){
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  const handleStart = () =>{
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10);
    setTimerStarted(true);
  }

  const handleStop = () =>{
    dialog.current.open();
    clearInterval(timer.current);
  }
  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop' : 'Start'} Challenge
        </button>
        <p className={timerIsActive ? 'active' : undefined}>
            {timerIsActive ? 'Timer is running...' : 'Timer inactive'}
        </p>
    </section>
    </>
  )
}

export default TimerChallenge
