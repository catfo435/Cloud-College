//@ts-ignore
const CourseList = ({ courses }) => {
  return (
    <div className="flex flex-col gap-4 p-4 h-[600px] w-full overflow-scroll">
      {//@ts-ignore
      courses.map((course, index) => (
        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
          <p className="text-gray-700 mb-2">{course.courseId}</p>
          <p className="text-gray-500">Instructor(s): {//@ts-ignore
          (course.instructors.map((instructor) => (instructor.name))).join(",")}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseList;
