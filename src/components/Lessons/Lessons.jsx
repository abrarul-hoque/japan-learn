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
                            <Link to={`/lesson/${lesson?.lessonNo}`}
                                className="bg-purple-800 text-white px-3 py-1 rounded-md hover:bg-purple-900"
                            >
                                View Vocabulary
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Vocabulary Modal */}
            {/* {selectedLesson && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
                        <h2 className="text-xl font-bold mb-4">{selectedLesson.title}</h2>
                        <button
                            onClick={() => setSelectedLesson(null)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        >
                            ✕
                        </button>
                        <ul className="space-y-3">
                            {selectedLesson.vocabulary.map((vocab, index) => (
                                <li
                                    key={index}
                                    className="p-3 border rounded-lg shadow-sm hover:shadow-md"
                                >
                                    <p>
                                        <strong>Word:</strong> {vocab.word}
                                    </p>
                                    <p>
                                        <strong>Pronunciation:</strong> {vocab.pronunciation}
                                    </p>
                                    <p>
                                        <strong>Meaning:</strong> {vocab.meaning}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default Lessons;
