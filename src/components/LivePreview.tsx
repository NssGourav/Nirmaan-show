import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, ExternalLink } from 'lucide-react';

interface LivePreviewProps {
  url: string;
  title: string;
}

export function LivePreview({ url, title }: LivePreviewProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current && iframeRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const desiredWidth = 1920; // Standard desktop width
        const newScale = containerWidth / desiredWidth;
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div ref={containerRef} className="aspect-video relative w-full overflow-hidden rounded-t-xl bg-gray-50">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
        </div>
      )}
      
      {hasError ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50 p-4">
          <p className="text-gray-600 text-center mb-2">Preview not available</p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 flex items-center gap-1"
          >
            <ExternalLink size={16} />
            Visit Website
          </a>
        </div>
      ) : (
        <motion.div 
          className="w-full h-full"
          style={{
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <motion.iframe
            ref={iframeRef}
            src={url}
            title={title}
            className="border-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            onLoad={handleLoad}
            onError={handleError}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            loading="lazy"
            style={{
              width: '1920px',
              height: '1080px',
              transform: `scale(${scale})`,
              transformOrigin: 'top left',
              position: 'absolute',
              top: 0,
              left: 0
            }}
          />
        </motion.div>
      )}
      
      <div className="absolute inset-0 pointer-events-none border border-gray-200 rounded-t-xl" />
      
      {!isLoading && !hasError && (
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      )}
    </div>
  );
}