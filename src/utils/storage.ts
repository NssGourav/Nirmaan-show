import { Website } from '../types';

const STORAGE_KEY = 'nirmaan2024_websites';

export const saveWebsites = (websites: Website[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(websites));
  } catch (error) {
    console.error('Error saving websites:', error);
  }
};

export const loadWebsites = (): Website[] | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error loading websites:', error);
    return null;
  }
};