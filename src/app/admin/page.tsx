'use client';

import { useEffect, useState } from 'react';
import { getAllUsers, isLoggedIn, User, deleteUser, getCurrentUser } from '@/tools/UserManager';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const router = useRouter();
  
  useEffect(() => {
    if (!isLoggedIn()) {
      router.push('/login');
      return;
    }
    
    // Get current user for display
    setCurrentUser(getCurrentUser());
    
    // Load users
    setUsers(getAllUsers());
  }, [router]);

  const handleDeleteUser = (id: number) => {
    if (deleteUser(id)) {
      setUsers(getAllUsers());
    }
  };

  if (users.length === 0) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Admin Dashboard</h2>
        <div>
          <a 
            href="/users"
            className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded text-sm"
          >
            Back to Users
          </a>
        </div>
      </div>
      
      {/* Display current user info */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
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
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-400 text-sm text-red-700">
        <h3 className="font-bold">Security Vulnerability:</h3>
        <p className="mt-1">
          This admin page has a broken access control vulnerability. It only checks if a user is logged in, 
          not if they have the proper admin role. Any logged-in user can access this page and delete users.
        </p>
        <p className="mt-2">
          The proper fix would be to check for admin role permissions before allowing access to this page
          and its functions.
        </p>
      </div>
    </div>
  );
} 