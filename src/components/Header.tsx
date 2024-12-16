import Link from "next/link";

export default function header() {
    return (
      <header className="bg-[rgb(30,30,29)] text-white">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
      
          <div className="text-2xl font-semibold">
            <Link href="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="w-24 h-24" /> 
            </Link>
          </div>
  
      
          <nav className="space-x-6 poppins-semibold text-[15]">
            <Link href="#home" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="#projects" className="hover:text-gray-300">
              Projects
            </Link>
            <Link href="#experience" className="hover:text-gray-300">
              Experience
            </Link>
            <Link href="#contact" className="hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    );
  }