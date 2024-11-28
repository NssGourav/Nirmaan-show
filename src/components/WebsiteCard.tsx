import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Website } from '../types';
import { LivePreview } from './LivePreview';

interface WebsiteCardProps {
  website: Website;
  index: number;
}

export function WebsiteCard({ website, index }: WebsiteCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
    >
      <LivePreview url={website.liveUrl} title={website.teamName} />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{website.teamName}</h3>
        <div className="space-y-2 mb-4">
          {website.members.map((member, idx) => (
            <motion.div 
              key={idx} 
              className="text-sm text-gray-600"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
            >
              <span className="font-medium">{member.name}</span>
              <span className="mx-2">•</span>
              <span className="text-gray-500">{member.email}</span>
            </motion.div>
          ))}
        </div>
        <motion.a
          href={website.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-700 hover:to-purple-700 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Visit Site
          <ExternalLink size={16} />
        </motion.a>
      </div>
    </motion.div>
  );
}