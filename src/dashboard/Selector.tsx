import { useState } from 'react';
import StudentDashboardPage from './StudentDashboardPage';
import InstructorDashboardPage from './InstructorDashboardPage';
import DashBoardNavBar from './DashBoardNavBar';

const DashboardMainPage = () => {
  const [isStudent, setIsStudent] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-blue-50">
      <DashBoardNavBar />
        {isStudent ? (
          <StudentDashboardPage />
        ) : (
          <InstructorDashboardPage />
        )}
    </div>
  );
};

export default DashboardMainPage;
