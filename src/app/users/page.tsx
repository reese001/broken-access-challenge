'use client';

import { useEffect, useState } from 'react';
import { getAllUsers, isLoggedIn, User, logout, getCurrentUser } from '@/tools/UserManager';
import { useRouter } from 'next/navigation';

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    if (!isLoggedIn()) {
      router.push('/login');
      return;
    }
    
    // Get current user
    setCurrentUser(getCurrentUser());
    
    // Get all users
    setUsers(getAllUsers());
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  if (users.length === 0) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">All Users</h2>
        <div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded text-sm"
          >
            Logout
          </button>
          <a 
            href="/admin"
            className="ml-2 bg-gray-500 hover:bg-gray-600 text-white py-1 px-3 rounded text-sm"
          >
            Admin Panel
          </a>
        </div>
      </div>
      
      {/* Display current user info */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              Logged in as: <strong>{currentUser?.username}</strong> (Role: {currentUser?.role})
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    user.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>This page is protected by authentication but the Admin panel has a broken access control vulnerability.</p>
      </div>
    </div>
  );
} 