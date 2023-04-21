  import React, { useState, useEffect } from 'react';
import moment from 'moment'; // import moment library for date/time manipulation

export default function Timer() {
  const [endTime, setEndTime] = useState(moment('2023-07-27T00:00:00')); // set the end time for your event

  // calculate the remaining time until the event ends
  const [remainingTime, setRemainingTime] = useState(moment.duration(endTime.diff(moment())));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(moment.duration(endTime.diff(moment())));
    }, 1000);
    return () => clearInterval(intervalId); // cleanup function to stop the timer when the component unmounts
  }, []);

  return (
   <div className="  pt-4 pb-8  rounded-xl">
     <div className="flex justify-center space-x-4">
       <div className="bg-gray-100 backdrop-blur-lg backdrop-filter bg-opacity-40 rounded-md p-4 shadow-md">
         <div className="text-3xl font-bold text-white ">{remainingTime.asDays().toPrecision(2)}</div>
         <div className="text-sm uppercase text-gray-400">Days</div>
       </div>
       <div className="bg-gray-100 backdrop-blur-lg backdrop-filter bg-opacity-40 rounded-md p-4 shadow-md">
         <div className="text-3xl font-bold text-white">{remainingTime.hours()}</div>
         <div className="text-sm uppercase text-gray-400">Hours</div>
       </div>
       <div className="bg-gray-100 backdrop-blur-lg backdrop-filter bg-opacity-40 rounded-md p-4 shadow-md">
         <div className="text-3xl font-bold text-white">{remainingTime.minutes()}</div>
         <div className="text-sm uppercase text-gray-400">Minutes</div>
       </div>
       <div className="bg-gray-100 backdrop-blur-lg backdrop-filter bg-opacity-40 rounded-md p-4 shadow-md">
         <div className="text-3xl font-bold text-white">{remainingTime.seconds()}</div>
         <div className="text-sm uppercase text-gray-400">Seconds</div>
       </div>
     </div>
   </div>
   
  );
}
