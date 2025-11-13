import React, { use, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Edit3, Mail } from "lucide-react";
import avater from "/avater.png";

const MyProfile = () => {
    const {
        user,
        updateUserProfile,
        setUser,
        setLoading,
        notifySuccess,
        notifyError,
    } = use(AuthContext);
    const [isHidden, setHidden] = useState(true);
    const { displayName, photoURL, email } = user;
    // console.log(user);

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value || user?.displayName;
        const photoUrl = e.target.image.value || user?.photoURL;

        if (name === user?.displayName && photoUrl === user?.photoURL) return;

        updateUserProfile({ displayName: name, photoURL: photoUrl })
            .then(() => {
                setUser({ ...user, displayName: name, photoURL: photoUrl });
                notifySuccess("Profile update uccessfully");
                e.target.reset();
            })
            .catch((er) => {
                notifyError(er.message);
            });
        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center px-6 py-10 transition-all duration-300">
            <div className=" shadow-2xl rounded-2xl">
                <div className="w-full max-w-3xl bg-base-100 border border-base-300 rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-8 ">
                    {/* Profile Image */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg ring-4 ring-secondary/20">
                            <img
                                src={photoURL || avater}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = avater;
                                }}
                                alt={displayName || "User"}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-base-content mb-2">
                            {displayName || "Guest User"}
                        </h2>

                        <div className="flex items-center gap-2 text-base-content/70 mb-4">
                            <Mail size={18} />
                            <span>{email || "No email available"}</span>
                        </div>

                        <p className="text-base-content/80 leading-relaxed mb-6">
                            Manage your profile information, photo, and personal
                            details securely with TravelEase.
                        </p>

                        <button
                            onClick={() => {
                                setHidden(!isHidden);
                            }}
                            className="flex items-center justify-center gap-2 bg-primary text-base-100 px-6 py-3 rounded-xl font-semibold shadow-md w-fit"
                        >
                            <Edit3 size={18} />
                            Update Profile
                        </button>
                    </div>
                </div>
                <form
                    onSubmit={handleUpdate}
                    className={`px-[10%] py-5 grid gap-3 ${
                        isHidden ? "hidden" : ""
                    }`}
                >
                    {/* Vehicle Name */}
                    <label className=" block">
                        <p className="text-base-content text-base font-medium  pb-2">
                            New Name
                        </p>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter new name"
                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                        />
                    </label>

                    {/* Cover Image URL */}
                    <label className="min-w-40 block">
                        <p className="text-base-content text-base font-medium  pb-2">
                            Image URL
                        </p>
                        <input
                            type="url"
                            name="image"
                            placeholder="Enter image URL"
                            className="input input-bordered w-full bg-base-100 text-base-content placeholder-base-content/70"
                        />
                    </label>
                    <button
                        type="submit"
                        className="btn btn-primary text-primary-content tracking-[0.015em] w-full mt-4"
                    >
                        <span className="truncate">Submit</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default MyProfile;
