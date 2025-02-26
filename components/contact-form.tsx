"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="mt-1 block w-full rounded-md bg-white/10 border border-gray-600 text-white px-3 py-2"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md bg-white/10 border border-gray-600 text-white px-3 py-2"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          className="mt-1 block w-full rounded-md bg-white/10 border border-gray-600 text-white px-3 py-2"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && (
        <p className="text-green-500">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500">Failed to send message. Please try again.</p>
      )}
    </motion.form>
  );
}; 