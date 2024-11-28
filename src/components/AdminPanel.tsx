import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import { Website } from '../types';

interface AdminPanelProps {
  onAddWebsite: (website: Omit<Website, 'id'>) => void;
}

export function AdminPanel({ onAddWebsite }: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [formData, setFormData] = useState({
    teamName: '',
    liveUrl: '',
    members: [{ name: '', email: '' }]
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email === 'admin@nstsdc.org' && loginData.password === 'NST-SDC@2024') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddWebsite(formData);
    setFormData({
      teamName: '',
      liveUrl: '',
      members: [{ name: '', email: '' }]
    });
  };

  const addMember = () => {
    setFormData({
      ...formData,
      members: [...formData.members, { name: '', email: '' }]
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleLogin} className="space-y-4">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Lock size={16} />
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add New Website</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Team Name</label>
          <input
            type="text"
            value={formData.teamName}
            onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Live URL</label>
          <input
            type="url"
            value={formData.liveUrl}
            onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Team Members</label>
          {formData.members.map((member, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Name"
                value={member.name}
                onChange={(e) => {
                  const newMembers = [...formData.members];
                  newMembers[index].name = e.target.value;
                  setFormData({ ...formData, members: newMembers });
                }}
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={member.email}
                onChange={(e) => {
                  const newMembers = [...formData.members];
                  newMembers[index].email = e.target.value;
                  setFormData({ ...formData, members: newMembers });
                }}
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addMember}
            className="text-sm text-blue-600 hover:text-blue-700"
          >
            + Add Member
          </button>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Website
        </button>
      </form>
    </div>
  );
}