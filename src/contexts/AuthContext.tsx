import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserRole = 'student' | 'parent' | null;

interface User {
  id: string;
  role: UserRole;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (id: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials
const DEMO_USERS = {
  'student123': { password: 'demo123', role: 'student' as UserRole, name: 'Alex Student' },
  'parent123': { password: 'demo123', role: 'parent' as UserRole, name: 'Jamie Parent' }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (id: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const demoUser = DEMO_USERS[id as keyof typeof DEMO_USERS];
    
    if (demoUser && demoUser.password === password) {
      setUser({
        id,
        role: demoUser.role,
        name: demoUser.name
      });
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = user !== null;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};