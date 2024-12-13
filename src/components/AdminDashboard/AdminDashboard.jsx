import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaBook, FaUsers, FaPlus, FaCog, FaSignOutAlt } from 'react-icons/fa';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 bg-purple-700 text-white p-6">
                <Link to="/">                <div className="text-2xl font-bold mb-6 text-center">Japan Learn</div>
                </Link>
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 bg-gray-50 p-6">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;
