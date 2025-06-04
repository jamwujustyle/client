"use client";
import React, { useState, useEffect } from "react";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Random glitch effect for the background
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center p-4">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div
          className={`absolute inset-0 transition-all duration-200 ${
            glitchActive ? "animate-pulse" : ""
          }`}
          style={{
            backgroundImage: `
                 linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
               `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${
                3 + Math.random() * 4
              }s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Back to Home Link */}
      <div className="absolute top-6 left-6 z-50">
        <button className="group relative text-cyan-400 hover:text-fuchsia-400 transition-all duration-300 font-mono font-bold tracking-wider">
          <span className="group-hover:animate-bounce">←</span> BACK TO HOME
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 group-hover:w-full transition-all duration-300" />
        </button>
      </div>

      {/* Main Auth Container */}
      <div className="relative w-full max-w-md">
        {/* Animated Border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-yellow-400 rounded-2xl opacity-75 blur-sm animate-pulse" />

        {/* Auth Box */}
        <div className="relative bg-black/90 backdrop-blur-xl border-2 border-cyan-400/50 rounded-2xl p-8 shadow-2xl">
          {/* Glitch Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-cyan-500/10 rounded-2xl transition-opacity duration-100 ${
              glitchActive ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Logo */}
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-4xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
              ELDORADO
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-500 mx-auto mt-2 rounded-full opacity-75" />
          </div>

          {/* Tab Navigation */}
          <div className="flex mb-8 bg-gray-900/50 rounded-lg p-1 relative z-10">
            {["login", "register"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`group relative flex-1 py-3 px-6 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-md overflow-hidden ${
                  activeTab === tab
                    ? "text-black"
                    : "text-cyan-400 hover:text-white"
                }`}
              >
                {/* Active Tab Background */}
                {activeTab === tab && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-fuchsia-500 animate-pulse" />
                )}

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-200" />

                {/* Glitch Effect on Hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 group-hover:animate-ping" />

                <span className="relative z-10">{tab}</span>

                {/* Underline Effect */}
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-300 ${
                    activeTab === tab ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Login Form */}
          {activeTab === "login" && (
            <div className="space-y-6 relative z-10">
              <div className="space-y-4">
                <div className="group">
                  <label className="block text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-gray-900/70 border border-cyan-400/30 rounded-lg text-cyan-400 placeholder-cyan-400/50 font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 group-hover:border-cyan-400/60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-fuchsia-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-full px-4 py-3 bg-gray-900/70 border border-cyan-400/30 rounded-lg text-cyan-400 placeholder-cyan-400/50 font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 group-hover:border-cyan-400/60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-fuchsia-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Login Button with Abrupt Hover */}
              <button className="group relative w-full py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-400 text-black hover:text-white font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-200 hover:shadow-[0_0_25px_rgba(217,70,239,0.6)] hover:-translate-y-1 hover:scale-105">
                {/* Glitch overlay on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-100" />

                {/* Scanning line effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-white opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />

                <span className="relative z-10 group-hover:animate-pulse">
                  ACCESS TERMINAL
                </span>
              </button>

              <div className="text-center">
                <button className="text-cyan-400/70 hover:text-cyan-400 text-sm font-mono transition-all duration-300 hover:animate-pulse">
                  Forgot your access code?
                </button>
              </div>
            </div>
          )}

          {/* Register Form */}
          {activeTab === "register" && (
            <div className="space-y-6 relative z-10">
              <div className="space-y-4">
                <div className="group">
                  <label className="block text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Choose a username"
                      className="w-full px-4 py-3 bg-gray-900/70 border border-cyan-400/30 rounded-lg text-cyan-400 placeholder-cyan-400/50 font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 group-hover:border-cyan-400/60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-fuchsia-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-gray-900/70 border border-cyan-400/30 rounded-lg text-cyan-400 placeholder-cyan-400/50 font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 group-hover:border-cyan-400/60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-fuchsia-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Create a password"
                      className="w-full px-4 py-3 bg-gray-900/70 border border-cyan-400/30 rounded-lg text-cyan-400 placeholder-cyan-400/50 font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 group-hover:border-cyan-400/60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-fuchsia-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Confirm your password"
                      className="w-full px-4 py-3 bg-gray-900/70 border border-cyan-400/30 rounded-lg text-cyan-400 placeholder-cyan-400/50 font-mono focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.3)] transition-all duration-300 group-hover:border-cyan-400/60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-fuchsia-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Register Button with Abrupt Hover */}
              <button className="group relative w-full py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-400 text-black hover:text-white font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-200 hover:shadow-[0_0_25px_rgba(217,70,239,0.6)] hover:-translate-y-1 hover:scale-105">
                {/* Glitch overlay on hover */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 group-hover:opacity-30 transition-opacity duration-100" />

                {/* Scanning line effect */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-white opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />

                <span className="relative z-10 group-hover:animate-pulse">
                  INITIALIZE ACCOUNT
                </span>
              </button>
            </div>
          )}

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-black text-cyan-400/70 font-mono font-bold uppercase tracking-wider">
                Or Connect Via
              </span>
            </div>
          </div>

          {/* OAuth Buttons with Intense Hover Effects */}
          <div className="grid grid-cols-3 gap-3 relative z-10">
            {[
              { name: "Google", icon: "🌐", color: "from-blue-500 to-red-500" },
              {
                name: "GitHub",
                icon: "⭐",
                color: "from-gray-700 to-purple-600",
              },
              {
                name: "Discord",
                icon: "💬",
                color: "from-indigo-500 to-purple-600",
              },
            ].map((provider) => (
              <button
                key={provider.name}
                className="group relative py-3 px-4 bg-gray-900/70 border border-cyan-400/30 rounded-lg hover:border-cyan-400 transition-all duration-200 overflow-hidden hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:-translate-y-1 hover:scale-105"
              >
                {/* Background glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${provider.color} opacity-0 group-hover:opacity-20 transition-opacity duration-200`}
                />

                {/* Glitch effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 group-hover:animate-ping" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center space-y-1">
                  <span className="text-lg group-hover:animate-bounce">
                    {provider.icon}
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-400 group-hover:text-white transition-colors duration-200">
                    {provider.name}
                  </span>
                </div>

                {/* Scanning line */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(180deg);
          }
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
