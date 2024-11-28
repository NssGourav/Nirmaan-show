import React from 'react';
import { Settings, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onAdminClick: () => void;
}

export function Header({ onAdminClick }: HeaderProps) {
  return (
    <motion.header 
      className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Code2 className="w-8 h-8 text-white" />
            <div>
              <motion.h1 
                className="text-3xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                NIRMAAN 2024
              </motion.h1>
              <motion.p 
                className="text-blue-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Student Website Showcase
              </motion.p>
            </div>
          </div>
          <motion.button
            onClick={onAdminClick}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Admin Panel"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Settings className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}