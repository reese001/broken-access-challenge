export interface User {
  id: number;
  username: string;
  email: string;
  role: 'user' | 'admin';
  createdAt: string;
}

// This is our mock database
export const users: User[] = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    role: 'admin',
    createdAt: '2023-01-01'
  },
  {
    id: 2,
    username: 'user1',
    email: 'user1@example.com',
    role: 'user',
    createdAt: '2023-01-02'
  },
  {
    id: 3,
    username: 'user2',
    email: 'user2@example.com',
    role: 'user',
    createdAt: '2023-01-03'
  },
  {
    id: 4,
    username: 'user3',
    email: 'user3@example.com',
    role: 'user',
    createdAt: '2023-01-04'
  }
];

// Get current user from localStorage (client-side)
export function getCurrentUser(): User | null {
  if (typeof window === 'undefined') return null;
  
  const storedUser = localStorage.getItem('currentUser');
  return storedUser ? JSON.parse(storedUser) : null;
}

export function login(username: string, password: string): User | null {
  // For demo purposes, any password works
  const user = users.find(u => u.username === username);
  if (user) {
    // Save user to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    return user;
  }
  return null;
}

export function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('currentUser');
  }
}

export function isLoggedIn(): boolean {
  return getCurrentUser() !== null;
}

export function isAdmin(): boolean {
  const user = getCurrentUser();
  return user?.role === 'admin';
}

// Get the current user
export const currentUser = getCurrentUser();

// Get all users
export function getAllUsers(): User[] {
  return users;
}

// Delete a user
export function deleteUser(id: number): boolean {
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    return true;
  }
  return false;
} 