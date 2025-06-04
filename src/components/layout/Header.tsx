"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const navItems = [
  { name: "HOME", path: "/" },
  { name: "MARKETPLACE", path: "#" },
  { name: "ABOUT", path: "#" },
  { name: "LOGIN", path: "/auth" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [glitchText, setGlitchText] = useState("ELDORADO");

  // Glitch effect for logo
  const triggerGlitch = () => {
    const glitchChars = "!<>-_\\/[]{}—=+*^?#________";
    const originalText = "ELDORADO";
    let iterations = 0;

    const interval = setInterval(() => {
      setGlitchText(
        originalText
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return originalText[index];
            }
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join("")
      );

      if (iterations >= originalText.length) {
        clearInterval(interval);
        setGlitchText(originalText);
      }

      iterations += 1 / 3;
    }, 30);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".hamburger-btn")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/30">
        <div className="max-w-screen-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-black tracking-wider">
              <Link
                href="/"
                className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
                           hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-300 cursor-pointer
                           relative overflow-hidden block"
                onMouseEnter={triggerGlitch}
              >
                <span className="relative z-10">{glitchText}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent opacity-0 hover:opacity-100 transition-opacity duration-100 animate-pulse">
                  {glitchText}
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-animate-gradient-fill text-cyan-400 hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]
                               transition-all duration-100 tracking-wider text-sm font-medium relative group
                               hover:scale-105 active:scale-95 block"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>
                  <span className="absolute inset-0 text-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-75 transform translate-x-0.5 translate-y-0.5 pointer-events-none">
                    {item.name}
                  </span>
                  <span className="absolute inset-0 text-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-75 transform -translate-x-0.5 -translate-y-0.5 pointer-events-none">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className={`hamburger-btn md:hidden relative w-8 h-8 flex flex-col justify-center items-center
                         transition-all duration-200 ease-out group hover:scale-110 active:scale-95
                         ${isMenuOpen ? "rotate-90" : ""}`}
              aria-label="Toggle menu"
            >
              <div className="relative">
                {/* Glitch overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-100">
                  <div className="w-8 h-0.5 bg-red-500 transform translate-y-[-4px] rotate-0"></div>
                  <div className="w-8 h-0.5 bg-blue-500 transform translate-y-[4px] rotate-0"></div>
                </div>

                {/* Main hamburger lines */}
                <div
                  className={`w-8 h-0.5 bg-cyan-400 transition-all duration-200 ease-out transform origin-center
                               ${
                                 isMenuOpen
                                   ? "rotate-45 translate-y-0"
                                   : "-translate-y-2"
                               }
                               group-hover:shadow-[0_0_10px_rgba(0,255,255,0.8)] group-hover:bg-white`}
                ></div>
                <div
                  className={`w-8 h-0.5 bg-cyan-400 transition-all duration-200 ease-out transform origin-center
                               ${
                                 isMenuOpen
                                   ? "opacity-0 scale-0"
                                   : "opacity-100 scale-100"
                               }
                               group-hover:shadow-[0_0_10px_rgba(0,255,255,0.8)] group-hover:bg-white`}
                ></div>
                <div
                  className={`w-8 h-0.5 bg-cyan-400 transition-all duration-200 ease-out transform origin-center
                               ${
                                 isMenuOpen
                                   ? "-rotate-45 translate-y-0"
                                   : "translate-y-2"
                               }
                               group-hover:shadow-[0_0_10px_rgba(0,255,255,0.8)] group-hover:bg-white`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-out md:hidden
                      ${
                        isMenuOpen
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu absolute top-0 right-0 h-full w-80 max-w-[80vw]
                        bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl
                        border-l border-cyan-500/30 shadow-[-10px_0_50px_rgba(0,255,255,0.1)]
                        transform transition-all duration-300 ease-out
                        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {/* Menu Header */}
          <div className="px-6 py-8 border-b border-cyan-500/20">
            <div className="text-xl font-black tracking-wider">
              <span
                className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
                             drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]"
              >
                ≋ MENU ≋
              </span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="px-6 py-8 space-y-6">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block text-lg font-bold tracking-wider text-cyan-400
                               hover:text-white hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]
                               transition-all duration-150 ease-out relative group
                               hover:translate-x-2 active:translate-x-4 hover:scale-105 active:scale-110
                               border-l-2 border-transparent hover:border-cyan-400 pl-4 py-2
                               transform hover:bg-cyan-400/5`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                  animationDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                }}
              >
                <span className="relative z-10 flex items-center">
                  <span className="mr-3 text-cyan-500 group-hover:text-white transition-colors duration-150">
                    ▶
                  </span>
                  {item.name}
                </span>

                {/* Glitch effect layers */}
                <span
                  className="absolute inset-0 text-red-500 opacity-0 group-hover:opacity-20
                               transition-opacity duration-75 transform translate-x-1 flex items-center pl-4 pointer-events-none"
                >
                  <span className="mr-3">▶</span>
                  {item.name}
                </span>
                <span
                  className="absolute inset-0 text-blue-500 opacity-0 group-hover:opacity-20
                               transition-opacity duration-75 transform -translate-x-1 flex items-center pl-4 pointer-events-none"
                >
                  <span className="mr-3">▶</span>
                  {item.name}
                </span>

                {/* Scan line effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden pointer-events-none">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent
                                 transform -translate-x-full group-hover:translate-x-full transition-transform duration-500"
                  ></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-cyan-500/20">
            <div className="text-xs text-cyan-500/60 tracking-wider font-mono">
              <div className="animate-pulse">◆ SYSTEM STATUS: ONLINE</div>
              <div className="mt-1">◆ NEURAL LINK: ACTIVE</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
