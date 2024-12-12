import React, { useState } from 'react';

const lessonsData = [
    {
        id: 1,
        title: "Basic Greetings",
        description: "Learn how to greet people in Japanese.",
        vocabularyCount: 10,
        thumbnail: "https://via.placeholder.com/150",
        vocabulary: [
            { word: "こんにちは", pronunciation: "Konnichiwa", meaning: "Hello" },
            { word: "おはよう", pronunciation: "Ohayou", meaning: "Good Morning" },
            { word: "こんばんは", pronunciation: "Konbanwa", meaning: "Good Evening" },
        ],
    },
    {
        id: 2,
        title: "Numbers",
        description: "Learn how to count in Japanese.",
        vocabularyCount: 15,
        thumbnail: "https://via.placeholder.com/150",
        vocabulary: [
            { word: "いち", pronunciation: "Ichi", meaning: "One" },
            { word: "に", pronunciation: "Ni", meaning: "Two" },
            { word: "さん", pronunciation: "San", meaning: "Three" },
        ],
    },
    // Add more lessons as needed
];

const Lessons = () => {
    const [selectedLesson, setSelectedLesson] = useState(null);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Lessons</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {lessonsData.map((lesson) => (
                    <div
                        key={lesson.id}
                        className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
                    >
                        <img
                            src={lesson.thumbnail}
                            alt={lesson.title}
                            className="w-full h-32 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-lg font-semibold mb-2">{lesson.title}</h2>
                        <p className="text-gray-600 text-sm mb-4">{lesson.description}</p>
                        <div className="flex items-center justify-between text-gray-700 mb-2">
                            <span>{lesson.vocabularyCount} Words</span>
                            <button
                                onClick={() => setSelectedLesson(lesson)}
                                className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
                            >
                                View Vocabulary
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Vocabulary Modal */}
            {selectedLesson && (
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
            )}
        </div>
    );
};

export default Lessons;
