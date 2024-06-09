import { useState } from 'react';
import StudentDashboardPage from './StudentDashboardPage';
import InstructorDashboardPage from './InstructorDashboardPage';

const Dashboard = () => {
  const [isStudent, setIsStudent] = useState(false);

  return (
    <>
        {isStudent ? (
          <StudentDashboardPage />
        ) : (
          <InstructorDashboardPage />
        )}
    </>
  );
};

export default Dashboard;
