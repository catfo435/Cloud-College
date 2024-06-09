import ImageDropdown from "../dashboard/ImageDropDown";

const CourseNavBar = ({course} : {course : any}) => {
    
    return (
        <div className="navBar flex justify-center items-center w-screen h-16 shadow-lg bg-blue-200">
            <div className="contentContainer relative flex justify-center items-center1 w-full mx-1 h-16">
                <div className="flex justify-center items-center absolute top-0 left-0">
                <button onClick={() => {window.location.href = "/dashboard"}}>
                <div className="flex justify-center items-center logo ml-5 my-2">
                    <img className="w-12 h-12 rounded-full mr-2" src="/logo.png" />
                </div>
                </button>
                <div className="flex justify-end items-center w-fit h-full text-blue-500">
                    <button onClick={() => {window.location.href = "/dashboard"}}><span className="ml-4">Back to My Courses</span></button>
                </div>
                </div>
                <div className="flex justify-center items-center w-fit h-16 text-gray-600 text-3xl">{course.courseId} : {course.name}</div>
                <div className="absolute flex justify-end items-center w-[60%] h-full right-0 text-blue-500">
                    <ImageDropdown />
                </div>
            </div>
        </div>
    );
}

export default CourseNavBar;