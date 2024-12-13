import React, { useContext } from 'react';
import { FaBook, FaCog, FaHome, FaPlus, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Sidebar = () => {
    const { user, logOut, loading } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Success",
                    text: "Log Out Successful!",
                    icon: "success",
                    timer: 1500,
                }).then(() => {
                    navigate('/login'); // Adjust this path as per your login route
                });

            })
            .catch((err) => {
                console.error("Logout Error:", err);
                Swal.fire({
                    title: "Error",
                    text: "Logout failed. Please try again.",
                    icon: "error",
                    timer: 1500,
                });
            });
    };
    return (
        <div>
            <nav>
                <ul>
                    <li className="mb-4">
                        <Link to="/dashboard" className="flex items-center hover:bg-purple-800 p-2 rounded-md">
                            <FaHome className="mr-3" />
                            Dashboard
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/dashboard/lesson" className="flex items-center hover:bg-purple-800 p-2 rounded-md">
                            <FaBook className="mr-3" />
                            Lessons
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/dashboard/add-lesson" className="flex items-center hover:bg-purple-800 p-2 rounded-md">
                            <FaPlus className="mr-3" />
                            Add Lessons
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/dashboard/add-vocabulary" className="flex items-center hover:bg-purple-800 p-2 rounded-md">
                            <FaPlus className="mr-3" />
                            Add Vocabularies
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/dashboard/manage-users" className="flex items-center hover:bg-purple-800 p-2 rounded-md">
                            <FaUsers className="mr-3" />
                            Manager Users
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/dashboard/lesson-management" className="flex items-center hover:bg-purple-800 p-2 rounded-md">
                            <FaCog className="mr-3" />
                            Lesson Management
                        </Link>
                    </li>
                    <li className="mb-4">
                        <Link to="/dashboard/vocabulary-management" className="flex items-center hover:bg-purple-800 p-2 rounded-md">
                            <FaCog className="mr-3" />
                            Vocabulary Management
                        </Link>
                    </li>
                    <li>
                        <button onClick={handleSignOut} className="flex items-center hover:bg-purple-800 p-2 rounded-md w-full">
                            <FaSignOutAlt className="mr-3" />
                            Log Out
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;