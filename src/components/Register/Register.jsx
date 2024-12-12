import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

// Replace with your actual image hosting API key from imgbb
const imageHostingKey = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const imageHostingAPI = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { registerUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleRegister = async (data) => {
        setLoading(true);

        try {
            // Upload image to imgbb
            const formData = new FormData();
            formData.append("image", data.image[0]); // Append the image file
            const imageRes = await fetch(imageHostingAPI, {
                method: "POST",
                body: formData,
            });

            const imageData = await imageRes.json();
            if (!imageData.success) {
                throw new Error("Image upload failed");
            }

            const imageUrl = imageData.data.url;

            // Register user with the backend
            await registerUser(data.name, data.email, data.password, imageUrl);

            Swal.fire("Success", "User registered successfully!", "success");
            reset();
            navigate("/");
        } catch (error) {
            console.error("Registration error:", error);
            Swal.fire("Error", "Registration failed. Please try again.", "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Helmet>
                <title>Japan Learn | Register</title>
            </Helmet>
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-6">Register</h1>
                <form onSubmit={handleSubmit(handleRegister)} className="w-full max-w-md">
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="input input-bordered w-full"
                        />
                        {errors.name && <span className="text-red-500">Name is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            className="input input-bordered w-full"
                        />
                        {errors.email && <span className="text-red-500">Email is required</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register("password", { required: true, minLength: 8 })}
                            className="input input-bordered w-full"
                        />
                        {errors.password?.type === "required" && <span className="text-red-500">Password is required</span>}
                        {errors.password?.type === "minLength" && <span className="text-red-500">Password must be at least 8 characters</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Photo</label>
                        <input
                            type="file"
                            {...register("image", { required: true })}
                            className="file-input file-input-bordered w-full"
                        />
                        {errors.image && <span className="text-red-500">Photo is required</span>}
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-full"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
