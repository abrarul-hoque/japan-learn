import React, { useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AddLesson = () => {
    const [lessonName, setLessonName] = useState("");
    const [lessonNumber, setLessonNumber] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const axiosPublic = useAxiosPublic();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const trimmedLessonName = lessonName.trim();
        const trimmedLessonNumber = lessonNumber.trim();

        // Input validation
        if (!trimmedLessonName || !trimmedLessonNumber) {
            setMessage("Please fill out all fields.");
            setIsSuccess(false);
            return;
        }

        if (isNaN(Number(trimmedLessonNumber)) || Number(trimmedLessonNumber) <= 0) {
            setMessage("Lesson number must be a positive number.");
            setIsSuccess(false);
            return;
        }

        try {
            // Add token to the request headers
            const token = localStorage.getItem("token"); // Adjust token storage method if necessary
            const response = await axiosPublic.post(
                "/lessons",
                {
                    lessonName: trimmedLessonName,
                    lessonNumber: Number(trimmedLessonNumber),
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 201) {
                setMessage("Lesson added successfully!");
                setIsSuccess(true);
                setLessonName("");
                setLessonNumber("");
            } else {
                setMessage("Failed to add lesson. Please try again.");
                setIsSuccess(false);
            }
        } catch (error) {
            console.error("Error adding lesson:", error);
            const status = error.response?.status;

            // Handle specific error messages
            if (status === 400) {
                setMessage(error.response?.data?.message || "Lesson number already exists.");
            } else if (status === 401) {
                setMessage("Unauthorized. Please log in again.");
            } else if (status === 500) {
                setMessage("Server error. Please try again later.");
            } else {
                setMessage("An unexpected error occurred. Please try again.");
            }

            setIsSuccess(false);
        }
    };

    return (
        <div className="p-6 max-w-lg mx-auto bg-white rounded shadow">
            <h1 className="text-xl font-bold mb-4">Add New Lesson</h1>
            {message && (
                <p className={`text-sm mb-4 ${isSuccess ? "text-green-500" : "text-red-500"}`}>
                    {message}
                </p>
            )}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="lessonName" className="block font-medium mb-2">
                        Lesson Name
                    </label>
                    <input
                        id="lessonName"
                        type="text"
                        className="w-full border border-gray-300 rounded p-2"
                        value={lessonName}
                        onChange={(e) => setLessonName(e.target.value)}
                        placeholder="Enter lesson name (e.g., 'Basic Greetings')"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="lessonNumber" className="block font-medium mb-2">
                        Lesson Number
                    </label>
                    <input
                        id="lessonNumber"
                        type="number"
                        className="w-full border border-gray-300 rounded p-2"
                        value={lessonNumber}
                        onChange={(e) => setLessonNumber(e.target.value)}
                        placeholder="Enter lesson number (e.g., 1, 2, 3)"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-700 text-white font-bold py-2 px-4 rounded hover:bg-purple-800"
                >
                    Add Lesson
                </button>
            </form>
        </div>
    );
};

export default AddLesson;
