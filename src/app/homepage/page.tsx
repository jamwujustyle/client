import React from "react";
import { ArrowRight, Shield, Zap, Globe, Gem } from "lucide-react";

const HomePage = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Grid Overlay */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
               `,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/30">
        <div className="max-w-screen-2xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-black tracking-wider">
              <span
                className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
                           hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-300"
              >
                ELDORADO
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {["HOME", "MARKETPLACE", "ABOUT", "LOGIN"].map((item) => (
                <a
                  key={item}
                  href="/auth"
                  className="text-cyan-400 hover:text-purple-400 hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]
                           transition-all duration-300 tracking-wider text-sm font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-screen-2xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider leading-tight">
                <span
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
                               animate-text-glow"
                >
                  The Future of
                </span>
                <br />
                <span
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
                               animate-text-glow"
                >
                  Digital
                </span>
                <br />
                <span
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent
                               animate-text-glow"
                >
                  Marketplace
                </span>
              </h1>

              <p className="text-cyan-300/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                Welcome to Eldorado, where cyberpunk meets commerce. Trade
                digital assets in a secure, decentralized ecosystem with
                futuristic style and next-gen encryption.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="group relative px-8 py-3 border-2 bg-cyan-500 border-cyan-500 text-black
                                 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500
                                 hover:border-fuchsia-500 hover:text-white hover:shadow-[0_0_15px_rgba(217,70,239,0.5)] hover:-translate-y-1
                                 transition-all duration-300 rounded font-semibold tracking-wider uppercase"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Market
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </button>

                <button
                  className="group relative px-8 py-3 border-2 bg-cyan-500 border-cyan-500 text-black
                                 hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500
                                 hover:border-fuchsia-500 hover:text-white hover:shadow-[0_0_15px_rgba(217,70,239,0.5)] hover:-translate-y-1
                                 transition-all duration-300 rounded font-semibold tracking-wider uppercase"
                >
                  <span className="relative z-10">Join Now</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-cyan-500/30
                               rounded-2xl blur-2xl animate-pulse"
                ></div>
                <img
                  src="/images/1.jpg"
                  alt="Cyberpunk Character"
                  className="relative z-10 w-full h-full object-cover rounded-2xl border-2 border-cyan-400
                           shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-wider">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Why Choose Eldorado
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Enhanced Security",
                description:
                  "Our marketplace employs next-gen encryption and blockchain technology to ensure your digital assets remain secure at all times.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Experience lightning-fast transactions and seamless user experience, powered by cutting-edge technology.",
              },
              {
                icon: Globe,
                title: "Global Access",
                description:
                  "Connect with buyers and sellers from around the world, 24/7, in our constantly evolving digital marketplace.",
              },
              {
                icon: Gem,
                title: "Unique Products",
                description:
                  "Discover one-of-a-kind digital assets, from cybernetic enhancements to neural interface modules.",
              },
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 bg-gradient-to-br from-gray-900/50 to-black/50
                           border border-cyan-500/30 rounded-xl hover:border-cyan-400/60
                           hover:-translate-y-2 transition-all duration-300
                           hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5
                                 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>

                  <div className="relative z-10 space-y-4">
                    <div
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20
                                   flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    >
                      <IconComponent className="w-6 h-6 text-cyan-400" />
                    </div>

                    <h3 className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>

                    <p className="text-cyan-300/70 group-hover:text-cyan-300/90 transition-colors leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="relative text-3xl md:text-4xl font-black text-center mb-16 uppercase tracking-wider">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Products
            </span>
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 h-1 bg-[linear-gradient(to_right,transparent_0%,theme(colors.cyan.400)_30%,theme(colors.purple.500)_70%,transparent_100%)] rounded-full opacity-75 shadow-[0_0_6px_theme(colors.cyan.400),_0_0_6px_theme(colors.purple.500)]"></div>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {" "}
            {/* Added pt-4 to give space for the line */}
            {[
              {
                image: "/images/2.jpg",
                category: "DIGITAL ART",
                title: "NeoTokyo Dreamscape",
                price: "2.5 ETH",
              },
              {
                image: "/images/3.jpg",
                category: "3D MODEL",
                title: "Cyber Ronin X-7",
                price: "1.8 ETH",
              },
              {
                image: "/images/4.png",
                category: "CODE PACKAGE",
                title: "Neural Interface API",
                price: "0.75 ETH",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/50 to-black/50
                         border border-cyan-500/30 rounded-xl overflow-hidden
                         hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.4),_0_0_8px_rgba(0,255,255,0.6)_inset]
                         hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative aspect-square">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                  {/* Removed the opacity overlay div as it's not in the target screenshot */}
                </div>

                <div className="p-6 space-y-3">
                  <div className="text-xs font-semibold text-purple-400 tracking-wider uppercase">
                    {product.category}
                  </div>

                  <h3 className="text-lg font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {product.title}
                  </h3>

                  <div className="text-xl font-bold text-white mb-4">
                    {product.price}
                  </div>

                  <button
                    className="w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white border-2 border-transparent
                                   hover:bg-gradient-to-r hover:from-fuchsia-500 hover:to-cyan-500
                                   hover:border-fuchsia-500 hover:text-white hover:shadow-[0_0_15px_rgba(217,70,239,0.5)] hover:-translate-y-1
                                   transition-all duration-300 rounded font-semibold text-sm uppercase tracking-wider"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/90 border-t border-cyan-500/30 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {[
              {
                title: "Eldorado",
                links: ["About Us", "Our Team", "Careers", "Contact"],
              },
              {
                title: "Marketplace",
                links: [
                  "All Categories",
                  "Digital Art",
                  "Code & Scripts",
                  "3D Models",
                ],
              },
              {
                title: "Support",
                links: [
                  "Help Center",
                  "Safety Center",
                  "Community Guidelines",
                  "Terms of Service",
                ],
              },
              {
                title: "Connect",
                links: ["Twitter", "Discord", "Instagram", "GitHub"],
              },
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-lg font-bold text-cyan-400 uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="/auth"
                        className="text-cyan-300/70 hover:text-purple-400
                                           hover:drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]
                                           transition-all duration-300"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-cyan-500/20">
            <p className="text-cyan-300/50">
              © 2025 Eldorado | The Future of Digital Marketplace
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default HomePage;
