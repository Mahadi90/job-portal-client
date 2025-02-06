import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../../components/ui/Button";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-lg">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>

        {/* Register/Login Buttons */}
        <div className="hidden md:flex gap-4">
          <Button variant="outline" className="text-white border-white"><Link to='/register'>Register</Link></Button>
          <Button variant="default"><Link to='/login'>Login</Link></Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-3/4 bg-gray-800 text-white p-6 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Logo</h2>
          <X size={28} className="cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>

        <div className="mt-6 flex flex-col gap-4 text-lg">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <Button variant="outline" className="text-white border-white"><Link to='/register'>Register</Link></Button>
          <Button variant="default"><Link to='/login'>Login</Link></Button>
        </div>
      </div>
    </nav>
  );
}
