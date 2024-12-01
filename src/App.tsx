import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WebsiteSection } from './components/WebsiteSection';
import { AdminPanel } from './components/AdminPanel';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useWebsites } from './hooks/useWebsites';
import { Website } from './types';

function App() {
  const [showAdmin, setShowAdmin] = useState(false);
  const { websites, addWebsite } = useWebsites();

  const handleAddWebsite = (newWebsite: Omit<Website, 'id'>) => {
    const success = addWebsite(newWebsite);
    if (success) {
      setShowAdmin(false);
    }
  };

  const topThree = websites.slice(0, 3);
  const otherParticipants = websites.slice(3);

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
              key="sections"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WebsiteSection
                title="Top Participants"
                websites={topThree}
                startIndex={0}
                showRank
              />
              {otherParticipants.length > 0 && (
                <WebsiteSection
                  title="All Participants"
                  websites={otherParticipants}
                  startIndex={topThree.length}
                  showDemoPreview
                />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

export default App;