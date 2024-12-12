import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-purple-800 text-white py-8">
            <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {/* Brand Info */}
                <div>
                    <h2 className="text-xl font-bold text-white mb-2">日本語 Learn</h2>
                    <p className="text-sm">
                        Master Japanese vocabulary with ease. Start your language journey today!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/lessons" className="hover:text-white transition-colors">
                                Lessons
                            </a>
                        </li>
                        <li>
                            <a href="/tutorials" className="hover:text-white transition-colors">
                                Tutorials
                            </a>
                        </li>
                        <li>
                            <a href="/profile" className="hover:text-white transition-colors">
                                Profile
                            </a>
                        </li>
                        <li>
                            <a href="/support" className="hover:text-white transition-colors">
                                Support
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <FaFacebook size={24} />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <FaLinkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-gray-800 text-sm">
                &copy; {new Date().getFullYear()} 日本語 Learn. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
