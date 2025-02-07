import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/authContext/AuthContext";
import logo from '../../assets/images.png'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext)

  const navItem = <>
    <NavLink className={({ isActive }) =>
      isActive ? "text-red-500" : ""
    } to='/'>Home</NavLink>
    <NavLink className={({ isActive }) =>
      isActive ? "text-red-500" : ""
    } to='/about'>About</NavLink>
    <NavLink className={({ isActive }) =>
      isActive ? "text-red-500" : ""
    } to='/contact'>Contact</NavLink>
    <NavLink className={({ isActive }) =>
      isActive ? "text-red-500" : ""
    } to='/blog'>Blog</NavLink>
  </>

  const handleLogOut = () => {
    logOut()
  }

  return (
    <nav className="bg-gray-900 text-white p-4 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold flex gap-2 items-center"><img className="w-10 h-10" src={logo} alt="" />jobPortal</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          {navItem}
        </div>

        {/* Register/Login Buttons */}
        <div className="hidden md:flex gap-4 items-center">
          {
            user && <div data-tip={user?.displayName} className="tooltip tooltip-bottom">
              <img className='rounded-full w-10 h-10' src={user?.photoURL} alt="" />
            </div>
          }
          <Button variant="outline" className="text-white border-white"><Link to='/register'>Register</Link></Button>
          {
            user ? <Button onClick={handleLogOut} variant="default">Logout</Button> :
              <Button variant="default"><Link to='/login'>Login</Link></Button>
          }

        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer flex items-center gap-2" onClick={() => setIsOpen(true)}>
        {
            user && <div data-tip={user?.displayName} className="tooltip tooltip-bottom">
              <img className='rounded-full w-10 h-10' src={user?.photoURL} alt="" />
            </div>
          }
          <Menu size={28} />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-gray-800 text-white p-6 transition-transform duration-300 z-50 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center">
        <div className="text-xl font-bold flex gap-2 items-center"><img className="w-10 h-10" src={logo} alt="" />jobPortal</div>
          <X size={28} className="cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>

        <div className="mt-6 flex flex-col gap-4 text-lg">
          {navItem}
        </div>

        <div className="mt-6 flex flex-col gap-4">
        
          <Button variant="outline" className="text-white border-white"><Link to='/register'>Register</Link></Button>
          {
            user ? <Button onClick={handleLogOut} variant="default">Logout</Button> :
              <Button variant="default"><Link to='/login'>Login</Link></Button>
          }
        </div>
      </div>
    </nav>
  );
}
