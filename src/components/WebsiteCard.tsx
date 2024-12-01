import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Website } from '../types';
import { LivePreview } from './LivePreview';
import { WinnerBadge } from './WinnerBadge';

interface WebsiteCardProps {
  website: Website;
  index: number;
  place?: number;
}

export function WebsiteCard({ website, index, place }: WebsiteCardProps) {
  const isWinner = place && place <= 3;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl ${
        isWinner ? 'ring-2 ring-offset-2 ' + (
          place === 1 ? 'ring-yellow-400' :
          place === 2 ? 'ring-gray-400' :
          'ring-amber-600'
        ) : ''
      }`}
    >
      {isWinner && <WinnerBadge place={place} />}
      
      <div className="group relative">
        <LivePreview url={website.liveUrl} title={website.teamName} />
        <motion.a
          href={website.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 font-medium">
            <ExternalLink size={16} />
            Visit Website
          </span>
        </motion.a>
      </div>

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
      </div>
    </motion.div>
  );
}