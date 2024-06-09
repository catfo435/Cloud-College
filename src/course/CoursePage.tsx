import { useEffect, useState } from "react";
import CourseNavBar from "./CourseNavBar";
import { useParams } from "react-router-dom";
import { AddContentModal } from "./AddContentModal";

const CoursePage = () => {

    
    const[course,setCourse] = useState()
    const [openModal, setOpenModal] = useState(false);
    const [isStudent, setIsStudent] = useState(true);
    const {courseId} = useParams()

    const fetchCourses = () => {
        fetch(import.meta.env.VITE_BACKEND_URL + `/courses/${courseId}`)
        .then((res) => (res.json()).then(setCourse))
        .catch((e) => {
            alert("Error Occured")
            window.location.href = "/dashboard"
            return;
        })
    }

    useEffect(() => {

        setIsStudent(window.localStorage.getItem("userType") === "student")

        fetchCourses()
        
    },[])

    return (
        <>
        {
            course?(
            <div className="flex flex-col w-screen h-screen bg-blue-100">
                <AddContentModal openModal={openModal} setOpenModal={setOpenModal} handleSubmit={fetchCourses} courseId={courseId!}/>
                <CourseNavBar course={course} />
                <div className="flex relative items-center mt-10 ml-5">
                    <span className="font-semibold text-3xl">Course Content</span>
                    <button className="flex justify-center items-center animate-pulse">
                        <div className="w-3 h-3 ml-3 bg-red-600 rounded-full"></div>
                        <span className="ml-2 text-red-600 text-xl">Live </span> 
                    </button>
                    {/* check if live stream exists then put live button */}
                    {isStudent?<button onClick={() => {setOpenModal(true)}}>
                    <div className="flex justify-center items-center absolute right-5 top-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md p-3 w-fit h-10">Add Content</div>
                    </button>:""}
                </div>
                <div className="flex flex-col courseContent mt-5 ml-4 w-screen">
                <div className="flex flex-col p-4 w-[80%] mb-2 h-28">
                    {
                        //@ts-ignore
                        course.content.map((topic,idx) => (
                            <div className="mb-4">
                                <span className="text-2xl ml-2">• {topic.heading}</span>
                                <div className="divider my-2 w-80 h-0.5 bg-gray-400"></div>
                                <div className="ml-2">{topic.description}</div>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        ):""
        } mb-2
        </>
    );
}

export default CoursePage;