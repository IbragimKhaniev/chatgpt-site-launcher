import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-semibold">Logo</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Features
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                About
              </a>
              <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-secondary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-secondary transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-secondary transition-colors"
            >
              Features
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md hover:bg-secondary transition-colors"
            >
              About
            </a>
            <button className="w-full text-left px-3 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              Get Started
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;