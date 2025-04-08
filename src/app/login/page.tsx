'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/tools/UserManager';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = login(username, password);
    
    if (user) {
      // For demonstration purposes, we're using a simple login function
      // In a real app, this would set cookies/tokens
      router.push('/users');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Login</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter username (try 'admin' or 'user1')"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Any password works in this demo"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
        
        <div className="mt-4 text-sm text-gray-600">
          <p>For demo purposes, you can login as:</p>
          <ul className="list-disc pl-5 mt-1">
            <li>Username: admin (admin role)</li>
            <li>Username: user1 (regular user)</li>
            <li>Any password will work</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 