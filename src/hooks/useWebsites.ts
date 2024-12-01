import { useState, useEffect } from 'react';
import { Website } from '../types';
import websiteData from '../data/websites.json';

export const useWebsites = () => {
  const [websites, setWebsites] = useState<Website[]>([]);

  useEffect(() => {
    setWebsites(websiteData.websites);
  }, []);

  const addWebsite = (newWebsite: Omit<Website, 'id'>) => {
    const id = Math.max(...websites.map(w => w.id), 0) + 1;
    const updatedWebsites = [...websites, { ...newWebsite, id }];
    setWebsites(updatedWebsites);
    return true;
  };

  return {
    websites,
    addWebsite
  };
};