import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Squares2X2Icon, PlusIcon, BookmarkIcon, ArrowLeftIcon, PencilIcon, PowerIcon } from '@heroicons/react/24/outline';
// import LogoutModal from '../modal/LogoutModal';


const Navbar = () => {
  const navigate = useNavigate()
  const gotoAddPage = () => {
    // navigate('/habit')
  }

  const redirectToHome = () => {
    navigate('/')
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    // Perform logout actions here

    localStorage.removeItem("accessToken");
    navigate('/login')
  };
  const logout = () => {
    setIsModalOpen(true); // Close the modal after logging out
    console.log("Logged out");
  }
  const redirectToDashBoard = () => {
    // navigate('/dashboard')

  }
  const { habitId } = useParams();;
  const redirectToEdit = (habitId) => {
    navigate(`/habit/${habitId}`)

  }
  const location = useLocation()

  const currentPath = location.pathname;

  let screenName = <h1 className="text-2xl font-normal capitalize ">Home</h1>
  //Home
  let LeftDiv = <div className='flex text-2xl justify-center items-center font-[300] gap-2 text-gray-800 cursor-pointer active:scale-90 select-none ' onClick={redirectToDashBoard}>
    <Squares2X2Icon strokeWidth={1.8}  className="w-6 h-6 text-gray-800 " /> Dashboard
  </div>
  let RightDiv = <div className="flex items-center space-x-4">
    <PlusIcon strokeWidth={1.5} onClick={gotoAddPage} className="w-7 h-7 active:scale-75 text-gray-700" />
    <PowerIcon onClick={logout} strokeWidth={1.5} className="w-7 h-7 active:scale-75 text-gray-700" />
  </div>

  //habit - create/edit
  if (currentPath.startsWith('/habit')) {
    screenName = <h2 className="w-full ml-1 py-3 text-3xl font-sans text-gray-500 flex items-center justify-center">
      Create <span className='ml-1 text-black font-[500]'>Habit</span>
    </h2>
    LeftDiv = <ArrowLeftIcon strokeWidth={2} onClick={redirectToHome} className="w-6 h-6 active:scale-75 text-gray-700" />
    RightDiv = <div className="flex items-center space-x-4">
      <PlusIcon strokeWidth={1.5} onClick={gotoAddPage} className="w-7 h-7 active:scale-75 text-gray-700" />
      <PowerIcon onClick={logout} strokeWidth={1.5} className="w-7 h-7 active:scale-75 text-gray-700" />

    </div>
  }
  if (currentPath.startsWith('/habit/')) {
    //edit
    screenName = <h2 className="w-full ml-1 py-3 text-2xl font-sans text-gray-600 flex items-center justify-center">
      Update <span className='ml-1 text-black'>Habit</span>
    </h2>
  }
  if (currentPath.startsWith('/dashboard')) {
    screenName = <h1 className="text-2xl font-normal capitalize ">Dashboard</h1>

    LeftDiv = <div>
      <ArrowLeftIcon strokeWidth={2} onClick={redirectToHome} className="w-6 h-6 active:scale-75 text-gray-700" />
    </div>
    RightDiv = <div className='cursor-pointer  flex items-center justify-end gap-3'>
    </div>
  }
  if (currentPath.startsWith('/progress')) {
    screenName = <h1 className="text-2xl font-normal capitalize ">Progress Details</h1>

    LeftDiv = <div>
      <ArrowLeftIcon onClick={redirectToHome} strokeWidth={2} className="w-6 h-6 active:scale-75 text-gray-700" /> </div>
    RightDiv = <PencilIcon onClick={() => (redirectToEdit(habitId))} strokeWidth={1.5} className='w-6 h-6   flex cursor-pointer  items-center justify-end gap-3' />
  }
  return (

    <nav className=" w-full flex items-center justify-between px-4 py-5 border-b  min-h-20 max-h-28 bg-white">
      {/* <LogoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogout={handleLogout}
      /> */}
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