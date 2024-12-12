import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PostForm = () => {
    const categories = [
        "Icons", "Cabins", "Country Sides", "National Parks", "Farms", "Amazing Pools",
        "Amazing Views", "Rooms", "Tree Houses", "Luxe", "Beach", "Historical Homes", "Mansions",
        "Domes", "Castles", "Lake Front", "Tiny Houses", "Beach Fronts", "Lakes", "Islands",
        "Design", "Off-the-Grid", "Top of the World", "Bed And Breakfasts", "Tropical", "Trending",
        "Top Cities", "Camping", "Desert", "Caves", "Golfing", "A-Frames", "Arctics", "Containers",
        "Earth Homes", "Boats", "Creative Spaces", "Chefs Kitchens", "Skiing", "Play", "New",
        "Surfing", "Houseboats", "Minsus", "Ski In/Out", "Yurts"
    ];

    const notify = (e) => toast(e);

    
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        debugger
        console.log("Form Data:", data);
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/post/create`,data)
        if (response.status === 200 || response.status === 201 ) {
            notify("Post is successfully created")
        } else {
            notify(response.data.message)
        } 
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-4xl mx-auto mt-72 mb-20 p-6 bg-blue-100 rounded-lg shadow-md space-y-6"
        >
            <h1 className="text-2xl font-semibold text-gray-800">Create a New Post</h1>

            <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                    type="text"
                    {...register("title", { required: "Title is required" })}
                    className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                />
                {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                    {...register("description", { required: "Description is required" })}
                    className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                ></textarea>
                {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Price Per Night</label>
                <input
                    type="number"
                    {...register("pricePerNight", { required: "Price per night is required" })}
                    className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                />
                {errors.pricePerNight && <p className="text-sm text-red-500 mt-1">{errors.pricePerNight.message}</p>}
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                    {...register("category", { required: "Category is required" })}
                    className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                >
                    <option value="">Select a category</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                {errors.category && <p className="text-sm text-red-500 mt-1">{errors.category.message}</p>}
            </div>

            <fieldset className="space-y-4">
                <legend className="text-lg font-medium text-gray-900">Property Details</legend>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
                        <input
                            type="number"
                            {...register("propertyDetails.bedrooms", { required: "Bedrooms are required" })}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
                        <input
                            type="number"
                            {...register("propertyDetails.bathrooms", { required: "Bathrooms are required" })}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Guests</label>
                        <input
                            type="number"
                            {...register("propertyDetails.guests", { required: "Guests are required" })}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Beds</label>
                        <input
                            type="number"
                            {...register("propertyDetails.beds", { required: "Beds are required" })}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Kitchen</label>
                        <input
                            type="number"
                            {...register("propertyDetails.kitchen", { required: "kitchen is required" })}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                    </div>
                </div>
            </fieldset>

            <fieldset className="space-y-4">
                <legend className="text-lg font-medium text-gray-900">Address Details</legend>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Pincode</label>
                        <input
                            type="number"
                            {...register("address.pincode", { required: "Pincode is required" })}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                        {errors.address?.pincode && <p className="text-sm text-red-500 mt-1">{errors.address.pincode.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Country</label>
                        <input
                            type="text"
                            {...register("address.country", { required: "Country is required" })}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                        {errors.address?.country && <p className="text-sm text-red-500 mt-1">{errors.address.country.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Street</label>
                        <input
                            type="text"
                            {...register("address.street", { required: "Street is required" })}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                        {errors.address?.street && <p className="text-sm text-red-500 mt-1">{errors.address.street.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">State</label>
                        <input
                            type="text"
                            {...register("address.state", { required: "State is required" })}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                        {errors.address?.state && <p className="text-sm text-red-500 mt-1">{errors.address.state.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Town</label>
                        <input
                            type="text"
                            {...register("address.town", { required: "Town is required" })}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                        {errors.address?.town && <p className="text-sm text-red-500 mt-1">{errors.address.town.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">District</label>
                        <input
                            type="text"
                            {...register("address.district", { required: "District is required" })}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                        {errors.address?.district && <p className="text-sm text-red-500 mt-1">{errors.address.district.message}</p>}
                    </div>
                </div>
            </fieldset>


            <fieldset className="space-y-4">
                <legend className="text-lg font-medium text-gray-900">Available Dates</legend>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Start Date</label>
                        <input
                            type="date"
                            {...register("availableDates.startDate")}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                        {errors.availableDates?.startDate && <p className="text-sm text-red-500 mt-1">{errors.availableDates.startDate.message}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">End Date</label>
                        <input
                            type="date"
                            {...register("availableDates.endDate")}
                            className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                        />
                        {errors.availableDates?.endDate && <p className="text-sm text-red-500 mt-1">{errors.availableDates.endDate.message}</p>}
                    </div>
                </div>
            </fieldset>


            <div>
                <label className="block text-sm font-medium text-gray-700">Images</label>
                <input
                    type="file"
                    {...register("images")}
                    multiple 
                    className="mt-1 block w-full border-gray-300 rounded-full shadow-sm outline-none py-2 px-3 sm:text-sm"
                />
            </div>


            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-full shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Submit
            </button>
            <ToastContainer/>
        </form>
    );
};

export default PostForm;
