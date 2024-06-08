import CourseList from './CourseList';

const courses = [
  {
    title: 'Introduction to React',
    description: 'Learn the basics of React, a powerful JavaScript library for building user interfaces.',
    instructor: 'John Doe',
  },
  {
    title: 'Advanced React Patterns',
    description: 'Explore advanced patterns and techniques for building scalable React applications.',
    instructor: 'Jane Smith',
  },
  {
    title: 'React and TypeScript',
    description: 'Learn how to use TypeScript with React for type-safe, scalable applications.',
    instructor: 'Chris Johnson',
  },
  {
    title: 'React and TypeScript',
    description: 'Learn how to use TypeScript with React for type-safe, scalable applications.',
    instructor: 'Chris Johnson',
  },{
    title: 'React and TypeScript',
    description: 'Learn how to use TypeScript with React for type-safe, scalable applications.',
    instructor: 'Chris Johnson',
  },{
    title: 'React and TypeScript',
    description: 'Learn how to use TypeScript with React for type-safe, scalable applications.',
    instructor: 'Chris Johnson',
  },
]

const StudentDashboardPage: React.FC = () => {

  return (
    <div className="flex flex-col items-center grow w-screen">
      <span className='text-4xl text-center font-bold mt-20 mb-10'>Hi John Doe, These are the courses you are taking this semester</span>
      <div className="flex w-[80%] items-center justify-center">
      <CourseList courses={courses} />
      </div>
    </div>
  );
};

export default StudentDashboardPage;
