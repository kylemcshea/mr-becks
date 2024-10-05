"use client";

import { useState } from "react";
import { Star, Menu, X, Instagram, Twitter, Mail } from "lucide-react";

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 text-white font-['Montserrat']">
      <header className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ryan Beckler</h1>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
        <nav className={`${isMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <a href="#home" className="hover:text-purple-300">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-purple-300">
                Products
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-purple-300">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-purple-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <Star
                key={i}
                className="absolute text-white opacity-70"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animation: `twinkle ${Math.random() * 5 + 3}s infinite`,
                }}
              />
            ))}
          </div>
          <div className="text-center z-10">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              Ryan Beckler
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Vaping Enthusiast & Connoisseur
            </p>
            <a
              href="#products"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300"
            >
              Explore My Collection
            </a>
          </div>
        </section>

        <section id="products" className="py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Featured Vape Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Cosmic Cloud", "Nebula Nectar", "Galactic Grape"].map(
              (product) => (
                <div
                  key={product}
                  className="bg-blue-800 bg-opacity-50 rounded-lg p-6 text-center"
                >
                  <img
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={product}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{product}</h3>
                  <p className="text-purple-300">A stellar vaping experience</p>
                </div>
              )
            )}
          </div>
        </section>

        <section id="about" className="py-16 px-4 bg-purple-800 bg-opacity-30">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">About Ryan</h2>
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Ryan Beckler"
              className="w-48 h-48 rounded-full mx-auto mb-8"
            />
            <p className="text-lg mb-6">
              Ryan Beckler is a passionate vaping enthusiast with a taste for
              the extraordinary. With years of experience in the vaping
              community, Ryan has developed a keen sense for flavors and an eye
              for sleek, innovative devices.
            </p>
            <p className="text-lg">
              When hes not exploring new vape juices or testing the latest mods,
              you can find Ryan stargazing or discussing the wonders of the
              cosmos with fellow space enthusiasts.
            </p>
          </div>
        </section>

        <section id="contact" className="py-16 px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Get in Touch
          </h2>
          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-purple-300 transition duration-300"
            >
              <Instagram size={32} />
            </a>
            <a
              href="#"
              className="text-white hover:text-purple-300 transition duration-300"
            >
              <Twitter size={32} />
            </a>
            <a
              href="mailto:ryan@example.com"
              className="text-white hover:text-purple-300 transition duration-300"
            >
              <Mail size={32} />
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 bg-opacity-50 py-4 text-center">
        <p>&copy; 2023 Ryan Beckler. All rights reserved.</p>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap");

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
