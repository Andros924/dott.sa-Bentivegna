import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white p-4 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {/* Aggiungiamo i link ai social, che per ora possono essere placeholder */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Twitter
          </a>
        </div>
        <p className="text-sm text-gray-200">
          &copy; {new Date().getFullYear()} Dott.ssa Erminia Bentivegna - Tutti
          i diritti riservati
        </p>
      </div>
    </footer>
  );
};

export default Footer;
