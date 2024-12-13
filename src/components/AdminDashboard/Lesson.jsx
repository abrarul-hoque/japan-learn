import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider'; // Assuming AuthContext provides user info
import Swal from 'sweetalert2';
import { toast, Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Lesson = () => {
    const { user } = useContext(AuthContext); // Assuming the user context provides user info
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    useEffect(() => {

        const fetchLessons = async () => {
            try {
                const response = await axiosPublic.get('/lessons');
                setLessons(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching lessons:', error);
                toast.error('Error fetching lessons. Please try again later.', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                });
                setLoading(false);
            }
        };

        fetchLessons();
    }, [user]);

    console.log(lessons)
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ToastContainer />
            <h2 className="text-2xl font-bold text-center mb-4">Lesson List</h2>
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border p-2">Lesson Name</th>
                        <th className="border p-2">Lesson Number</th>
                        <th className="border p-2">Vocabulary Count</th>
                        <th className="border p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {lessons?.map((lesson) => (
                        <tr key={lesson._id} >
                            <td className="border p-2">{lesson?.lessonName}</td>
                            <td className="border p-2 text-center">{lesson?.lessonNo}</td>
                            <td className="border p-2 text-center">{lesson?.vocabulary.length}</td>
                            <td className="border p-2 text-center"><button>...</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Lesson;
