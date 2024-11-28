import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WebsiteCard } from './components/WebsiteCard';
import { AdminPanel } from './components/AdminPanel';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import websiteData from './data/websites.json';
import { Website } from './types';
import { saveWebsites, loadWebsites } from './utils/storage';

function App() {
  const [websites, setWebsites] = useState<Website[]>([]);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const savedWebsites = loadWebsites();
    if (savedWebsites) {
      setWebsites(savedWebsites);
    } else {
      setWebsites(websiteData.websites);
      saveWebsites(websiteData.websites);
    }
  }, []);

  const handleAddWebsite = (newWebsite: Omit<Website, 'id'>) => {
    const id = Math.max(...websites.map(w => w.id), 0) + 1;
    const updatedWebsites = [...websites, { ...newWebsite, id }];
    setWebsites(updatedWebsites);
    saveWebsites(updatedWebsites);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header onAdminClick={() => setShowAdmin(!showAdmin)} />

      <main className="flex-grow max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {showAdmin ? (
            <motion.div
              key="admin"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <AdminPanel onAddWebsite={handleAddWebsite} />
            </motion.div>
          ) : (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {websites.map((website, index) => (
                <WebsiteCard key={website.id} website={website} index={index} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;