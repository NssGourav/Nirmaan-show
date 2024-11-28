import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <motion.footer 
      className="bg-white py-8 mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-5 h-5 text-red-500" />
            </motion.div>
            <span>by Vivek W</span>
          </div>
          <div className="text-sm text-gray-500">
            <p>© 2024 DEV Club, NST-SDC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}