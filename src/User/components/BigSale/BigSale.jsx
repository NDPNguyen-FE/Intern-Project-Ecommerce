import React, { useEffect, useRef, useState } from "react";
import "./BigSale.scss";
import Vegetables from "../../../assets/vegettable.png";

function BigSale() {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownTime = new Date("October 27, 2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownTime - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className='sale'>
      <h3 className='sale-title'>big sale to day</h3>
      <p className='sale-sub'>get 30% off your order of store or more...</p>
      <div className='sale-timer'>
        <div className='sale-image'>
          <img src={Vegetables} alt='sale'></img>
        </div>
        <div className='timer-item'>
          <h3>{days}</h3>
          <span>Days</span>
        </div>

        <div className='timer-item'>
          <h3>{hours}</h3>
          <span>Hours</span>
        </div>

        <div className='timer-item'>
          <h3>{minutes}</h3>
          <span>Minutes</span>
        </div>

        <div className='timer-item'>
          <h3>{seconds}</h3>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default BigSale;
