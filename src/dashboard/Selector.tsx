import React, { useState } from 'react';
import StudentDashboardPage from './StudentDashboardPage';
import InstructorDashboardPage from './InstructorDashboardPage';

const DashboardMainPage: React.FC = () => {
  const [isStudent, setIsStudent] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-transform duration-300 ease-in-out">
        {isStudent ? (
          <StudentDashboardPage />
        ) : (
          <InstructorDashboardPage />
        )}
        <div className="mt-4 text-center">
          <button
            className="text-blue-500 underline"
            onClick={() => setIsStudent(prevState => !prevState)}
          >
            Switch to {isStudent ? 'Instructor' : 'Student'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainPage;
