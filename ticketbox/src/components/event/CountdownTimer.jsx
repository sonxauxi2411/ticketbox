
import  { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CountdownTimer = ({ date_time_start }) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime());

  function getRemainingTime() {
    const now = new Date().getTime();
    const targetTime = new Date(date_time_start).getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    const days = String(
      Math.floor(difference / (1000 * 60 * 60 * 24))
    ).padStart(2, "0");
    const hours = String(
      Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).padStart(2, "0");
    const minutes = String(
      Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    ).padStart(2, "0");
    const seconds = String(
      Math.floor((difference % (1000 * 60)) / 1000)
    ).padStart(2, "0");

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(getRemainingTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [date_time_start]);

  return (
    <>
      <ul className="countdown">
        <li>
          <h2>
            <span className="days">{remainingTime.days} </span>
          </h2>
          <p className="days_text">Days</p>
        </li>
        <li>
          <h2>
            <span className="hours">{remainingTime.hours}</span>
          </h2>
          <p className="hours_text">Hours</p>
        </li>
        <li>
          <h2>
            <span className="minutes">{remainingTime.minutes}</span>
          </h2>
          <p className="minu_text">min</p>
        </li>
        <li>
          <h2>
            <span className="seconds">{remainingTime.seconds}</span>
          </h2>
          <p className="seco_text">sec</p>
        </li>
      </ul>
    </>
  );
};

CountdownTimer.propTypes = {
  date_time_start: PropTypes.string.isRequired,
};

export default CountdownTimer;
