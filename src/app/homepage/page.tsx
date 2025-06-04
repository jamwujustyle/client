"use client";
import React, { useState } from "react";
import { Globe, Lock, Zap, Diamond, Eye } from "lucide-react";

const EldoradoLanding = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const features = [
    {
      icon: <Lock className="w-8 h-8 text-cyan-400" />,
      title: "Enhanced Security",
      description:
        "Our marketplace employs next-gen encryption and blockchain technology to ensure your digital assets remain secure at all times.",
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Lightning Fast",
      description:
        "Experience lightning-fast transactions and seamless user experience, powered by cutting-edge technology.",
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Global Access",
      description:
        "Connect with buyers and sellers from around the world, 24/7, in our constantly evolving digital marketplace.",
    },
    {
      icon: <Diamond className="w-8 h-8 text-cyan-400" />,
      title: "Unique Products",
      description:
        "Discover one-of-a-kind digital assets, from cybernetic enhancements to neural",
    },
  ];

  const products = [
    {
      id: 1,
      image: "/api/placeholder/320/200",
      category: "DIGITAL ART",
      title: "NeoTokyo Dreamscape",
      price: "2.5 ETH",
      bgColor: "from-purple-900 to-pink-900",
    },
    {
      id: 2,
      image: "/api/placeholder/320/200",
      category: "3D MODEL",
      title: "Cyber Ronin X-1",
      price: "1.8 ETH",
      bgColor: "from-pink-900 to-purple-900",
    },
    {
      id: 3,
      image: "/api/placeholder/320/200",
      category: "CODE PACKAGE",
      title: "Neural Interface API",
      price: "0.75 ETH",
      bgColor: "from-cyan-900 to-blue-900",
    },
    {
      id: 4,
      image: "/api/placeholder/320/200",
      category: "GAME ASSET",
      title: "Cyber Samurai Pack",
      price: "3.2 ETH",
      bgColor: "from-orange-900 to-red-900",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
               `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center p-6 border-b border-cyan-500/20">
        <div className="text-2xl font-bold">
          <span className="text-cyan-400">ELDO</span>
          <span className="text-purple-400">RADO</span>
        </div>

        <div className="flex space-x-8">
          {["HOME", "MARKETPLACE", "ABOUT", "LOGIN"].map((item, index) => (
            <button
              key={item}
              className={`relative px-4 py-2 transition-all duration-300 hover:text-cyan-400 ${
                item === "MARKETPLACE" ? "text-purple-400" : "text-cyan-400"
              }`}
              onMouseEnter={() => setHoveredButton(item)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <span className="relative z-10">{item}</span>
              {hoveredButton === item && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg animate-pulse"></div>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex items-center justify-between px-16 py-20">
        <div className="flex-1 max-w-2xl">
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              THE FUTURE OF
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              DIGITAL
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              MARKETPLACE
            </span>
          </h1>

          <p className="text-cyan-300 text-lg mb-12 leading-relaxed">
            Welcome to Eldorado, where cyberpunk meets commerce. Trade digital
            assets in a secure, decentralized ecosystem with futuristic style
            and next-gen encryption.
          </p>

          <div className="flex space-x-6">
            {[
              { text: "EXPLORE MARKET", color: "from-cyan-500 to-blue-500" },
              { text: "JOIN NOW", color: "from-purple-500 to-pink-500" },
            ].map((button, index) => (
              <button
                key={button.text}
                className={`relative px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  index === 0
                    ? "hover:shadow-cyan-500/50"
                    : "hover:shadow-purple-500/50"
                }`}
                onMouseEnter={() => setHoveredButton(button.text)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    button.color
                  } rounded-lg transition-all duration-300 ${
                    hoveredButton === button.text ? "opacity-100" : "opacity-80"
                  }`}
                ></div>
                <span className="relative z-10">{button.text}</span>
                {hoveredButton === button.text && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${button.color} rounded-lg animate-pulse opacity-50`}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-end">
          <div className="relative">
            <div className="w-96 h-96 rounded-2xl border-2 border-cyan-400 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20"></div>
              <img
                src="/api/placeholder/400/400"
                alt="Cyberpunk Character"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-lg -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-16 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            WHY CHOOSE ELDORADO
          </span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/50 hover:bg-gray-800/70 cursor-pointer"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {feature.description}
              </p>

              {hoveredFeature === index && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl animate-pulse"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur -z-10"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-16 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            FEATURED PRODUCTS
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative rounded-2xl border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-cyan-400/50 hover:transform hover:scale-105">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${product.bgColor} opacity-60`}
                  ></div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-purple-400 font-semibold mb-2">
                    {product.category}
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">
                    {product.title}
                  </h3>
                  <div className="text-2xl font-bold text-white mb-4">
                    {product.price}
                  </div>

                  <button className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 transform hover:scale-105">
                    <span className="flex items-center justify-center">
                      <Eye className="w-4 h-4 mr-2" />
                      VIEW DETAILS
                    </span>
                  </button>
                </div>

                {hoveredProduct === product.id && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur -z-10"></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 px-16 py-12">
        <div className="grid grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-4">ELDORADO</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-4">
              MARKETPLACE
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  All Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Digital Art
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Code & Scripts
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  3D Models
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-400 transition-colors">
                  Safety Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-4">CONNECT</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400 transition-colors">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-500/20 mt-12 pt-8 text-center text-gray-400">
          © 2025 Eldorado | The Future of Digital Marketplace
        </div>
      </footer>
    </div>
  );
};

export default EldoradoLanding;
