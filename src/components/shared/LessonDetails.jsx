import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Confetti from 'react-confetti';
import loader from '../../assets/loader.svg';

const LessonDetails = () => {
    const lessonData = useLoaderData();
    const navigate = useNavigate();
    const { vocabulary = [] } = lessonData;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);

    if (!vocabulary.length) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <img src={loader} alt="" />
            </div>
        );
    }

    const currentVocabulary = vocabulary[currentIndex];

    const nextVocabulary = () => {
        if (currentIndex < vocabulary.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevVocabulary = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const completeLesson = () => {
        setShowConfetti(true);
        setTimeout(() => {
            setShowConfetti(false);
            navigate('/lessons'); // Redirect to Lessons page
        }, 3000); // Confetti duration
    };

    // Pronounce function
    const pronounceWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'ja-JP'; // Set language to Japanese
        speechSynthesis.speak(utterance);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4 relative">
            {showConfetti && <Confetti />}

            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
                <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">
                    {lessonData.lessonName}
                </h1>
                <h2 className="text-xl font-semibold text-purple-900 mb-4 text-center underline">
                    Vocabulary Details
                </h2>

                {/* Vocabulary Card */}
                <div
                    className="bg-gray-100 rounded-lg shadow-md p-6 mb-6 cursor-pointer"
                    onClick={() => pronounceWord(currentVocabulary.word)}
                >
                    <p className="text-lg text-gray-800 mb-2">
                        <strong className="font-bold text-purple-700">Word:</strong> {currentVocabulary.word}
                    </p>
                    <p className="text-lg text-gray-800 mb-2">
                        <strong className="font-bold text-purple-700">Pronunciation:</strong> {currentVocabulary.pronunciation}
                    </p>
                    <p className="text-lg text-gray-800 mb-2">
                        <strong className="font-bold text-purple-800">Meaning:</strong> {currentVocabulary.meaning}
                    </p>
                    <p className="text-lg text-gray-800">
                        <strong className="font-bold text-purple-700">When to Say:</strong> {currentVocabulary.whenToSay}
                    </p>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mb-6">
                    <button
                        onClick={prevVocabulary}
                        disabled={currentIndex === 0}
                        className="flex items-center bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        <FaArrowLeft className="mr-2" />
                        Previous
                    </button>
                    <span className="text-lg text-gray-700">
                        Vocabulary {currentIndex + 1} of {vocabulary.length}
                    </span>
                    <button
                        onClick={nextVocabulary}
                        disabled={currentIndex === vocabulary.length - 1}
                        className="flex items-center bg-purple-700 text-white px-4 py-2 rounded-md hover:bg-purple-800 disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                        Next
                        <FaArrowRight className="ml-2" />
                    </button>
                </div>

                {/* Complete Button */}
                {currentIndex === vocabulary.length - 1 && (
                    <button
                        onClick={completeLesson}
                        className="w-full bg-purple-800 text-white text-lg font-semibold py-3 rounded-md hover:bg-purple-900"
                    >
                        Complete
                    </button>
                )}
            </div>
        </div>
    );
};

export default LessonDetails;
