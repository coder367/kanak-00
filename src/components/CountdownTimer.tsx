
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface LaunchConfig {
  id: number;
  launch_date: string;
  created_at: string;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Fetch the launch date from Supabase
  const { data: launchConfig } = useQuery({
    queryKey: ['launchDate'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('launch_config')
        .select('*')
        .maybeSingle();
      
      if (error) {
        console.error('Error fetching launch date:', error);
        throw error;
      }
      
      return data as LaunchConfig;
    }
  });

  const calculateTimeLeft = (launchDate: string): TimeLeft => {
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

  useEffect(() => {
    if (!launchConfig?.launch_date) return;

    // Initial calculation
    setTimeLeft(calculateTimeLeft(launchConfig.launch_date));

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(launchConfig.launch_date));
    }, 1000);

    return () => clearInterval(timer);
  }, [launchConfig?.launch_date]);

  const timeBoxStyle = "bg-[#BC1444]/80 backdrop-blur-sm rounded-lg p-2.5 sm:p-4 md:p-5 flex flex-col items-center justify-center min-w-[65px] sm:min-w-[85px] md:min-w-[90px] shadow-lg";
  const numberStyle = "text-2xl sm:text-3xl md:text-4xl font-bold text-white font-serif-display";
  const labelStyle = "text-xs sm:text-sm text-white/90 uppercase tracking-wider font-serif-display mt-1 sm:mt-2";

  if (!launchConfig?.launch_date) {
    return <div className="text-white text-center">Loading...</div>;
  }

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

