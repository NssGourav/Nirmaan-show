import React from 'react';
import { motion } from 'framer-motion';

interface LivePreviewProps {
  url: string;
  title: string;
}

export function LivePreview({ url, title }: LivePreviewProps) {
  return (
    <div className="aspect-video relative w-full overflow-hidden rounded-t-xl bg-white">
      <motion.iframe
        src={url}
        title={title}
        className="w-full h-full border-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        sandbox="allow-scripts allow-same-origin"
      />
      <div className="absolute inset-0 pointer-events-none border border-gray-200 rounded-t-xl" />
    </div>
  );
}