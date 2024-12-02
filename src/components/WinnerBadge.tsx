import React from 'react';
import { Crown, Award, Medal } from 'lucide-react';
import { motion } from 'framer-motion';

interface WinnerBadgeProps {
  place: number;
}

export function WinnerBadge({ place }: WinnerBadgeProps) {
  const badges = {
    1: {
      color: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
      icon: Crown,
      text: '1st Place',
      animation: {
        rotate: [0, -10, 10, -10, 0],
        scale: [1, 1.1, 1],
      },
    },
    2: {
      color: 'bg-gradient-to-r from-gray-300 to-gray-500',
      icon: Medal,
      text: 'Runner-Up',
      animation: {
        y: [0, -3, 0],
      },
    },
    3: {
      color: 'bg-gradient-to-r from-amber-500 to-amber-700',
      icon: Award,
      text: 'Runner-Up',
      animation: {
        scale: [1, 1.05, 1],
      },
    },
  };

  const badge = badges[place as keyof typeof badges];
  const Icon = badge.icon;

  return (
    <motion.div
      className="absolute top-4 right-4 z-10"
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
    >
      <motion.div
        className={`${badge.color} text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2`}
        animate={badge.animation}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <Icon className="w-5 h-5" />
        <span className="text-sm font-bold whitespace-nowrap">{badge.text}</span>
      </motion.div>
      
      {place === 1 && (
        <motion.div
          className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-200 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      )}
    </motion.div>
  );
}