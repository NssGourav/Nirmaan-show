export const saveWebsites = (websites: any[]) => {
  localStorage.setItem('nirmaan2024_websites', JSON.stringify(websites));
};

export const loadWebsites = () => {
  const stored = localStorage.getItem('nirmaan2024_websites');
  if (stored) {
    return JSON.parse(stored);
  }
  return null;
};