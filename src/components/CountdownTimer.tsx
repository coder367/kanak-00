
import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    let launchDate = localStorage.getItem('launchDate');
    if (!launchDate) {
      const date = new Date();
      date.setDate(date.getDate() + 60);
      localStorage.setItem('launchDate', date.toISOString());
      launchDate = date.toISOString();
    }

    const difference = new Date(launchDate).getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBoxStyle = "bg-[#BC1444]/80 backdrop-blur-sm rounded-lg p-2.5 sm:p-4 md:p-5 flex flex-col items-center justify-center min-w-[65px] sm:min-w-[85px] md:min-w-[90px] shadow-lg";
  const numberStyle = "text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif-display";
  const labelStyle = "text-xs sm:text-sm text-white/90 uppercase tracking-wider font-serif-display mt-1 sm:mt-2";

  return (
    <div className="flex gap-2.5 sm:gap-4 md:gap-5 justify-between w-full max-w-[290px] sm:max-w-[380px] md:max-w-[400px] mx-auto">
      <div className={timeBoxStyle}>
        <span className={numberStyle}>{String(timeLeft.days).padStart(2, '0')}</span>
        <span className={labelStyle}>Days</span>
      </div>
      <div className={timeBoxStyle}>
        <span className={numberStyle}>{String(timeLeft.hours).padStart(2, '0')}</span>
        <span className={labelStyle}>Hours</span>
      </div>
      <div className={timeBoxStyle}>
        <span className={numberStyle}>{String(timeLeft.minutes).padStart(2, '0')}</span>
        <span className={labelStyle}>Minutes</span>
      </div>
      <div className={timeBoxStyle}>
        <span className={numberStyle}>{String(timeLeft.seconds).padStart(2, '0')}</span>
        <span className={labelStyle}>Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
