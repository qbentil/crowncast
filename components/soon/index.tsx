import { useEffect, useState } from 'react';

import { Button } from '@/components/core'; // Assuming you have this Button component

const ComingSoon: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-10-27T23:59:59'); // Set your coming soon date here
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="w-full md:w-96 px-6 py-8 md:px-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg rounded-md md:mx-20 mx-auto md:absolute md:bottom-6 md:left-0 fixed inset-x-0 bottom-0 flex flex-col justify-center items-center md:items-start text-white">
        {/* Close Button (Visible only on desktop) */}
        <p onClick={onClose} className="cursor-pointer absolute top-2 right-2 text-white bg-red-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-800 transition">
          &#10005;
        </p>

        <h2 className="text-3xl font-extrabold text-center text-white mb-4 animate-bounce">
          Coming Soon!
        </h2>

        <p className="text-lg font-medium mb-6 text-center">
          We&apos;re launching something exciting! Stay tuned.
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-around w-full text-center text-white space-x-4 mb-4">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold">{timeLeft.days}</span>
            <span className="text-sm uppercase">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold">{timeLeft.hours}</span>
            <span className="text-sm uppercase">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold">{timeLeft.minutes}</span>
            <span className="text-sm uppercase">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-5xl font-bold">{timeLeft.seconds}</span>
            <span className="text-sm uppercase">Seconds</span>
          </div>
        </div>

        {/* Call-to-action Button */}
        <Button
          text="Thank you"
          className="bg-white text-primary font-bold w-full py-2 rounded-lg shadow-md hover:bg-gray-100 transition-all"
        />
      </div>
    </div>
  );
};

export default ComingSoon;
