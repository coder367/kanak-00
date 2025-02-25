
import { useEffect, useState } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const launchDate = new Date("2024-03-25").getTime();
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center min-w-[55px] sm:min-w-[70px] md:min-w-[80px]"
        >
          <div className="w-full aspect-square bg-turkish-rose rounded-xl sm:rounded-2xl flex items-center justify-center text-[#FBFBEB] font-serif-display text-2xl sm:text-3xl md:text-4xl">
            {String(value).padStart(2, "0")}
          </div>
          <span className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-disco-dark font-garamond capitalize">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};
