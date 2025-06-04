import React from "react";
import Link from "next/link";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "MARKETPLACE", path: "#" }, // Placeholder, to be updated later
  { name: "ABOUT", path: "#" }, // Placeholder, to be updated later
  { name: "LOGIN", path: "/auth" },
];

const Header = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/30">
      <div className="max-w-screen-2xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black tracking-wider">
            <Link href="/" legacyBehavior>
              <a
                className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
                         hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-300 cursor-pointer"
              >
                ELDORADO
              </a>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.path} legacyBehavior>
                <a className="text-animate-gradient-fill text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] transition-all duration-300 tracking-wider text-sm font-medium">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
