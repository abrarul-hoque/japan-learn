// import React, { useContext } from 'react';
// import { NavLink } from 'react-router-dom';
// import './Header.css';
// import { AuthContext } from '../AuthProvider/AuthProvider';
// import { Tooltip } from 'react-tooltip';
// import Swal from 'sweetalert2';

// const Header = () => {
//     const { user, logOut, loading } = useContext(AuthContext);
//     // console.log(user)

//     const menus = [
//         <>
//             <li><NavLink to="/" className="navlink ml-1">Lessons</NavLink></li>
//             <li><NavLink to="/tutorials" className="navlink ml-1">Tutorials</NavLink></li>
//         </>
//     ];


//     const handleSignOut = () => {
//         logOut()
//             .then(() => {
//                 Swal.fire({
//                     title: "Success",
//                     text: "Log Out Successful!",
//                     icon: "success",
//                     timer: 1500,
//                 });
//             })
//             .catch((err) => {
//                 console.error("Logout Error:", err);
//                 Swal.fire({
//                     title: "Error",
//                     text: "Logout failed. Please try again.",
//                     icon: "error",
//                     timer: 1500,
//                 });
//             });
//     };

//     return (
//         <div className='max-w-7xl mx-auto'>
//             <div className="navbar bg-base-100">
//                 <div className="navbar-start">
//                     <div className="dropdown">
//                         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-5 w-5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor">
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M4 6h16M4 12h8m-8 6h16" />
//                             </svg>
//                         </div>
//                         <ul
//                             tabIndex={0}
//                             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//                             {menus}
//                         </ul>
//                     </div>
//                     <a className="btn btn-ghost text-xl text-purple-800 font-bold">日本語 Learn</a>
//                 </div>
//                 <div className="navbar-center hidden lg:flex">
//                     <ul className="menu menu-horizontal px-1">
//                         {menus}
//                     </ul>
//                 </div>
//                 <div className="navbar-end">
//                     {
//                         user ?
//                             <div>
//                                 <a id="clickable">
//                                     <div className='w-10 h-10'>
//                                         <img className='rounded-full w-16 h-10 mr-2 bg-white p-1 border border-red-400' src={user.photo || "https://i.ibb.co/XX4DwkF/default-user.webps"} alt="" />
//                                     </div>
//                                 </a>
//                                 <Tooltip className='z-9999 rounded-xl bg-purple-800 text-white' anchorSelect="#clickable" clickable>
//                                     <div className='flex flex-col text-center'>
//                                         <p className=' text-[#ff9123] font-bold text-base p-3 rounded-xl'>{user.name}</p>
//                                         <p className='text-warning my-4 font-semibold text-base'>Logged in as: {user?.role === "user" ? "User" : "Admin"} </p>
//                                         {/* {isAdmin ? <button className='btn btn-primary mb-2'><NavLink to="/dashboard/adminHome">Dashboard</NavLink></button> : isSurveyor ? <button className='btn btn-primary mb-2'><NavLink to="/dashboard/surveyor/surveyorHome">Dashboard</NavLink></button> : user ? <button className='btn btn-primary mb-2'><NavLink to="/dashboard/userHome">Dashboard</NavLink></button> : ""} */}
//                                         <button onClick={handleSignOut} className='mb-3 btn bg-purple-800 text-white p-2 rounded-xl hover:bg-purple-900'>Logout</button>

//                                     </div>
//                                 </Tooltip>
//                             </div>
//                             :
//                             <NavLink to="/login" className="btn bg-purple-800 text-white hover:bg-purple-900">Login</NavLink>

//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;


import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    // Define the menu items with unique keys for each child
    const menus = [
        <li key="lessons">
            <NavLink to="/" className="navlink ml-1">Lessons</NavLink>
        </li>,
        <li key="tutorials">
            <NavLink to="/tutorials" className="navlink ml-1">Tutorials</NavLink>
        </li>
    ];

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Success",
                    text: "Log Out Successful!",
                    icon: "success",
                    timer: 1500,
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
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menus}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-purple-800 font-bold">日本語 Learn</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menus}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div>
                                <a id="clickable">
                                    <div className='w-10 h-10'>
                                        <img className='rounded-full w-16 h-10 mr-2 bg-white p-1 border border-red-400' src={user.photo || "https://i.ibb.co/XX4DwkF/default-user.webps"} alt="" />
                                    </div>
                                </a>
                                <Tooltip className='z-9999 rounded-xl bg-purple-800 text-white' anchorSelect="#clickable" clickable>
                                    <div className='flex flex-col text-center'>
                                        <p className=' text-[#ff9123] font-bold text-base p-3 rounded-xl'>{user.name}</p>
                                        <p className='text-warning my-4 font-semibold text-base'>Logged in as: {user?.role === "user" ? "User" : "Admin"} </p>
                                        <button onClick={handleSignOut} className='mb-3 btn bg-purple-800 text-white p-2 rounded-xl hover:bg-purple-900'>Logout</button>
                                    </div>
                                </Tooltip>
                            </div>
                            :
                            <NavLink to="/login" className="btn bg-purple-800 text-white hover:bg-purple-900">Login</NavLink>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
