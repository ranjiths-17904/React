// import React from 'react';
import Navbar from './Component/Navbar';
import ActivityCard from './Component/ActivityChart';
import ProgressCard from './Component/ProgressStats';
import CourseCard from './Component/CourseCard';
import ScheduleCard from './Component/ScheduleCard';

const App = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
        <ActivityCard />
        <ProgressCard />
        <CourseCard />
        <ScheduleCard />
      </div>
    </div>
  );
};

export default App;
