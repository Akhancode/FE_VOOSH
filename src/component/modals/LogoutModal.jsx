import React from "react";

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
    if (!isOpen) return null; // Only render if modal is open

    return (
        <div className="fixed inset-0  flex items-center justify-center z-50">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-gray-800 opacity-50" onClick={onClose}></div>

            {/* Modal Content */}
            <div className="bg-white rounded-lg shadow-lg w-80 p-6 relative z-10">
                <h2 className="text-lg font-semibold text-gray-800">Confirm Logout</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Are you sure you want to log out?
                </p>

                {/* Buttons */}
                <div className="mt-4 flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onLogout}
                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogoutModal;
