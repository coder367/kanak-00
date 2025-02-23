
import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    // Get the launch date from localStorage or set it if not exists
    let launchDate = localStorage.getItem('launchDate');
    if (!launchDate) {
      const date = new Date();
      date.setDate(date.getDate() + 60); // Set launch date 60 days from now
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

  const timeBoxStyle = "bg-black/80 backdrop-blur-sm rounded-lg p-3 flex flex-col items-center justify-center min-w-[70px] md:min-w-[80px]";
  const numberStyle = "text-xl md:text-2xl lg:text-3xl font-bold text-white";
  const labelStyle = "text-xs md:text-sm text-white/80 uppercase tracking-wider";

  return (
    <div className="flex gap-2 md:gap-4">
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
