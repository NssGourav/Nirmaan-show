import React from 'react';
import { motion } from 'framer-motion';
import { WebsiteCard } from './WebsiteCard';
import { Website } from '../types';

interface WebsiteSectionProps {
  title: string;
  websites: Website[];
  startIndex?: number;
  showRank?: boolean;
}

export function WebsiteSection({ 
  title, 
  websites,
  startIndex = 0,
  showRank = false
}: WebsiteSectionProps) {
  if (!websites.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {websites.map((website, index) => (
          <WebsiteCard
            key={website.id}
            website={website}
            index={startIndex + index}
            place={showRank ? startIndex + index + 1 : undefined}
          />
        ))}
      </div>
    </motion.section>
  );
}