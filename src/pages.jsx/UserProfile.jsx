import { useContext, useState } from "react";
import {
  FaUserEdit,
  FaSave,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  // States for editing profile
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "John Doe");
  const [photoURL, setPhotoURL] = useState(
    user?.photoURL || "https://via.placeholder.com/150"
  );

  // Toggle edit mode
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  // Handle update profile logic
  const handleUpdateProfile = () => {
    setIsEditing(false);
    // Save updated profile logic (e.g., send updates to API)
    console.log("Updated Profile:", { name, photoURL });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-360px)]">
      <div className="card w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
        {/* User Image */}
        <div className="flex justify-center">
          <img
            src={photoURL}
            alt="User Profile"
            className="w-32 h-32 rounded-full border-4 border-primary shadow-md object-cover"
          />
        </div>

        {/* User Details */}
        {!isEditing ? (
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
            <p className="text-gray-500 text-sm">{user?.role || "User"}</p>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-600 font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="photoURL"
                className="block text-gray-600 font-medium"
              >
                Photo URL
              </label>
              <input
                id="photoURL"
                type="text"
                className="input input-bordered w-full"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Email, Phone, and Location */}
        <div className="mt-4 space-y-4 flex flex-col items-center ">
          <div className="flex items-center gap-4 text-gray-600">
            <FaEnvelope className="text-primary" />
            <span>{user?.email || "john.doe@example.com"}</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <FaPhone className="text-primary" />
            <span>{user?.phone || "+123 456 7890"}</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <FaMapMarkerAlt className="text-primary" />
            <span>{user?.location || "New York, USA"}</span>
          </div>
        </div>

        {/* Edit/Update Profile Button */}
        <div className="mt-6 flex justify-center">
          {!isEditing ? (
            <button
              onClick={handleEditToggle}
              className="btn btn-primary flex items-center gap-2"
            >
              <FaUserEdit />
              Edit Profile
            </button>
          ) : (
            <button
              onClick={handleUpdateProfile}
              className="btn btn-success flex items-center gap-2"
            >
              <FaSave />
              Update Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
