import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage: React.FC = () => {
  const [isStudent, setIsStudent] = useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberRegex = /^[1-9]\d{9}$/;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(emailRegex.test(newEmail));
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newPhoneNumber = event.target.value;
    setPhoneNumber(newPhoneNumber);
    setIsValidPhoneNumber(phoneNumberRegex.test(newPhoneNumber));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transition-transform duration-300 ease-in-out">
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsStudent(true)}
            className={`px-4 py-2 rounded-l-lg transition-colors duration-300 ${isStudent ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Student
          </button>
          <button
            onClick={() => setIsStudent(false)}
            className={`px-4 py-2 rounded-r-lg transition-colors duration-300 ${!isStudent ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Instructor
          </button>
        </div>

        <h2 className="text-2xl font-bold text-center mb-8">
          {isStudent ? 'Student Sign Up' : 'Instructor Sign Up'}
        </h2>
        
        <form className="space-y-4">
        <div>
            <label className="flex text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              className={`mt-1 flex w-full px-3 py-2 border ${isValidEmail ? 'border-gray-300' : 'border-red-500'} rounded-md shadow-sm transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            <p className={`text-sm text-red-500 ${isValidEmail ? 'hidden' : 'flex'}`}>Please enter a valid email address.</p>
          </div>
          <div>
            <label className="flex text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 flex w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="flex text-sm font-medium text-gray-700">Institute ID</label>
            <input
              type="text"
              className="mt-1 flex w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="flex text-sm font-medium text-gray-700">Profile Picture</label>
            <input
              type="file"
              className="mt-1 flex w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-transform duration-200 ease-in-out transform hover:scale-105"
            />
          </div>
          {isStudent && (
            <>
              <div>
                <label className="flex text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className={`mt-1 flex w-full px-3 py-2 border ${isValidPhoneNumber ? 'border-gray-300' : 'border-red-500'} rounded-md shadow-sm transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                />
                <p className={`text-sm text-red-500 ${isValidPhoneNumber ? 'hidden' : 'flex'}`}>Please enter a valid phone number.</p>
              </div>
              <div>
                <label className="flex text-sm font-medium text-gray-700">College</label>
                <input
                  type="text"
                  className="mt-1 flex w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </>
          )}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-transform duration-200 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p>Already Registered? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
