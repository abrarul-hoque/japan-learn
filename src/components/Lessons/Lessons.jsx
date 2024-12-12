import React, { useState } from 'react';
import useLessons from '../hooks/useLessons';
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

const Lessons = () => {
    const [lessons] = useLessons();
    const [selectedLesson, setSelectedLesson] = useState(null);
    console.log(lessons)

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Lessons</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {lessons?.map((lesson) => (
                    <div
                        key={lesson?._id}
                        className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                    >
                        <p className='font-semibold text-center text-base '>Lesson No: {lesson?.lessonNo}</p>
                        <h2 className="text-2xl font-bold mb-2 text-center text-purple-900">{lesson?.lessonName}</h2>
                        <p className="text-gray-600 text-sm mb-4 text-center">{lesson?.description}</p>
                        <p className='text-center'>{lesson?.vocabulary.length} Words</p>

                        <div className="flex items-center justify-center text-gray-700 my-2">
                            <Link to={`/lesson/${lesson?._id}`}
                                className="bg-purple-800 text-white px-3 py-1 rounded-md hover:bg-purple-900"
                            >
                                View Vocabulary
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lessons;
