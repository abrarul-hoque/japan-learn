import React from 'react';
import { FaBook, FaUsers } from 'react-icons/fa';

const AdminHome = () => {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-gray-800">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {/* Total Lessons */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700">Total Lessons</h2>
                        <p className="text-4xl font-bold text-purple-700">25</p>
                    </div>
                    <div className="text-purple-700 text-6xl">
                        <FaBook />
                    </div>
                </div>

                {/* Total Vocabulary */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700">Total Vocabulary</h2>
                        <p className="text-4xl font-bold text-purple-700">120</p>
                    </div>
                    <div className="text-purple-700 text-6xl">
                        <FaBook />
                    </div>
                </div>

                {/* Total Users */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
                        <p className="text-4xl font-bold text-purple-700">100</p>
                    </div>
                    <div className="text-purple-700 text-6xl">
                        <FaUsers />
                    </div>
                </div>
            </div>

            {/* Recent Activity Section (optional) */}
            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <ul>
                        <li className="flex justify-between py-2 border-b border-gray-300">
                            <span className="text-gray-700">Lesson Added: "Introduction to Hiragana"</span>
                            <span className="text-sm text-gray-500">1 hour ago</span>
                        </li>
                        <li className="flex justify-between py-2 border-b border-gray-300">
                            <span className="text-gray-700">New User Registered: John Doe</span>
                            <span className="text-sm text-gray-500">2 hours ago</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;