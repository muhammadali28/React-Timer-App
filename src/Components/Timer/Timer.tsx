import React, { useState, Component } from 'react';
import './Timer.css';
import TimerButton from '../TimerButton/TimerButton';

function Timer() {
    const [time, setTime] = useState({
        seconds: 0,
        minutes: 25
    })
    const [timeInterval, setTimeInterval] = useState({})
    let [isOn, setIsOn] = useState(false)

    var updateSeconds = time.seconds
    var updateMinute = time.minutes

    const timer = () => {
        if (updateSeconds === 0) {
            updateMinute--;
            updateSeconds = 60
        }
        updateSeconds--;
        return setTime({
            seconds: updateSeconds,
            minutes: updateMinute
        })
    }

    // Start Timer Function
    const startTimer = () => {
        if (isOn !== true) {
            timer()
            setIsOn(true)
            setTimeInterval(setInterval(timer, 1000))
            console.log("Start timer")
        }

    }

    // Stop Timer Function
    const stopTimer = () => {
        console.log('Stopping timer.');
        clearInterval(Number(timeInterval));
        setIsOn(false)
    }

    // Reset Timer Function
    const resetTimer = () => {
        console.log('Resetting timer.');
        stopTimer()
        setTime({
            seconds: 0,
            minutes: 25
        })
    }

    return (
        <div className="container">

            <div className="row">
                <div className="col-sm-6 ">
                    <div className="timer-desc card border-0 bg-transparent">
                        <div className="card-body">
                            <h1 className="heading animate__animated animate__bounceIn">Timer App By Muhammad Ali</h1><br />
                            <p className="para">Build a React Timer App using TypeScript with Test Driven Development. </p>
                            <p className="para">While Building the CI/CD pipeline  the app passes all the automated tests before deployment</p>
                        </div>
                    </div>
                </div>
                <div className=" col-sm-6">
                    <div className="timer-card card  text-center animate__animated animate__fadeIn animate__delay-1s 1s">
                        <div className="card-body">
                            <div className="time-display">
                                <p className="time">
                                    {time.minutes} : {time.seconds < 10 ? `0${time.seconds}` : time.seconds}
                                </p>
                            </div>
                        </div>
                        <div className="card-footer text-muted">

                            <div className="timer-button-container row ">
                                <TimerButton buttonAction={startTimer} buttonValue={'Start'} />
                                <TimerButton buttonAction={stopTimer} buttonValue={'Stop'} />
                                <TimerButton buttonAction={resetTimer} buttonValue={'Reset'} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Timer;

