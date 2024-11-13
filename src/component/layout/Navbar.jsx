import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Squares2X2Icon, PlusIcon, UserCircleIcon, CalendarIcon, ArrowLeftIcon, PencilIcon, PowerIcon } from '@heroicons/react/24/outline';
import LogoutModal from '../modals/LogoutModal';
import { MyContext } from '../context/modelContext';
import TaskModal from '../modals/TaskDetailsModal';
// import LogoutModal from '../modal/LogoutModal';


const Navbar = () => {
  const navigate = useNavigate()
  const gotoAddPage = () => {
    // navigate('/habit')
  }


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const { user } = useContext(MyContext);

  const handleLogout = () => {
    // Perform logout actions here
    setIsModalOpen(false);
    localStorage.removeItem("accessToken");
    navigate('/login')
  };
  const logout = () => {
    setIsModalOpen(true); // Close the modal after logging out

  }
  const openUserProfile = () => {
    setIsUserModalOpen(true)

  }
  const redirectToRegister = () => {
    navigate('/register')
  }
  const redirectToLogin = () => {
    navigate('/login')
  }
  const location = useLocation()

  const currentPath = location.pathname;
  if (currentPath !== "/" && !currentPath.startsWith("/login") && !currentPath.startsWith("/register")) {
    return
  }

  let screenName = <h1 className="text-2xl font-normal capitalize "></h1>
  //Home
  let LeftDiv = <div className='flex text-2xl justify-center items-center font-[300] gap-2 text-gray-800 cursor-pointer active:scale-90 select-none ' >
    <CalendarIcon strokeWidth={3} className="w-6 h-6 text-white " fill='#ffffff' />
  </div>
  let RightDiv = <div className="flex items-center space-x-4">
    {user?.avatar ? <img src={user.avatar} className='w-9 h-9 rounded-3xl active:scale-75' alt="" onClick={ openUserProfile} />
      : <UserCircleIcon strokeWidth={1.5} className="w-9 h-9 active:scale-75 text-white" />}
    <button
      onClick={logout}
      className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition"
    >
      Logout
    </button>
  </div>

  if (currentPath.startsWith("/login") || currentPath.startsWith("/register")) {
    let selectedCss = "px-4 py-2 text-blue-500 bg-white rounded hover:bg-blue-200 transition"
    RightDiv = <div className="flex items-center space-x-4">

      <button
        onClick={redirectToLogin}
        className={currentPath.startsWith("/login") ? selectedCss : "px-4 py-2 text-white  rounded hover:bg-blue-400 transition"}
      >
        Login
      </button>
      <button
        onClick={redirectToRegister}
        // className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transition"
        className={currentPath.startsWith("/register") ? selectedCss : "px-4 py-2 text-white hover:bg-blue-400 transition"}
      >
        Register
      </button>
    </div>
  }



  return (

    <nav className=" w-full flex items-center justify-between px-4 py-5 border-b  min-h-20 max-h-28 bg-[#3273f5]">
      <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogout={handleLogout}
      />
      <TaskModal
        item={user} type={"userProfile"}
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
      />

      {/* Left Icon */}
      {LeftDiv}

      {/* Title */}
      {screenName}

      {/* Right Icons */}
      {RightDiv}
    </nav>
  )
}

export default Navbar